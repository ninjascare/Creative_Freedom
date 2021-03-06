"""cf_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include, re_path

from . import views

urlpatterns = [
    path('api/', include('main.urls')),
    path('admin/', admin.site.urls),
    url(r'^$', views.FrontendAppView.as_view()),
    url(r'post/^.*', views.FrontendAppView.as_view()),
    url(r'profile/^.*', views.FrontendAppView.as_view()),
    url(r'member/^.*', views.FrontendAppView.as_view())
   
    
    ]

REACT_ROUTES = ['users', 'posts', 'post/<int:pk>', 'user', 'profile/<int:pk>', 'member/<int:pk>', 'login', 'new', 'profile/<int:pk>/settings', 'profile/<int:pk>/upload', 'creators', 'post/<int:pk>/edit', 'interests']

for route in REACT_ROUTES:

    urlpatterns += [
        path(f'{route}', views.FrontendAppView.as_view())
    ]