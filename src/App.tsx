import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TracksSection } from './components/TracksSection';
import { PricingBenefitsSection } from './components/PricingBenefitsSection';
import { WavesScheduleSection } from './components/WavesScheduleSection';
import { AiAdvisorSection } from './components/AiAdvisorSection';
import { CoordinatorPortal } from './components/CoordinatorPortal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { TrackFinderQuizModal } from './components/TrackFinderQuizModal';
import { RegistrationModal } from './components/RegistrationModal';
import { ApplicantTrackingModal } from './components/ApplicantTrackingModal';
import { Footer } from './components/Footer';
import { TrackType, WaveInfo, LanguageType } from './types';

export default function App() {
  // Current view: 'applicant' (public) or 'admin' (internal coordinator)
  const [currentView, setCurrentView] = useState<'applicant' | 'admin'>('applicant');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);

  // Applicant modals
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [trackingInitialQuery, setTrackingInitialQuery] = useState('');
  const [selectedTrackForRegister, setSelectedTrackForRegister] = useState<TrackType | undefined>(undefined);
  const [selectedWaveForRegister, setSelectedWaveForRegister] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('hero');

  // Always start on applicant page first. Only open login modal if user explicitly navigated to #admin or clicked login.
  useEffect(() => {
    // If user explicitly bookmarked or visits with #admin, open the login modal
    if (window.location.hash.toLowerCase() === '#admin' && !isAdminAuthenticated) {
      setIsAdminLoginModalOpen(true);
    }
  }, []);

  // Trigger registration with preselected Track
  const handleSelectTrack = (trackId: TrackType) => {
    setSelectedTrackForRegister(trackId);
    setIsRegisterOpen(true);
  };

  // Trigger registration with preselected Wave
  const handleSelectWave = (wave: WaveInfo) => {
    setSelectedTrackForRegister(wave.trackId);
    setSelectedWaveForRegister(`${wave.code} - ${wave.name} (Khởi hành ${wave.startDate})`);
    setIsRegisterOpen(true);
  };

  // Trigger applicant tracking modal
  const handleOpenTracking = (phoneOrId?: string) => {
    setTrackingInitialQuery(phoneOrId || '');
    setIsTrackingOpen(true);
  };

  // Scroll to AI Advisor section
  const handleOpenAiChat = () => {
    const aiSection = document.getElementById('ai-advisor');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle coordinator portal access
  const handleOpenAdminPortal = () => {
    if (isAdminAuthenticated) {
      setCurrentView('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsAdminLoginModalOpen(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setIsAdminLoginModalOpen(false);
    setCurrentView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('applicant');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in Admin Coordinator view, show strictly the CoordinatorPortal
  if (currentView === 'admin') {
    return (
      <CoordinatorPortal
        onSwitchToPublic={() => {
          setCurrentView('applicant');
          window.location.hash = '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLogout={handleAdminLogout}
      />
    );
  }

  // PUBLIC APPLICANT VIEW (Only applicant content)
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900 font-body">
      {/* Top Bar for Applicants */}
      <Header
        onOpenRegister={() => {
          setSelectedTrackForRegister(undefined);
          setSelectedWaveForRegister(undefined);
          setIsRegisterOpen(true);
        }}
        onOpenTracking={() => handleOpenTracking()}
        onOpenAiChat={handleOpenAiChat}
        onOpenAdminLogin={handleOpenAdminPortal}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenRegister={() => {
            setSelectedTrackForRegister(undefined);
            setSelectedWaveForRegister(undefined);
            setIsRegisterOpen(true);
          }}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenAiChat={handleOpenAiChat}
          onOpenTracking={() => handleOpenTracking()}
        />

        {/* 3 Target Tracks Section (EduTrack, EcoTrack, HeritageTrack) with nested Waves */}
        <TracksSection
          onSelectTrack={handleSelectTrack}
          onSelectWave={handleSelectWave}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Pricing, 7 Benefits & Legal Protection 2-Way Section */}
        <PricingBenefitsSection
          onOpenRegister={() => {
            setSelectedTrackForRegister(undefined);
            setSelectedWaveForRegister(undefined);
            setIsRegisterOpen(true);
          }}
        />

        {/* Waves Schedule & Break-Even Metric Section */}
        <WavesScheduleSection
          onSelectWave={handleSelectWave}
        />

        {/* AI Operating Counselor strictly for Applicants (isPublicUserOnly = true) */}
        <AiAdvisorSection
          isPublicUserOnly={true}
          initialMode="user"
          onOpenRegisterWithInfo={(info) => {
            if (info.track) setSelectedTrackForRegister(info.track as TrackType);
            if (info.wave) setSelectedWaveForRegister(info.wave);
            setIsRegisterOpen(true);
          }}
        />
      </main>

      {/* Footer with secure discreet coordinator link & tracking link */}
      <Footer
        onOpenAdminLogin={handleOpenAdminPortal}
        onOpenTracking={() => handleOpenTracking()}
      />

      {/* Interactive Track Finder Quiz Modal */}
      <TrackFinderQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectTrack={(track) => {
          setSelectedTrackForRegister(track);
          setIsRegisterOpen(true);
        }}
      />

      {/* Volunteer Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialTrack={selectedTrackForRegister}
        initialWave={selectedWaveForRegister}
        onOpenTrackingWithPhone={(phone) => handleOpenTracking(phone)}
      />

      {/* Applicant Ticket & Progress Tracking Modal */}
      <ApplicantTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        initialQuery={trackingInitialQuery}
      />

      {/* Coordinator PIN Authentication Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onSuccessLogin={handleAdminLoginSuccess}
      />
    </div>
  );
}
