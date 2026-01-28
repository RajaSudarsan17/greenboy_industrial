'use client';

import React, { useState, useEffect } from 'react';
import ContactHero from './ContactHero';
import DepartmentCards from './DepartmentCards';
import ContactForm from './ContactForm';
import FacilityLocation from './FacilityLocation';

const ContactInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDepartmentSelect = (departmentId: string) => {
    if (!isHydrated) return;
    setSelectedDepartment(departmentId);
    
    // Scroll to form
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <ContactHero />
        <DepartmentCards onSelectDepartment={() => {}} />
        <div id="contact-form">
          <ContactForm />
        </div>
        <FacilityLocation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <DepartmentCards onSelectDepartment={handleDepartmentSelect} />
      <div id="contact-form">
        <ContactForm selectedDepartment={selectedDepartment} />
      </div>
      <FacilityLocation />
    </div>
  );
};

export default ContactInteractive;