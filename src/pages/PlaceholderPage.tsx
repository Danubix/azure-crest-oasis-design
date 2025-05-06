
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  useEffect(() => {
    // Update the page title
    document.title = `${pageName} | Azure Crest Boutique Hotel`;
  }, [pageName]);

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container-hotel">
          <div className="text-center mb-16 mt-8">
            <h1 className="text-3xl md:text-5xl font-display mb-6">{pageName}</h1>
            <p className="text-lg text-neutral-9/80 max-w-3xl mx-auto">
              This page is coming soon. We're currently crafting an unforgettable experience for you.
            </p>
          </div>
          
          <div className="bg-neutral-1 rounded-hotel p-8 md:p-12 text-center max-w-3xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-azure mb-6">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <h2 className="text-2xl font-display mb-4">Coming Soon</h2>
            <p className="text-neutral-9/80 mb-2">
              We're putting the finishing touches on this section of our website.
            </p>
            <p className="text-neutral-9/80">
              Please check back soon, or contact our concierge for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
