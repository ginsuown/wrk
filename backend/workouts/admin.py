from django.contrib import admin

from .models import ExerciseSetParam, ExerciseSetInstance, Exercise, ExerciseSetGroup, ExerciseActivity, ExerciseSession

# Register your models here.
admin.site.register(ExerciseSetParam)
admin.site.register(ExerciseSetInstance)
admin.site.register(Exercise)
admin.site.register(ExerciseSetGroup)
admin.site.register(ExerciseActivity)
admin.site.register(ExerciseSession)
