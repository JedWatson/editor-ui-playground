function entry(config: any) {
  return {
    ...config,
    type: 'entry',
  };
}

function entries(config: any) {
  return {
    ...config,
    type: 'entry',
  };
}

function collection(config: any) {
  return {
    ...config,
    type: 'collection',
  };
}

function group(config: any, ...items: any[]) {
  return {
    ...config,
    type: 'group',
    items,
  };
}

function section(config: any, ...items: any[]) {
  return {
    ...config,
    type: 'section',
    items,
  };
}

export const content = [
  section(
    { label: 'Pages' },
    entry({ path: 'content/pages/home.mdoc' }),
    entry({ path: 'content/pages/open-source.mdoc' }),
    entry({ path: 'content/pages/method.mdoc' }),
    entry({ path: 'content/pages/labs.mdoc' }),
    entry({ path: 'content/pages/about.mdoc' }),
    group(
      { label: 'Work' },
      entry({ path: 'content/pages/work/index.mdoc' }),
      entry({ path: 'content/pages/work/atlassian.mdoc' }),
      entry({ path: 'content/pages/work/reckon.mdoc' }),
      entry({ path: 'content/pages/work/dovetail.mdoc' }),
      entry({ path: 'content/pages/work/vocal.mdoc' }),
      entry({ path: 'content/pages/work/breville.mdoc' }),
      entry({ path: 'content/pages/work/brighte.mdoc' }),
      entry({ path: 'content/pages/work/daff.mdoc' }),
      entry({ path: 'content/pages/work/enlitic.mdoc' }),
      entry({ path: 'content/pages/work/reachout.mdoc' }),
      entry({ path: 'content/pages/work/rugby-australia.mdoc' })
    ),
    group(
      { label: 'Services' },
      entry({ path: 'content/pages/services/index.mdoc' }),
      entries({ path: 'content/pages/services/*', exclude: ['index.mdoc'] })
    )
  ),
  section(
    { label: 'Content' },
    collection({
      label: 'Blog',
      path: 'content/blog/*/',
      format: { data: 'yaml' },
      slugField: 'title',
    }),
    collection({ label: 'Updates', path: 'content/updates/*/' }),
    collection({ label: 'Projects', path: 'content/projects/*/' })
  ),
  section(
    { label: 'Site' },
    entry({ label: 'Tags', path: 'content/tags.json' }),
    collection({ label: 'Authors', path: 'content/authors/*.yaml' }),
    entry({ label: 'Footer', path: 'content/site/footer.json' }),
    entry({ label: 'Settings', path: 'content/site/settings.json' })
  ),
];
