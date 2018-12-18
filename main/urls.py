from django.urls import path, include
from django.conf.urls import include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from rest_framework import routers

from .views import current_user, UserList

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('post', views.PostView)
router.register('comment', views.CommentView)


urlpatterns = [
    path('admin', admin.site.urls),
    path('', include(router.urls)),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]