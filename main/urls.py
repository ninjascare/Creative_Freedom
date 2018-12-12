from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('post', views.PostView)
router.register('comment', views.CommentView)


urlpatterns = [
    path('', include(router.urls))
]