# Generated by Django 4.1.3 on 2022-12-06 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test1', '0005_tblfan_tblhumi'),
    ]

    operations = [
        migrations.CreateModel(
            name='TblCage',
            fields=[
                ('c_seq', models.AutoField(primary_key=True, serialize=False)),
                ('m_id', models.CharField(max_length=10)),
                ('c_birthday', models.DateTimeField()),
                ('c_insect', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'tbl_cage',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TblDevice',
            fields=[
                ('d_time', models.DateTimeField(primary_key=True, serialize=False)),
                ('d_tem', models.FloatField()),
                ('d_hum', models.FloatField()),
                ('d_co2', models.IntegerField()),
                ('d_voc', models.IntegerField()),
                ('d_pm', models.IntegerField()),
                ('d_ill', models.IntegerField()),
            ],
            options={
                'db_table': 'tbl_device',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TblHumidifier',
            fields=[
                ('a_hutime', models.DateTimeField(primary_key=True, serialize=False)),
                ('a_humidifier', models.IntegerField()),
            ],
            options={
                'db_table': 'tbl_humidifier',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TblMember',
            fields=[
                ('m_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('m_name', models.CharField(max_length=15)),
                ('m_pw', models.CharField(max_length=15)),
                ('m_email', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'tbl_member',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TblText',
            fields=[
                ('t_seq', models.AutoField(primary_key=True, serialize=False)),
                ('t_top', models.CharField(max_length=30)),
                ('t_text', models.TextField()),
                ('t_time', models.DateTimeField()),
            ],
            options={
                'db_table': 'tbl_text',
                'managed': False,
            },
        ),
        migrations.DeleteModel(
            name='Sensor',
        ),
        migrations.DeleteModel(
            name='TblHumi',
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
