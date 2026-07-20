# Talery SEO Metadata & Schema

## Global Metadata

**Canonical Domain:** https://talery.co

**Default Meta Title:** Talery — AI-Powered Social Travel Platform

**Default Meta Description:**
Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators. Every journey has a story. Tell yours with Talery.

**Keywords:**
AI travel planner, social travel, travel itineraries, creator economy, trip planning, group travel, travel community, budget travel, travel stories, influencer travel

## Open Graph (Global)

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="https://talery.co">
<meta property="og:site_name" content="Talery">
<meta property="og:title" content="Talery — AI-Powered Social Travel Platform">
<meta property="og:description" content="Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators.">
<meta property="og:image" content="https://talery.co/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## Twitter Cards (Global)

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Talery — AI-Powered Social Travel Platform">
<meta name="twitter:description" content="Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators.">
<meta name="twitter:image" content="https://talery.co/og-image.jpg">
<meta name="twitter:creator" content="@talery">
```

## Page-Specific Titles

| Page | Title |
|------|-------|
| Home | Talery — AI-Powered Social Travel Platform |
| About | About Us | Talery |
| Blog | Travel Stories & Updates | Talery |
| Careers | Careers | Talery |
| Contact | Contact | Talery |
| Creator Program | Creator Program | Talery |
| Partners | Partner With Us | Talery |
| Pricing | Pricing | Talery |
| Features | Features | Talery |
| AI Travel Planner | AI Travel Planner | Talery |
| Privacy Policy | Privacy Policy | Talery |
| Terms of Service | Terms of Service | Talery |

## Structured Data (Schema.org)

### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Talery",
  "url": "https://talery.co",
  "logo": "https://talery.co/logo.png",
  "sameAs": [
    "https://instagram.com/talery",
    "https://linkedin.com/company/talery",
    "https://twitter.com/talery"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@talery.co",
    "contactType": "Customer Support"
  }
}
```

### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Talery",
  "url": "https://talery.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://talery.co/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### SoftwareApplication Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Talery",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "iOS, Android, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2500"
  }
}
```

## robots.txt

```
User-agent: *
Allow: /

Sitemap: https://talery.co/sitemap.xml
```

## Sitemap

See `public/sitemap.xml` for the complete URL list.

## Accessibility

- All images include descriptive `alt` text
- Interactive elements have accessible labels
- Color contrast meets WCAG 2.2 AA
- Keyboard navigation supported
- Reduced motion media query respected
