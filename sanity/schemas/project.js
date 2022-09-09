export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'explanation',
      title: 'Explanation',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'projectType',
      title: 'Project type',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
          { value: 'school/client', title: 'School/Client' },
        ],
      },
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Project image',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
};
