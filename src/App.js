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
      <Header />
      <LandingSection />
      <div id="about">
        <AboutUs />
      </div>
      <Thread />
      <div id="vision">
        <Vision />
      </div>
      <Thread />
      <div id="mission">
        <Mission />
      </div>
      <Thread />
      <div id="bharattex">
        <BharatTex />
      </div>
      <Thread />
      <div id="clients">
        <ClientsSection />
      </div>
      <Thread />
      <div id="photo-booths">
        <PhotoBoothsSection />
      </div>
      <Thread />
      <div id="success-stories">
        <SuccessStories />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
