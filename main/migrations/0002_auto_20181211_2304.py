# Generated by Django 2.1.4 on 2018-12-11 23:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='created_At',
            new_name='created_at',
        ),
    ]
