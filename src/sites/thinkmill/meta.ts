import { slugify } from '@/lib/utils';

type Item = {
  label: string;
  kind?: 'entry' | 'collection' | 'group';
  items?: Item[];
  slug?: string;
};

type Nav = {
  sections: Item[];
};

export const nav = addSlugs({
  sections: [
    {
      label: 'Pages',
      items: [
        { label: 'Home', kind: 'entry' },
        { label: 'Open Source', kind: 'entry' },
        { label: 'Method', kind: 'entry' },
        { label: 'Labs', kind: 'entry' },
        { label: 'About', kind: 'entry' },
        {
          label: 'Work',
          kind: 'group',
          items: [
            { label: 'Index', kind: 'entry' },
            { label: 'Atlassian', kind: 'entry' },
            { label: 'Reckon', kind: 'entry' },
            { label: 'Dovetail', kind: 'entry' },
            { label: 'Vocal', kind: 'entry' },
            { label: 'Breville', kind: 'entry' },
            { label: 'Brighte', kind: 'entry' },
            { label: 'DAFF', kind: 'entry' },
            { label: 'Enlitic', kind: 'entry' },
            { label: 'ReachOut', kind: 'entry' },
            { label: 'Rugby Australia', kind: 'entry' },
          ],
        },
        {
          label: 'Services',
          kind: 'group',
          items: [
            { label: 'Index', kind: 'entry' },
            { label: 'Design Systems', kind: 'entry' },
            { label: 'API Platforms', kind: 'entry' },
            { label: 'Product Design & Engineering', kind: 'entry' },
            { label: 'Team Augmentation', kind: 'entry' },
            { label: 'React & React Native', kind: 'entry' },
            { label: 'User Research', kind: 'entry' },
            { label: 'Front-end Engineering', kind: 'entry' },
            { label: 'UX & UI Design', kind: 'entry' },
            { label: 'Prototyping', kind: 'entry' },
            { label: 'Accessibility', kind: 'entry' },
            { label: 'GraphQL', kind: 'entry' },
          ],
        },
      ],
    },
    {
      label: 'Content',
      items: [{ label: 'Blog', kind: 'collection' }],
    },
  ],
});

function addSlugs(nav: Nav) {
  nav.sections = addSlugsToItems(nav.sections, 'thinkmill-website');
  return nav;
}

function addSlugsToItems(items: Item[], parentSlug?: string) {
  return items.map((i) => {
    i.slug = slugify(i.label);
    i.items = i.items ? addSlugsToItems(i.items, i.slug) : undefined;
    return i;
  });
}
