import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";  
import InfoSection from "./components/InfoSection";
import OurStory from "./components/OurStory";
import SignatureSelections from "./components/SignatureSelections";
import VoicesOfFlavor from "./components/VoicesOfFlavor";
import FeaturesSection from "./components/FeaturesSection";
import ReservationForm from "./components/ReservationForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />  \
      <InfoSection />
      <OurStory />
      <SignatureSelections />
      <VoicesOfFlavor />
      <FeaturesSection/>
      <ReservationForm />
    </div>
  );
};

export default App;
