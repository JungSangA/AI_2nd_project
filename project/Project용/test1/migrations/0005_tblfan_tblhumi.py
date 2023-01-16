# Generated by Django 4.1.3 on 2022-12-02 05:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test1', '0004_delete_led_delete_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='TblFan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(blank=True, null=True)),
                ('d_fan', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tbl_fan',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TblHumi',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(blank=True, null=True)),
                ('d_humi', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tbl_humi',
                'managed': False,
            },
        ),
    ]
