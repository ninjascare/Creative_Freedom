from django.contrib import admin

# Register your models here.
from .models import User, Post, Comment

admin.site.register([User, Post, Comment])