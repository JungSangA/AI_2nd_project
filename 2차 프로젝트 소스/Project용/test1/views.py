from django.shortcuts import render
from django.http import HttpResponse
from .models import TblCage,TblDevice,TblHeater,TblHumidifier,TblFan
from .models import TblMember
from django.http import JsonResponse
from datetime import datetime
from django.utils import timezone

# url - view - templates(html,js,css) 연결 함수
def index_view(request):
    return render(request, 'index.html')

# 외래키에서 seq 참조하는 변수
seq = TblCage.objects.get(c_seq = 1)
print(f'seq={seq}')


# device 데이터 가져오고 변수화
def insert_sensors(request):

    # 쿼리스트링 형식으로 받은 값을 불러옴. 값이 없을 시 0으로 값을 채우기
    # 각 센서의 값을 받아오는 시간이 약간씩 오차가 있으므로 하나의 시간으로 통일
    now = datetime.now()
    time = now.strftime('%Y-%m-%d %H:%M:%S')
    # GET방식으로 받은 데이터를 불러오기
    temp = request.GET.get('temp', 0)
    humid = request.GET.get('humid', 0)
    co2 = request.GET.get('co2', 0)
    pm = request.GET.get('pm', 0)
    voc = request.GET.get('voc', 0)
    ill = request.GET.get('ill',0)
    # Actuator digitalRead한 것을 받아온 값 불러오기
    heater = request.GET.get('heater',0)
    fan = request.GET.get('fan',0)
    humi = request.GET.get('humi',0)
    
    # 센싱 데이터를 DB에 넣기 - try,except를 이용하여 이상치 값 들어왔을 때 제어
    TblDevice.objects.create(d_time = time, c_seq = seq, d_tem = temp, d_hum = humid, d_co2= co2, d_pm=pm, d_voc = voc, d_ill=ill)

    # 온도,습도 데이터 10개 추려오기
    temp_10 = []
    hum_10 = []
    
    # 축적된 데이터가 10개 이상일 때
    try : 
        for i in  list(TblDevice.objects.values())[-10:]:
            temp_10.append(i['d_tem'])
            hum_10.append(i['d_hum'])
            temp_avg = round((sum(temp_10)/len(temp_10)),2)
            hum_avg = round((sum(hum_10)/len(hum_10)),2)
    # 축적된 데이터가 10개보다 적을 때, 축적된 데이터로 평균 계산
    except :
        for i in  list(TblDevice.objects.values())[:]:
            temp_10.append(i['d_tem'])
            hum_10.append(i['d_hum'])
            temp_avg = round((sum(temp_10)/len(temp_10)),2)
            hum_avg = round((sum(hum_10)/len(hum_10)),2)

    print(temp_avg)
    print(hum_avg)

    # Actuator 알고리즘
    # heater 알고리즘
    if float(temp_avg) <= 32:
        heater = "1"
    elif float(temp_avg) > 37:
        heater = "0"
    # fan 알고리즘
 #   if (float(temp) > 30) or (float(humid) > 40):
 #       fan = 1
 #   elif (float(temp) <= 28) or (float(humid) <= 30):
 #       fan = 0
    if int(pm) > 500 or float(temp) >42 or float(humid) > 90:
        fan = "1"
    elif int(pm) <= 200 or float(temp) < 37 or float(humid) < 80:
        fan = "0"

    # humid 알고리즘
    if float(hum_avg) <= 60: #float(temp) >= 30
        humi = "1"
    elif float(hum_avg) > 80: #float(temp) < 28
        humi = "0"

    # 액츄에이터 임의적 제어를 위한 코드
    #heater = 0
    #fan = 0
    #humi = 0
    
    # Actuator의 상태(ON/OFF)에 따른 DB에 저장
    # heater
    if str(list(TblHeater.objects.values())[-1]['a_heater']) != heater:
        print ("변경")
        TblHeater.objects.create(a_htime = time,c_seq = seq, a_heater = heater)
    # fan
    if str(list(TblFan.objects.values())[-1]['a_fan']) != fan:
        print ("변경1")
        TblFan.objects.create(a_ftime = time,c_seq = seq, a_fan = fan)
    # 가습기
    if str(list(TblHumidifier.objects.values())[-1]['a_humidifier']) != humi:
        print ("변경2")
        TblHumidifier.objects.create(a_hutime = time,c_seq = seq, a_humidifier = humi)

    #print(f'{type(heater)}, {type(fan)}, {type(humi)}')
    #print(f'{heater}, {fan}, {humi}')
    print ("temp : ", temp,temp_avg, "heater : ", heater)
    print("습도  : ",humid,hum_avg, "fan : ", fan, "humi : ", humi)
 #   return HttpResponse(f"{0}{0}{0}")
    return HttpResponse(f"{heater}{fan}{humi}")

# Test class에 있는 최신 100개의 데이터 가져오는 함수
def get_sensors(request):
    data = list(TblDevice.objects.values())
    data = data[-100:]
    # print (data)
    return JsonResponse(data, safe=False)

#def get_air(request):
#    data = list(Test.objects.values())
#    data = data[-1]
#    # print (data)
#    return JsonResponse(data, safe=False)
def get_fan(request):
    data = list(TblFan.objects.values())
    data = data[-1]
    # print (data)
    return JsonResponse(data, safe=False)
def get_humi(request):
    data = list(TblHumidifier.objects.values())
    data = data[-1]
    # print (data)
    return JsonResponse(data, safe=False)
def get_heater(request):
    data = list(TblHeater.objects.values())
    data = data[-1]
    # print (data)
    return JsonResponse(data, safe=False)




#Server에서 persons의 값을 출력형태
# persons = Person.objects.all() #<Queryset [ 1,2,3,4,..]> 출력
# print(persons[0]) # Person object(1) 출력
# print(persons[0].p_id) # a 출력

#데이터를 리스트화 시켜서 특정 값 불러오기(test)
#filter_sensors = Test.objects.values()
#f_s = list(filter_sensors)
#f = f_s[-1]['d_pm']
#print(f)
