# Generated by Django 2.1.4 on 2018-12-11 23:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20181211_2304'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='created_At',
            new_name='created_at',
        ),
    ]
