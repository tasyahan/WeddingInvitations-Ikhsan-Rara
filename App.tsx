import React from 'react';
import { 
  HeroSection, 
  QuoteSection, 
  CoupleSection, 
  EventsSection, 
  GallerySection, 
  GiftSection, 
  FooterSection 
} from './components/WeddingSections';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="w-full bg-background-light">
      <MusicPlayer />
      <HeroSection />
      <QuoteSection />
      <CoupleSection />
      <EventsSection />
      <GallerySection />
      <GiftSection />
      <FooterSection />
    </div>
  );
};

export default App;