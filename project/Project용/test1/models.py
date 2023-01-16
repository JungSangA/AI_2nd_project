from django.db import models
# primary_key가 있어야만 특정 작업을 수행 할 수 있음. 따라서 기본키 필수!
# 참조 무결성을 위해 on_delete = DO_NOTHING -> CASCADE

class TblCage(models.Model):
    c_seq = models.AutoField(primary_key=True)
    m_id = models.CharField(max_length=10)
    c_birthday = models.DateTimeField()
    c_insect = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'tbl_cage'


class TblDevice(models.Model):
    d_time = models.DateTimeField(primary_key=True)
    c_seq = models.ForeignKey(TblCage, on_delete= models.CASCADE, db_column='c_seq')
    d_tem = models.FloatField()
    d_hum = models.FloatField()
    d_co2 = models.IntegerField()
    d_voc = models.IntegerField()
    d_pm = models.IntegerField()
    d_ill = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_device'


class TblFan(models.Model):
    a_ftime = models.DateTimeField(primary_key=True)
    c_seq = models.ForeignKey(TblCage, on_delete=models.CASCADE, db_column='c_seq')
    a_fan = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_fan'


class TblHeater(models.Model):
    a_htime = models.DateTimeField(primary_key=True)
    c_seq = models.ForeignKey(TblCage, on_delete=models.CASCADE, db_column='c_seq')
    a_heater = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_heater'


class TblHumidifier(models.Model):
    a_hutime = models.DateTimeField(primary_key=True)
    c_seq = models.ForeignKey(TblCage, on_delete=models.CASCADE, db_column='c_seq')
    a_humidifier = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_humidifier'


class TblMember(models.Model):
    m_id = models.CharField(primary_key=True, max_length=10)
    m_name = models.CharField(max_length=15)
    m_pw = models.CharField(max_length=15)
    m_email = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'tbl_member'


class TblText(models.Model):
    t_seq = models.AutoField(primary_key=True)
    m = models.ForeignKey(TblMember, on_delete=models.CASCADE)
    t_top = models.CharField(max_length=30)
    t_text = models.TextField()
    t_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'tbl_text'