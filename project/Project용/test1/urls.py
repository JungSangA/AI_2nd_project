from django.urls import path
from . import views
from django.contrib import admin
from django.conf import settings

# url과 view의 함수들을 mapping
urlpatterns = [
    path('index/get/', views.get_sensors),
#    path('index/air/', views.get_air),
    path('index/heater/', views.get_heater),
    path('index/fan/', views.get_fan),
    path('index/humi/', views.get_humi),
    # path('admin/', admin.site.urls)
    path('index/', views.index_view),
    path('sensors/',views.insert_sensors)
]