# Generated by Django 2.1.4 on 2018-12-18 03:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20181211_2350'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='username',
        ),
    ]