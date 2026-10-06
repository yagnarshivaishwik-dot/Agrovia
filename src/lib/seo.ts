export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://agrovia.au/#organization",
        name: "Agrovia Consulting",
        url: "https://agrovia.au",
        logo: "https://agrovia.au/logo.png",
        slogan: "Your crop comes first.",
        description:
          "Independent agronomy consulting and agricultural research/field-trial services across North Queensland, specializing in Bowen and the Burdekin.",
        email: "dev.p@agrovia.au",
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Bowen, Queensland",
          },
          {
            "@type": "AdministrativeArea",
            name: "Burdekin, Queensland",
          },
          {
            "@type": "AdministrativeArea",
            name: "North Queensland",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://agrovia.au/#localbusiness",
        name: "Agrovia Consulting",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
        url: "https://agrovia.au",
        email: "dev.p@agrovia.au",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bowen",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.0137,
          longitude: 148.2476,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "17:30",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Agronomy Consulting & Agricultural Field Trials",
        provider: {
          "@id": "https://agrovia.au/#organization",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "North Queensland",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Agronomy & Research Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Crop Scouting & Field Audits",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pest and Disease Management (IPM)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Crop Nutrition & Leaf Diagnostics",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agricultural Research & Field Trials",
              },
            },
          ],
        },
      },
    ],
  };
}
