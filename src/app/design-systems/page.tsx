import { PlusIcon, SectionIcon } from '@radix-ui/react-icons';

import { Editor, Content, Markdoc, AuthorNote } from '@/components/editor';
import { Paragraph } from '@/components/content';
import {
  TagBoundary,
  TagName,
  TagToolbar,
  TagButton,
  TagDropdown,
  TagProperty,
  TagContent,
  TagContentButton,
} from '@/components/tags';
import { Back, MainWrapper } from '@/components/site';

function Eyebrow({
  children,
  size,
  align,
}: {
  children: React.ReactNode;
  size?: 'normal' | 'small';
  align?: 'start' | 'center' | 'end';
}) {
  const textAlign = {
    start: 'text-start',
    center: 'text-center',
    end: 'text-end',
  }[align || 'start'];
  const textSize = {
    normal: 'text-xl',
    small: 'text-lg',
  }[size || 'normal'];
  return (
    <div className={`mt-2 -mb-2 font-semibold ${textSize} ${textAlign}`}>
      {children}
    </div>
  );
}

function Heading({
  children,
  align,
  level,
}: {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  level?: '1' | '2' | '3' | '4';
}) {
  const textAlign = {
    start: 'text-start',
    center: 'text-center',
    end: 'text-end',
  }[align || 'start'];
  const textSize = {
    '1': 'text-4xl',
    '2': 'text-3xl',
    '3': 'text-2xl',
    '4': 'text-xl',
  }[level || '1'];
  const H = `h${level || 1}` as keyof JSX.IntrinsicElements;
  return (
    <H className={`my-6 font-semibold ${textSize} ${textAlign}`}>{children}</H>
  );
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <TagBoundary>
      <div className="flex">
        <TagName>Call To Action</TagName>
        <TagToolbar>
          <TagButton>align: end</TagButton>
          <TagButton>.hero</TagButton>
          <TagDropdown />
        </TagToolbar>
      </div>
      <TagContent>{children}</TagContent>
    </TagBoundary>
  );
}

function CTAText({ children }: { children: React.ReactNode }) {
  return <div className="my-2">{children}</div>;
}

function CTALink({ children }: { children: React.ReactNode }) {
  return <div className="my-2 text-sky-800 underline">{children}</div>;
}

function HR() {
  return (
    <div className="my-8">
      <div className="mb-1 flex items-center gap-2 text-slate-500">
        <SectionIcon />
        <TagButton>kind: sparkles</TagButton>
      </div>
      <hr className="h-0.5 bg-gray-300 border-0" />
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <TagBoundary>
      <div className="flex">
        <TagName>Grid</TagName>
        <TagToolbar>
          <TagButton>columns: 3</TagButton>
          <TagDropdown />
        </TagToolbar>
      </div>
      <div className="my-4 px-3 grid grid-cols-3 grid-flow-row gap-4">
        {children}
        <div>
          <TagContentButton>
            <PlusIcon className="mr-2" /> Add Cell
          </TagContentButton>
        </div>
      </div>
    </TagBoundary>
  );
}

function GridCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-dashed border-slate-200 hover:border-slate-300 transition-colors rounded-md p-3">
      {children}
    </div>
  );
}

function ClientCell({
  children,
  href,
  imageAlt,
  heading,
}: {
  children: React.ReactNode;
  href: string;
  imageAlt: string;
  heading: string;
}) {
  return (
    <TagBoundary>
      <TagName>Client Cell</TagName>
      <TagProperty label="href">{href}</TagProperty>
      <TagProperty label="imageAlt">{imageAlt}</TagProperty>
      <TagProperty label="heading">{heading}</TagProperty>
      <TagContent border>{children}</TagContent>
    </TagBoundary>
  );
}

export default function TagsEditor() {
  return (
    <MainWrapper>
      <Back />
      <Editor>
        <Content>
          <Eyebrow>Design Systems</Eyebrow>
          <Heading>
            More design systems experience than{' '}
            <span className="line-through">anyone</span> most.
          </Heading>
          <Paragraph>
            With real-world, at-scale experience that few teams can match, we’ve
            led, shaped, and contributed to over a dozen design systems. From
            startups and scale-ups, to Atlassian and the Australian Government.
            We can bring our experience to your design system efforts.
          </Paragraph>
          <CTA>
            <CTAText>Need Design Systems help?</CTAText>
            <CTALink>Get in touch</CTALink>
          </CTA>
          <HR />
          <Eyebrow size="small" align="center">
            We&lsquo;ve been there before
          </Eyebrow>
          <Heading level="2" align="center">
            Design Systems Experience
          </Heading>
          <Grid>
            <GridCell>
              <ClientCell
                href="/work/atlassian"
                imageAlt="screenshot of design system"
                heading="Atlassian Design System"
              >
                We were there at the start of Atlassian&lsquo;s design system
                initiative.
              </ClientCell>
            </GridCell>
            <GridCell>
              <ClientCell
                href="/work/reckon"
                imageAlt="screenshot of design system"
                heading="Reckon Balance DS"
              >
                We led developent of Balance across web and mobile
              </ClientCell>
            </GridCell>
            <GridCell>
              <ClientCell
                href="/work/vocal"
                imageAlt="screenshot of design system"
                heading="Vocal Design System"
              >
                We built a WCAG 2.0 AA compliant design system to support
                Vocal&lsquo;s scaling needs initiative.
              </ClientCell>
            </GridCell>
            <GridCell>
              <ClientCell
                href="/work/daff"
                imageAlt="screenshot of design system"
                heading="Gov Design System"
              >
                We built AgDS with a special focus on acessibility
              </ClientCell>
            </GridCell>
            <GridCell>
              <ClientCell
                href="/work/brighte"
                imageAlt="screenshot of design system"
                heading="Brighte Spark DS"
              >
                We helped Brighte ship new mobile app and web design systems
              </ClientCell>
            </GridCell>
          </Grid>
        </Content>
      </Editor>
      <AuthorNote>
        I&rsquo;m still working on aligning the content in the editor above and
        the markdoc below. The content above is incomplete, but the markdoc
        source may need some changes too.
      </AuthorNote>
      <Markdoc content={markdoc} />
    </MainWrapper>
  );
}

const markdoc = `
{% hero %}

Design systems {% .suptitle %}

# More design systems experience than ~~anyone~~ most.

With real-world, at-scale experience that few teams can match, we've led,
shaped, and contributed to over a dozen design systems. From startups and
scale-ups, to Atlassian and the Australian Government. We can bring our
experience to your design system efforts.

{% /hero %}

{% callout %}

Need design systems help?

[Get in touch](/some/path)

{% /callout %}

--- {% kind="sparkles" %}

We've been there before {% .suptitle %}

## Design Systems Experience

{% grid %}

{% client-grid-item href="/some-path" image="atlassian-image.png" imageAlt="blah" %}

{% slot "heading" %}
Atlassian Design System
{% /slot %}

We were there at the start of Atlassian's design system initiative.

{% /client-grid-item %}

{% /grid %}

{% testimonial name="Dominik Wilkowski" title="Eng. Lead - Shopify Polaris Design System" avatar="..." %}

There are very few teams you can hire with more real-world, at-scale Design System experience than Thinkmill.

{% /testimonial %}

## We can help with

{% grid %}
<!-- icon is a relationshop to an icons collection -->
{% something-grid-item icon="pencil" %}

{% slot "heading" %}
Design & Engineering
{% /slot %}

We can help you fill [capacity and capability gaps](a) and build better ways of collaborating across the two practices.

{% /something-grid-item %}

{% /grid %}

{% callout %}

![boris](boris.png)

## Get in touch about design systems

Have a chat with Boris, Thinkmill's co-founder, about how we can help your journey in design systems - whether you're starting out or enhancing a mature design system.

[Contact us](/some/path)

{% /callout %}`;
