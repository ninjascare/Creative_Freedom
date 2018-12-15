from datetime import date

from django.db import models


# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image_url = models.TextField()
    headline = models.TextField()
    industry = models.CharField(max_length=100, default='Creator')
    experience = models.TextField()
    skill1 = models.CharField(max_length=100, default='url')
    skill1_level = models.CharField(max_length=50, default='url')
    skill2 = models.CharField(max_length=100, default='url')
    skill2_level = models.CharField(max_length=50, default='url')
    skill3 = models.CharField(max_length=100, default='url')
    skill3_level = models.CharField(max_length=50, default='url')
    skill4 = models.CharField(max_length=100, default='url')
    skill4_level = models.CharField(max_length=50, default='url')
    portfolio_url = models.TextField(default='url')
    portfolio_image = models.TextField( default='image')

    def __str__(self):
        return self.name

class Post(models.Model):
    image_url = models.TextField(blank=True, null=True)
    content = models.TextField()
    audio_url = models.TextField(blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    created_at = models.DateField(default=date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, related_name='post')

    def __str__(self):
        return str(self.content)

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateField(default=date.today)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, blank=True, null=True, related_name='comments')

    def __str__(self):
        return str(self.created_at)
