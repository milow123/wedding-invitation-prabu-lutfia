import { Suspense } from 'react';
import { HeroSection } from './components/HeroSection';
import IntroductionSection from "./components/IntroductionSection";
import { DetailsSection } from './components/DetailsSection';
import OurStorySection from './components/OurStorySection';
import { GallerySection } from "./components/GallerySection";
import { RSVPSection } from './components/RSVPSection';
import { FooterSection } from './components/FooterSection';
import GreetingSection from "./components/GreetingSection";
import WeddingBackground from "./components/WeddingBackground"
import GuestLinkGenerator from "./components/GuestLinkGenerator";
import WeddingGiftSection from "./components/WeddingGiftSection";
import { GuestName } from './components/GuestName';
//import InvitationCover from "./components/InvitationCover";

export default async function Page() {
  return (

    <Suspense fallback={null}>
      <div className="size-full overflow-auto bg-white">
        {/* <main>
        <InvitationCover />
      </main> */}
        <WeddingBackground />
        <GuestName />
        <HeroSection />
        <GuestLinkGenerator />
        <GreetingSection />
        <IntroductionSection />
        <OurStorySection />
        <DetailsSection />
        <GallerySection />
        <WeddingGiftSection />
        <RSVPSection />
        <FooterSection />
      </div>
    </Suspense>


  );
}
