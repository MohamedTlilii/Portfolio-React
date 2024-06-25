import React, { useState } from 'react';
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import ScrollBtn from "../Components/ScrollBtn/ScrollBtn";

function PublicLayout() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };
  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <Outlet />
      <ScrollBtn/>  
      <Footer/>
    </div>
  );
}

export default PublicLayout;
