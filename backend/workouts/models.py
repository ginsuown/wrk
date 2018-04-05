from django.db import models

# Create your models here.


class AbstractListOrderableModel(models.Model):
    """
    Abstract list model to allow objects to be ordered in their parent containers
    through logic performed on list_index.
    """
    list_index = models.IntegerField(blank=True, null=True)

    class Meta:
        abstract = True


class ExerciseSession(models.Model):
    """
    Base session class to represent a workout session.
    """
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=300, blank=True)
    notes = models.TextField(max_length=300, blank=True)


class ExerciseActivity(AbstractListOrderableModel):
    """
    An abstraction to allow users to group multiple exercises under one common
    topic or portion of the workout, such as "lower body". Also utilized by
    users to compose workouts out of different activity pieces common across
    multiple workout sessions.
    """
    name = models.CharField(max_length=100)
    notes = models.TextField(max_length=300, blank=True)
    exercise_session = models.ForeignKey(
        'ExerciseSession', on_delete=models.CASCADE, related_name='activities_rel')


class ExerciseSetGroup(AbstractListOrderableModel):
    """
    Group of consecutive sets or supersets.
    Exercises in the same superset are ordered through ExerciseSetGroupLink
    """
    notes = models.TextField(max_length=300, blank=True)
    exercise_activity = models.ForeignKey(
        'ExerciseActivity',
        on_delete=models.CASCADE,
        related_name='set_groups_rel'
    )
    exercises = models.ManyToManyField(
        'Exercise', related_name='set_groups_rel',
        through='ExerciseSetGroupLink')


class ExerciseSetGroupLink(AbstractListOrderableModel):
    """
    Join table to allow ordering of multiple exercises that are in a superset, i.e.
    which exercise goes before the other in the superset. Non-superset groups will
    consist of a single row in this table for the set group joining it to the single
    exercise in the set group.
    """
    exercise_set_group = models.ForeignKey(
        'ExerciseSetGroup',
        on_delete=models.CASCADE,
        related_name='set_group_links_rel')
    exercise = models.ForeignKey(
        'Exercise',
        on_delete=models.CASCADE,
        related_name='set_group_links_rel')


class Exercise(models.Model):
    """
    Canonical representation of an exercise defined in the database. Exercises should
    be of a known shape identified by exercise_type, which the code can enforce through
    an agreed-upon contract of what params the exercise type is allowed to have.
    """
    EXERCISE_TYPE_CHOICES = (
        (0, 'RestType'),
        (1, 'LiftType'),
        (2, 'BodyweightType'),
        (3, 'IntervalType')
    )
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    preview_image_uri = models.URLField(blank=True)
    exercise_type = models.IntegerField(
        choices=EXERCISE_TYPE_CHOICES
    )


class ExerciseSetInstance(AbstractListOrderableModel):
    """
    Represents one set of an exercise.
    """
    exercise_set_group = models.ForeignKey(
        'ExerciseSetGroup',
        on_delete=models.CASCADE,
        related_name='set_instances_rel')


class ExerciseSetParam(models.Model):
    """
    Represents a value for one param of one ExerciseSetInstance.
    """
    int_value = models.IntegerField(blank=True, null=True)
    float_value = models.FloatField(blank=True, null=True)
    exercise_set_instance = models.ForeignKey(
        'ExerciseSetInstance',
        on_delete=models.CASCADE,
        related_name='set_params_rel')
    exercise = models.ForeignKey(
        'Exercise',
        on_delete=models.CASCADE,
        related_name='set_params_rel')
    param_name = models.CharField(max_length=100)
