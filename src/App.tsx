import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EducationPage } from './pages/EducationPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { AutomationPage } from './pages/AutomationPage';
import { SolutionPage } from './pages/SolutionPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { InsightPage } from './pages/InsightPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AdminPage } from './pages/AdminPage';

function AppContent() {
  const { currentPath } = useRouter();

  // Route switcher
  const renderRoute = () => {
    // Normalize path by removing trailing slash if not root
    const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

    switch (path) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/services/education':
        return <EducationPage />;
      case '/services/consulting':
        return <ConsultingPage />;
      case '/services/automation':
        return <AutomationPage />;
      case '/services/solution':
        return <SolutionPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/insight':
        return <InsightPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/admin':
        return <AdminPage />;
      default:
        // Default to Home or fallback
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <main className="flex-1 flex flex-col">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
