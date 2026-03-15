import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const professional = defineType({
  name: 'professional',
  title: 'Professionals',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      placeholder: 'Ex: Alyne Conte',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'field',
      title: 'Field',
      type: 'string',
      placeholder: 'Ex: Pedagoga',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      placeholder: 'Ex: Atendimento presencial, online, e domiciliar.',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'field',
      media: 'photo',
    },
  },
})
