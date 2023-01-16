#include <WiFi.h>             // WIFI
#include <HTTPClient.h>       // HTTP code
#include <am1008w_k_i2c.h>    // 미세먼지 센서 라이브러리

AM1008W_K_I2C am1008w_k_i2c;
// wifi 연결상태 확인 변수 설정
int wifi_cnt = 0;
int error = 0;

// heater 변수 설정
int heater_pin = 27;
int heater_onoff = 0;
int heater_cnt = 0;

// fan 변수 설정
int fan_pin = 16;
int fan_onoff = 0;
int fan_cnt = 0;

// 가습기 변수 설정
int humidifier_pin = 17;
int humidifier_pin2 = 25;
int humidifier_onoff = 0;
int humidifier_cnt = 0;

// #define AM1008W_K_I2C_DEBUG

// wifi 아이디 비번
const char* ssid = "iPad";           // WiFi 아이디
const char* password =  "99999999"; // WiFi 비밀번호
String address = "http://172.20.10.5:5025/test1/sensors/";  // 데이터 전송할 URL
String result = "";
HTTPClient http;

void setup() {
  pinMode(heater_pin, OUTPUT);
  pinMode(fan_pin, OUTPUT); 
  pinMode(humidifier_pin, OUTPUT);
  pinMode(humidifier_pin2, OUTPUT);
 
  // WiFi 연결
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println("Connected to the WiFi network");

  // 미세먼지 연결
  am1008w_k_i2c.begin();
  delay(1000);
}

void loop() {
  uint8_t ret = am1008w_k_i2c.read_data_command();
  while (ret != 0) {
    ret = am1008w_k_i2c.read_data_command();
//    Serial.println("Sensor 재수집..");
    delay(300);
  }
  if (ret == 0) {
    Serial.println("PM sensor operation mode >>");
    
    switch (am1008w_k_i2c.get_pm_operation_mode())
    {
    case AM1008W_K_I2C_PSO_CLOSE: {
      Serial.println("Close");
      break;
    }
    case AM1008W_K_I2C_PSO_TIMING_MEASURING_MODE: {
      Serial.println("Timing measuring mode");
      break;
    }
    case AM1008W_K_I2C_PSO_DYNAMIC_MEASURING_MODE: {
      Serial.println("Dynamic measuring mode");
      break;
    }
    case AM1008W_K_I2C_PSO_CONTINOUS_MEASURING_MODE: {
      Serial.println("Continuous measuring mode");
      break;
    }
    case AM1008W_K_I2C_PSO_SINGLE_MEASURING_MODE: {
      Serial.println("Single measuring mode");
      break;
    }
    default:
      break;
    }
    
    float s_temperature = am1008w_k_i2c.get_temperature();
    float s_humid = am1008w_k_i2c.get_humidity();
    int s_co2 = am1008w_k_i2c.get_co2();
    int s_voc = am1008w_k_i2c.get_voc();
    int s_pm = am1008w_k_i2c.get_pm2p5();

  // Actuator 현재 상태 확인
    // heater 현재상태 확인하기
    int heater_state = digitalRead(heater_pin);
    // fan 현재상태 확인하기
    int fan_state = digitalRead(fan_pin);
    // 가습기 현재상태 확인하기
    int humidifier_state = digitalRead(humidifier_pin);
    Serial.print("히터 작동 상태 : ");
    Serial.println(heater_state);
    Serial.print("팬 작동 상태 : ");
    Serial.println(fan_state);
    Serial.print("가습기 작동 상태 : ");
    Serial.println(humidifier_state);
    
  //서버로 데이터
  if ((WiFi.status() == WL_CONNECTED)) { // WiFi 연결이 됬을 때
    wifi_cnt = 0;
    String send_value = address+"?time=1"+"&temp="+String(s_temperature)+"&humid="+String(s_humid)+"&co2="+String(s_co2)+"&voc="+String(s_voc)+"&pm="+String(s_pm)
                        +"&heater="+String(heater_state)+"&fan="+String(fan_state)+"&humi="+String(humidifier_state) ;
    http.begin(send_value);
    int httpCode = http.GET();
    if (httpCode > 0) {
      Serial.println(httpCode);
      // return 값을 ESP32로 받아옴
      result = http.getString();
      // Actuator onoff 상태 변수로 받음
      heater_onoff=result.substring(0,1).toInt();
      fan_onoff=result.substring(1,2).toInt();
      humidifier_onoff=result.substring(2,3).toInt();
      Serial.print("히터 : ");
      Serial.println(heater_onoff);
      Serial.print("팬 : ");
      Serial.println(fan_onoff);
      Serial.print("가습기 : ");
      Serial.println(humidifier_onoff);
      http.end();
      
    } else {
      Serial.println("Error on HTTP request");
    }
    
    if (httpCode == 200) { // 서버에서 제대로 값을 받아왔을 때 200일때, 서버 알고리즘 실행
      error = 0;
      Serial.println("정상적인 서버 연결-code200");
      digitalWrite(heater_pin,heater_onoff);
      digitalWrite(fan_pin,fan_onoff);
      digitalWrite(humidifier_pin,humidifier_onoff);
      digitalWrite(humidifier_pin2,humidifier_onoff);

    }else{ // 서버에서 제대로 값을 받아오지 못했을 때 200이 아닐때, 자체적인 알고리즘 실행
      Serial.println("비정상적인 서버 연결");
      // 히터
      if (s_temperature <= 28){
        digitalWrite(heater_pin,HIGH);
      }else if (s_temperature > 30){
        digitalWrite(heater_pin,LOW);
      }
      // 팬
      if (s_humid>80 || s_temperature > 35){ // 히터 열 35이상일때 팬돌림
        digitalWrite(fan_pin,HIGH);
      }else if (s_humid<=60 || s_temperature <28){
        digitalWrite(fan_pin,LOW);
      }
      // 가습기
      if (s_humid>80){
        digitalWrite(humidifier_pin,LOW);
        digitalWrite(humidifier_pin2,LOW);
      }else if (s_humid<=60){
        digitalWrite(humidifier_pin,HIGH);
        digitalWrite(humidifier_pin2,HIGH);
      }
      error = error +1;
      Serial.print(error);
      Serial.println("번째 서버와 비정상적 연결");
    }
  }else{ // wifi 연결이 안됬을 때
    wifi_cnt = wifi_cnt +1;
    Serial.print(wifi_cnt);
    Serial.println("번째 Wi-fi 연결 재시도");
    WiFi.begin(ssid, password);
    delay(100);
    // wifi가 연결이 되지않았을 때 자체적인 알고리즘 실행
    // 히터
    if (s_temperature <= 28){
      digitalWrite(heater_pin,HIGH);
    }else if (s_temperature > 30){
      digitalWrite(heater_pin,LOW);
    }
    // 팬
    if (s_humid>80 || s_temperature > 35){ // 히터 열 35이상일때 팬돌림
      digitalWrite(fan_pin,HIGH);
    }else if (s_humid<=60 || s_temperature <28){
      digitalWrite(fan_pin,LOW);
    }
    // 가습기
    if (s_humid>80){
      digitalWrite(humidifier_pin,LOW);
      digitalWrite(humidifier_pin2,LOW);
    }else if (s_humid<=60){
      digitalWrite(humidifier_pin,HIGH);
      digitalWrite(humidifier_pin2,HIGH);
    }
  }
 }else{
  Serial.println("값을 못받아옴");
 }
 delay(5000);
}
