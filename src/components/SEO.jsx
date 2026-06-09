import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Labour Bridge",
  description = "Labour Bridge - Skilled workers and job opportunities platform",
  keywords = "Labour Bridge, skilled workers, job opportunities, construction industry, employment platform",
  url = "https://www.labourbridges.com",
  image = "/logo.png"
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Labour Bridge Team" />

      {/* Mobile responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (WhatsApp / Facebook / LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;