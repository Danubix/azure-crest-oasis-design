
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-neutral-1 px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-azure">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Lost at Sea</h1>
          <p className="text-lg text-neutral-9/80 mb-8">
            The page you're looking for has drifted away. Let us guide you back to paradise.
          </p>
          <Button className="btn-primary" asChild>
            <a href="/">Back to Paradise</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
