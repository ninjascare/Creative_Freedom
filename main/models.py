from datetime import date

from django.db import models


# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100, default='First Name')
    last_name = models.CharField(max_length=100, default='Last Name')
    email = models.TextField()
    password = models.TextField()

    def __str__(self):
        return self.name


class Post(models.Model):
    image_url = models.TextField(blank=True, null=True)
    content = models.TextField()
    audio_url = models.TextField(blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    created_at = models.DateField(default=date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post')

    def __str__(self):
        return str(self.content)


class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateField(default=date.today)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return str(self.created_at)
