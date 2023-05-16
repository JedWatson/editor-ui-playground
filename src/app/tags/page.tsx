import { RiAddLine, RiArrowDownSLine } from 'react-icons/ri';

import { Toolbar } from './toolbar';
import { cls } from './cls';

function Content({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}

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
  const Tag = `h${level || 1}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`my-6 font-semibold ${textSize} ${textAlign}`}>
      {children}
    </Tag>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <div className="my-4">{children}</div>;
}

function ComponentBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-slate-100 hover:border-sky-400 transition-colors rounded-md">
      {children}
    </div>
  );
}

function ComponentName({ children }: { children: React.ReactNode }) {
  return (
    <div className="uppercase font-semibold inline-block py-1 px-3 mr-1 text-sm bg-slate-100 rounded-br-md rounded-tl-md text-slate-500">
      {children}
    </div>
  );
}

function ComponentToolbar({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-flow-col">{children}</div>;
}

function ComponentButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-1 px-1 rounded flex items-center justify-center text-sm bg-slate-50 text-slate-500 font-medium">
      {children}
    </div>
  );
}

function ComponentProperty({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="mx-2 mt-2">
      <ComponentPropertyLabel>{label}</ComponentPropertyLabel>
      <ComponentPropertyValue>{children}</ComponentPropertyValue>
    </div>
  );
}
function ComponentPropertyLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-1 uppercase text-xs font-semibold text-slate-400">
      {children}
    </div>
  );
}
function ComponentPropertyValue({ children }: { children: React.ReactNode }) {
  return <div className="mx-1">{children}</div>;
}

function ComponentContent({
  children,
  border,
}: {
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <div className={`mx-3 my-3 ${border ? 'border-t pt-3' : ''}`}>
      {children}
    </div>
  );
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <ComponentBoundary>
      <div className="flex">
        <ComponentName>Call To Action</ComponentName>
        <ComponentToolbar>
          <ComponentButton>align: end</ComponentButton>
          <ComponentButton>.hero</ComponentButton>
          <ComponentButton>
            <RiArrowDownSLine />
          </ComponentButton>
        </ComponentToolbar>
      </div>
      <ComponentContent>{children}</ComponentContent>
    </ComponentBoundary>
  );
}

function CTAText({ children }: { children: React.ReactNode }) {
  return <div className="my-2">{children}</div>;
}

function CTALink({ children }: { children: React.ReactNode }) {
  return <div className="my-2 text-sky-800 underline">{children}</div>;
}

function HR() {
  return <hr className="h-0.5 bg-gray-300 my-8 border-0" />;
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <ComponentBoundary>
      <div className="flex">
        <ComponentName>Grid</ComponentName>
        <ComponentToolbar>
          <ComponentButton>columns: 3</ComponentButton>
          <ComponentButton>
            <RiArrowDownSLine />
          </ComponentButton>
        </ComponentToolbar>
      </div>
      <div className="my-4 px-3 grid grid-cols-3 grid-flow-row gap-4">
        {children}
        <div className="">
          <div className="p-2 text-sm rounded-md bg-slate-50 hover:bg-sky-100 text-slate-500 hover:text-sky-600 cursor-pointer uppercase font-semibold">
            <div className="flex items-center justify-center">
              <RiAddLine className="mr-2" /> Add Cell
            </div>
          </div>
        </div>
      </div>
    </ComponentBoundary>
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
    <ComponentBoundary>
      <ComponentName>Client Cell</ComponentName>
      <ComponentProperty label="href">{href}</ComponentProperty>
      <ComponentProperty label="imageAlt">{imageAlt}</ComponentProperty>
      <ComponentProperty label="heading">{heading}</ComponentProperty>
      <ComponentContent border>{children}</ComponentContent>
    </ComponentBoundary>
  );
}

export default function TagsEditor() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className={`w-full max-w-5xl items-center border ${cls.border} rounded-lg shadow-md shadow-slate-100`}
      >
        <Toolbar />
        <Content>
          <Eyebrow>Design Systems</Eyebrow>
          <Heading>More design systems experience than most.</Heading>
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
      </div>
    </main>
  );
}
