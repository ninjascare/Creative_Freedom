from django.shortcuts import render

from rest_framework import viewsets

from .serializers import UserSerializer, PostSerializer, CommentSerializer
from .models import User, Post, Comment


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentView(viewsets.CommentViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
