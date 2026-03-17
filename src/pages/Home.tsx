import { Hero } from '@/components/Hero';
import { MatchCenter } from '@/components/MatchCenter';
import { Fixtures } from '@/components/Fixtures';
import { MatchVoting } from '@/components/MatchVoting';
import { NewsSection } from '@/components/NewsSection';
import { SquadSection } from '@/components/SquadSection';
import { PlayerComparison } from '@/components/PlayerComparison';
import { MediaCenter } from '@/components/MediaCenter';
import { DigitalMuseum } from '@/components/DigitalMuseum';
import { MiniStore } from '@/components/MiniStore';
import { FanFeatures } from '@/components/FanFeatures';

export function Home() {
  return (
    <main>
      <Hero />
      <MatchCenter />
      <MatchVoting />
      <Fixtures />
      <NewsSection />
      <SquadSection />
      <PlayerComparison />
      <MediaCenter />
      <DigitalMuseum />
      <MiniStore />
      <FanFeatures />
    </main>
  );
}

