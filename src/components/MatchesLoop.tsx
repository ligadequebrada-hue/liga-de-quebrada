'use client';

import MatchCard from './MatchCard';
import type { Match } from '@/lib/data';

type MatchesLoopProps = {
  matches: Match[];
  accentColor: string;
};

export default function MatchesLoop({ matches, accentColor }: MatchesLoopProps) {
  const marqueeMatches = [...matches, ...matches];

  return (
    <div className="w-full overflow-hidden flex-1 h-full">
      <div className="animate-marquee-matches flex items-center gap-6 h-full items-stretch">
        {marqueeMatches.map((match, i) => (
          <MatchCard key={i} {...match} accentColor={accentColor} />
        ))}
      </div>
    </div>
  );
}
