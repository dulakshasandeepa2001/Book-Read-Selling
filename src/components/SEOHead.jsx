import React, { useEffect } from 'react';

const SEOHead = ({ 
  title = "BookHub - Read & Buy Books Online", 
  description = "Discover thousands of books, read online, or download for offline reading. Your literary journey starts here at BookHub.",
  keywords = "books, reading, download books, buy books, online library, ebooks, literature",
  image = "/og-image.jpg",
  url = "https://bookhub.com"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'BookHub');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'BookHub', true);
    
    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update theme color
    updateMetaTag('theme-color', '#ec4899');
    updateMetaTag('msapplication-TileColor', '#ec4899');
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Add structured data
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "BookHub",
      "description": description,
      "url": url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEOHead;

