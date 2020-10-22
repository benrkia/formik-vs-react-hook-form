import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  emailConfirmation: yup
    .string()
    .oneOf([yup.ref('email')], 'The email and email confirmation must match'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'The password and password confirmation must match'
    ),
});

export const jsonSchema = {
  $schema: "https://json-schema.org/draft/2019-09/schema#",
  $id: "https://agencedirecte.ma/schemas/user-schema.json",
  title: "Form Data",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 3,
    },
    lastName: {
      type: "string",
      minLength: 3,
    },
    email: {
      type: "string",
      matches: /^[a-z]+@[a-z]+\.[a-z]+$/
    },
    password: {
      type: "string",
      minLength: 6,
    },
  },
  required: ["firstName", "lastName", "email", "password"],
};

export const jsonSchemaConfig = {
  errMessages: {
    firstName: {
      required: 'First name is required',
      min: 'First name must not be shorter than 3 chars',
    },
    lastName: {
      required: 'Last name is required',
      min: 'Last name must not be shorter than 3 chars',
    },
    email: {
      required: 'Email is required',
      matches: 'Not a valid email address',
    },
    password: {
      required: 'Password is required',
      min: 'Password must not be shorter than 6 chars',
    },
  }
};
