import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Thread from "./components/Thread";
import BharatTex from "./components/BharatTex";
import { ClientsSection } from "./components/Clients";
import { PhotoBoothsSection } from "./components/PhotoBooths";
import SuccessStories from "./components/SuccessStories";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Landing Section */}
      <LandingSection />

      <AboutUs />
      <Thread />
      <Vision />
      <Thread />
      <Mission />
      <Thread />
      <BharatTex />
      <Thread />
      <ClientsSection />
      <Thread />
      <PhotoBoothsSection />
      <Thread />
      <SuccessStories />
      <Thread />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
