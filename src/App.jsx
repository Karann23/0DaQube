import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { ScrollToTop } from "./components/scroll-to-top";
import { SynapticParticleCanvas } from "./components/SynapticParticleCanvas";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceCategoryPage } from "./pages/ServiceCategoryPage";
import { ServiceSubSubPage } from "./pages/ServiceSubSubPage";
import { NetworkPage } from "./pages/NetworkPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";
import { QualityPage } from "./pages/QualityPage";
import { InsightsPage } from "./pages/InsightsPage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <BrowserRouter>
      {/* Skip to Main Content Link for WCAG 2.1 AA Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#EC5E27] focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <SynapticParticleCanvas global />
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Solutions & Services Taxonomy */}
          <Route path="/solutions" element={<ServicesPage />} />
          <Route path="/solutions/:categorySlug" element={<ServiceCategoryPage />} />
          <Route path="/solutions/:categorySlug/:subSlug" element={<ServiceSubSubPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:categorySlug" element={<ServiceCategoryPage />} />
          <Route path="/services/:categorySlug/:subSlug" element={<ServiceSubSubPage />} />

          {/* Network */}
          <Route path="/network" element={<NetworkPage />} />

          {/* Quality & Trust */}
          <Route path="/quality" element={<QualityPage />} />

          {/* Case Studies, Industries, Insights & Legal */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;
