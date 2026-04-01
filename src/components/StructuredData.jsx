export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DentalLaboratory",
    "name": "Laboratoire Dentaire AIDE",
    "url": "https://aidelab.ca",
    "telephone": "+1-450-937-5191",
    "foundingDate": "2007",
    "founder": [
      { "@type": "Person", "name": "Michel Arab" },
      { "@type": "Person", "name": "Maher Karo" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2917 Rue Joseph-A.-Bombardier",
      "addressLocality": "Laval",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:30"
    },
    "description": "Laboratoire dentaire spécialisé en implants, couronnes et ponts. Assistance chirurgicale sur place. Fondé en 2007 à Laval, QC.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 45.5887, "longitude": -73.7451 },
      "geoRadius": "100000"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
