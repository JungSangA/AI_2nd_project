# Generated by Django 4.1.3 on 2022-11-28 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test1', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sensor',
            fields=[
                ('d_time', models.DateTimeField(primary_key=True, serialize=False)),
                ('d_tem', models.IntegerField(blank=True, null=True)),
                ('d_hum', models.IntegerField(blank=True, null=True)),
                ('d_voc', models.IntegerField(blank=True, null=True)),
                ('d_co2', models.IntegerField(blank=True, null=True)),
                ('d_pm', models.IntegerField(blank=True, null=True)),
                ('d_ill', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sensor',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(blank=True, null=True)),
                ('temp', models.FloatField(blank=True, null=True)),
                ('humid', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'test',
                'managed': False,
            },
        ),
    ]
