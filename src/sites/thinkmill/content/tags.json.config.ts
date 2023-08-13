import { fields } from '../fields';

export const config = {
  schema: fields.array(
    {},
    fields.object({
      shape: {
        label: fields.text({
          validation: {
            length: { min: 1 },
          },
        }),
        description: fields.text({ multiline: true }),
      },
    })
  ),
};
