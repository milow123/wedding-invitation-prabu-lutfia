import { HeroSection } from './components/HeroSection';
import IntroductionSection from "./components/IntroductionSection";
import { DetailsSection } from './components/DetailsSection';
import OurStorySection from './components/OurStorySection';
import { GallerySection } from './components/GallerySection';
import { RSVPSection } from './components/RSVPSection';
import { FooterSection } from './components/FooterSection';
import GreetingSection from "./components/GreetingSection";
import WeddingBackground from "./components/WeddingBackground"
//import InvitationCover from "./components/InvitationCover";
export default function App() {
  return (
    <div className="size-full overflow-auto bg-white">
      {/* <main>
        <InvitationCover />
      </main> */}
      <WeddingBackground />
      <HeroSection />
      <GreetingSection />
      <IntroductionSection />
      <OurStorySection />
      <DetailsSection />
      <GallerySection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}