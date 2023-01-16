# Generated by Django 4.1.3 on 2022-11-09 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Person",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=10, null=True)),
                (
                    "age",
                    models.DecimalField(
                        blank=True, decimal_places=0, max_digits=10, null=True
                    ),
                ),
            ],
            options={"db_table": "person", "managed": False,},
        ),
    ]
