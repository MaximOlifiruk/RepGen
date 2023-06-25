from django.urls import path, re_path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='index'),
    re_path('data_title/', views.post_data_title, name='post_data_title'),
    re_path('result/', views.main_page, name='main_page'),
]