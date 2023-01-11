import * as yup from "yup";
import { SchemaOf } from "yup";

import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user";
import { IUpdatePet } from "../interfaces/pet";

export const userCreateScheama: SchemaOf<IUser> = yup.object().shape({
  user_name: yup.string().required(),
  user_image: yup
    .string()
    .notRequired()
    .default(() => ""),
  email: yup
    .string()
    .email()
    .required()
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  password: yup
    .string()
    .required()
    .transform((value: string, originalValue: string) => {
      return bcrypt.hashSync(originalValue, 10);
    }),
  address: yup.object().shape({
    cep: yup.string().required(),
    city: yup.string().required(),
    district: yup.string().required(),
    number: yup.string().required(),
    state: yup.string().required(),
  }),
  contact: yup.object().shape({
    description: yup
      .string()
      .notRequired()
      .default(() => ""),
    phone: yup
      .string()
      .notRequired()
      .default(() => ""),
    secondary_email: yup
      .string()
      .notRequired()
      .default(() => ""),
    whatsapp: yup
      .string()
      .notRequired()
      .default(() => ""),
  }),
});

export const petUpdateSchema: SchemaOf<IUpdatePet> = yup.object().shape({
  name: yup.string().notRequired(),
  description: yup.string().notRequired(),
  pet_image: yup.string().notRequired(),
  size: yup.string().notRequired(),
  vaccine: yup.string().notRequired(),
  age: yup.string().notRequired(),
});
