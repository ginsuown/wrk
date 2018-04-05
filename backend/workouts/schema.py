import graphene
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import ExerciseSetParam, ExerciseSetInstance, Exercise, ExerciseSetGroup, ExerciseActivity, ExerciseSession


class ExerciseNode(DjangoObjectType):
    class Meta:
        model = Exercise
        interfaces = (graphene.relay.Node, )
        only_fields = ('name', 'description',
                       'preview_image_uri', 'exercise_type')
        filter_fields = ('name', )


class ExerciseRestType(graphene.ObjectType):
    duration = graphene.Int()


class ExerciseLiftType(graphene.ObjectType):
    weight = graphene.Float()
    reps = graphene.Int()


class ExerciseBodyweightType(graphene.ObjectType):
    weight = graphene.Float()
    reps = graphene.Int()


class ExerciseIntervalType(graphene.ObjectType):
    duration = graphene.Int()
    intensity = graphene.Int()


class ExerciseSetParamUnion(graphene.Union):
    class Meta:
        types = (ExerciseRestType, ExerciseLiftType,
                 ExerciseBodyweightType, ExerciseIntervalType)


class ExerciseSetParamNode(DjangoObjectType):
    class Meta:
        model = ExerciseSetParam
        interfaces = (graphene.relay.Node, )
        only_fields = ('param_name', 'int_value', 'float_value')

    # name = graphene.String()
    # float_value = graphene.Float()
    # int_value = graphene.Int()

    # def resolve_name(self, info, **kwargs):
    #     return self.param_name

    # def resolve_float_value(self, info, **kwargs):
    #     return self.float_value

    # def resolve_int_value(self, info, **kwargs):
    #     return self.int_value


class ExerciseSetInstanceNode(DjangoObjectType):
    class Meta:
        model = ExerciseSetInstance
        interfaces = (graphene.relay.Node, )
        only_fields = ('exercise_set_group')

    set_params = graphene.List(ExerciseSetParamUnion)

    def resolve_set_params(self, info, **kwargs):
        # return self.set_params_rel.order_by('list_index').all()
        exercisesInSuperSet = self.exercise_set_group.exercises.order_by(
            'set_group_links_rel__list_index').all()
        result = []
        for i in exercisesInSuperSet:
            if exercisesInSuperSet[i].exercise_type == 0:
                result.append(ExerciseRestType(
                    duration=self.set_params_rel.objects.get(
                        param_name='duration', set_group_links_rel__list_index=i).int_value))
            elif exercisesInSuperSet[i].exercise_type == 1:
                result.append(ExerciseLiftType(
                    weight=self.set_params_rel.objects.get(
                        param_name='weight', set_group_links_rel__list_index=i).float_value,
                    reps=self.set_params_rel.objects.get(
                        param_name='reps', set_group_links_rel__list_index=i).int_value))
            elif exercisesInSuperSet[i].exercise_type == 2:
                result.append(ExerciseBodyweightType(
                    weight=self.set_params_rel.objects.get(
                        param_name='weight', set_group_links_rel__list_index=i).float_value,
                    reps=self.set_params_rel.objects.get(
                        param_name='reps', set_group_links_rel__list_index=i).int_value))
            elif exercisesInSuperSet[i].exercise_type == 3:
                result.append(ExerciseIntervalType(
                    weight=self.set_params_rel.objects.get(
                        param_name='intensity', set_group_links_rel__list_index=i).int_value,
                    reps=self.set_params_rel.objects.get(
                        param_name='duration', set_group_links_rel__list_index=i).int_value))
        return result


class ExerciseSetGroupNode(DjangoObjectType):
    class Meta:
        model = ExerciseSetGroup
        interfaces = (graphene.relay.Node, )
        only_fields = ('notes', 'exercise_activity')

    set_count = graphene.Int()
    exercises = graphene.List(ExerciseNode)
    set_instances = graphene.List(ExerciseSetInstanceNode)

    def resolve_set_count(self, info, **kwargs):
        return self.set_instances_rel.count()

    def resolve_exercises(self, info, **kwargs):
        return self.exercises.order_by('set_group_links_rel__list_index').all()

    def resolve_set_instances(self, info, **kwargs):
        return self.set_instances_rel.order_by('list_index').all()


class ExerciseActivityNode(DjangoObjectType):
    class Meta:
        model = ExerciseActivity
        interfaces = (graphene.relay.Node, )
        only_fields = ('name', 'notes', 'exercise_session')

    set_groups = graphene.List(ExerciseSetGroupNode)

    def resolve_set_groups(self, info, **kwargs):
        return self.set_groups_rel.order_by('list_index').all()


class ExerciseSessionNode(DjangoObjectType):
    class Meta:
        model = ExerciseSession
        interfaces = (graphene.relay.Node, )
        only_fields = ('name', 'description', 'notes')
        filter_fields = tuple()
    activities = graphene.List(ExerciseActivityNode)

    def resolve_activities(self, info, **kwargs):
        return self.activities_rel.order_by('list_index').all()


class Query(object):

    exercise_sessions = graphene.List(ExerciseSessionNode)

    def resolve_exercise_sessions(self, info, **kwargs):
        return ExerciseSession.objects.all()

    # exercise_session = graphene.Field(ExerciseSessionNode,
    #                                   id=graphene.Int(),
    #                                   name=graphene.String(),
    #                                   description=graphene.String(),
    #                                   notes=graphene.String())

    # def resolve_exercise_session(self, info, **args):
    #     id = args.get('id')
    #     name = args.get('name')

    #     if id is not None:
    #         return ExerciseSession.id

    #     if name is not None:
    #         return ExerciseSession.name

    #     return None
