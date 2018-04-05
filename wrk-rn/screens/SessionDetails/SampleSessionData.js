/**
 * Sample session data that is similar to what a graphql session object would
 * look like.
 *
 * @flow
 */

const SAMPLE_SESSION = {
  name: "Pok's Pocky Bod",
  description:
    'Ever felt like you were a Pepero? Fear no more. With this workout, your sweet goodness will show on the outside, instead of staying hidden within!',
  notes:
    'Beware of inter-chocolate-covered/filled-stick-shaped-biscuit-based snack conflicts. This workout is not to be done in the presence of easily offended chocolate-covered/filled-stick-shaped-biscuit-based snack lovers.',
  activities: [
    {
      name: 'First the biscuit',
      notes:
        'A strong back forms the foundation for any good flavored coating.',
      set_groups: [
        {
          exercises: [
            {
              name: 'Barbell Deadlift',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 135,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 135,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 135,
                reps: 10,
              },
            ],
          ],
        },
        {
          exercises: [
            {
              name: 'Seated Row',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 100,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 110,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 140,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 120,
                reps: 8,
              },
            ],
          ],
        },
        {
          exercises: [
            {
              name: 'Bent Over Dumbbell Reverse Fly',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 20,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 20,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 20,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 20,
                reps: 8,
              },
            ],
          ],
        },
      ],
    },
    {
      name: 'Next the sweet goodness',
      notes: 'Strong legs are the finishing touch to any sweet bod.',
      set_groups: [
        {
          exercises: [
            {
              name: 'Barbell Squat',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 135,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 8,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 6,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 135,
                reps: 10,
              },
            ],
          ],
        },
        {
          exercises: [
            {
              name: 'Leg Press',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
          ],
        },
      ],
    },
    {
      name: 'What a sweet packaging!',
      notes:
        'No snack is successful without a strong core packaging to make it stand out from the crowd.',
      set_groups: [
        {
          exercises: [
            {
              name: "Captain's Chair Knee Raise",
            },
          ],
          set_instances: [
            [
              {
                __typename: 'BodyweightTypeParams',
                weight: 0,
                reps: 15,
              },
            ],
            [
              {
                __typename: 'BodyweightTypeParams',
                weight: 0,
                reps: 15,
              },
            ],
            [
              {
                __typename: 'BodyweightTypeParams',
                weight: 0,
                reps: 15,
              },
            ],
            [
              {
                __typename: 'BodyweightTypeParams',
                weight: 0,
                reps: 15,
              },
            ],
          ],
        },
        {
          exercises: [
            {
              name: 'Leg Press',
            },
          ],
          set_instances: [
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
            [
              {
                __typename: 'LiftTypeParams',
                weight: 185,
                reps: 10,
              },
            ],
          ],
        },
      ],
    },
  ],
};

export default SAMPLE_SESSION;
