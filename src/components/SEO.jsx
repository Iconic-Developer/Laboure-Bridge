
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Labour Bridges | Construction Labour & Workforce Solutions in India",

  description =
    "Labour Bridges connects contractors, construction companies and infrastructure projects with skilled and unskilled workers across India.",

  url = "https://www.labourbridges.com/",

  image = "https://www.labourbridges.com/logo.png",

  type = "website",
}) => {
  // Make sure URLs always end consistently
  const canonicalUrl = url.endsWith("/") ? url : `${url}/`;

  return (
    <Helmet>
      {/* ==============================
          BASIC SEO
      ============================== */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta name="author" content="Labour Bridges" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* ==============================
          MOBILE
      ============================== */}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta
        httpEquiv="content-language"
        content="en-IN"
      />

      {/* ==============================
          OPEN GRAPH
          Facebook / WhatsApp / LinkedIn
      ============================== */}

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content="Labour Bridges"
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:image:alt"
        content="Labour Bridges - Construction Workforce Solutions"
      />

      {/* ==============================
          TWITTER / X
      ============================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      <meta
        name="twitter:image:alt"
        content="Labour Bridges - Construction Workforce Solutions"
      />
    </Helmet>
  );
};

export default SEO;

