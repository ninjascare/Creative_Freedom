from django.shortcuts import render
from rest_framework import viewsets

<<<<<<< HEAD
=======
# Create your views here.
from main.models import User, Post, Comment


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
>>>>>>> origin
