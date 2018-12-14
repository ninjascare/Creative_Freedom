from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Post, Comment
from .serializers import UserSerializer, PostSerializer, CommentSerializer


class UserView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
