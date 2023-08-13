export const config = {
  markdoc: {
    tags: {},
  },
  fields: {
    title: fields.slug({
      name: {
        label: 'Title',
        validation: {
          length: { min: 1 },
        },
      },
    }),
    draft: fields.checkbox({
      label: 'Do not publish',
      description: 'Check this box to prevent this post from being published',
      defaultValue: false,
    }),
    publishedOn: fields.date({
      label: 'Published on',
      validation: {
        isRequired: true,
      },
    }),
    summary: fields.text({ label: 'Summary', multiline: true }),
    authors: fields.array(
      fields.relationship({
        label: 'Author',
        collection: 'authors',
        validation: { isRequired: true },
      }),
      {
        label: 'Authors',
        itemLabel: (props) => props.value ?? 'Please select',
      }
    ),
    tags: fields.array(
      fields.relationship({
        label: 'Tag',
        collection: 'tags',
        validation: { isRequired: true },
      }),
      {
        label: 'Tags',
        itemLabel: (props) => props.value ?? 'Please select',
      }
    ),
    canonical: fields.text({
      label: 'Canonical URL',
      description:
        'Only fill is the canonical URL for this post is a different URL.',
    }),
  },
};
