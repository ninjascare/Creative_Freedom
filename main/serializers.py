from rest_framework import serializers

from .models import User, Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'title', 'image_url', 'headline', 'industry', 'experience', 'skill1', 'skill1_level', 'skill2', 'skill2_level', 'skill3', 'skill3_level', 'skill4', 'skill4_level', 'portfolio_url', 'portfolio_image')


class CommentSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())

    class Meta:
        model = Comment
        fields = ('id', 'content', 'created_at', 'post')


class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'image_url', 'content', 'audio_url', 'video_url', 'created_at', 'user', 'comments')
