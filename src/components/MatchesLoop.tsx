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
      <div className="animate-marquee-matches flex items-stretch gap-6 h-full">
        {marqueeMatches.map((match, i) => (
          <MatchCard key={`${match.date}-${match.time}-${match.home}-${i}`} {...match} accentColor={accentColor} />
        ))}
      </div>
    </div>
  );
}
