import { ChevronsUpDown, GitBranch, Zap } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CurrentUser() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/jedwatson.png" alt="@jedwatson" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function Logo() {
  return (
    <div>
      <Zap />
    </div>
  );
}

function Drilldown() {
  return (
    <div className="flex items-center gap-2">
      <div className="font-mono text-sm text-slate-400">/</div>
      <div>Thinkmill</div>
      <div className="font-mono text-sm text-slate-400">/</div>
      <div>Website</div>
      <ChevronsUpDown size={16} />
      <div className="font-mono text-sm text-slate-400">/</div>
      <GitBranch size={16} />
      <div>main</div>
      <ChevronsUpDown size={16} />
    </div>
  );
}

export function Header() {
  return (
    <div className="flex justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Logo />
        </Link>
        <Drilldown></Drilldown>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Commit 5 Changes</Button>
        <CurrentUser />
      </div>
    </div>
  );
}
