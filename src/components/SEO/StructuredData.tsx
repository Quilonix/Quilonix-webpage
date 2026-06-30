import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quilonix",
    "url": "https://quilonix.com",
    "logo": "https://quilonix.com/logo.png",
    "description": "Quilonix is a premium technology company building intelligent software, AI systems, digital products, cloud solutions, and future technologies.",
    "sameAs": [
      "https://play.google.com/store/apps/dev?id=8262374975871504599",
      "https://github.com/Quilonix",
      "https://huggingface.co/Quilonix",
      "https://youtube.com/@quilonix",
      "https://www.instagram.com/quilonix.ai",
      "https://www.linkedin.com/company/quilonix"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "quilonix.ai@gmail.com",
      "contactType": "customer service"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Manvanth Gowda M"
      },
      {
        "@type": "Person",
        "name": "Mithun Gowda B"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of projects does Quilonix typically handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We architect and develop high-precision AI integration layers, custom agentic workflows, scalable cloud-native microservices backends, responsive Next.js corporate websites, and secure mobile products."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure system security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere strictly to security best practices. All backend systems are built with input sanitization, parameterized queries, and rate-limiting middleware to guard against OWASP Top 10 vulnerabilities. We align with GDPR and HIPAA requirements depending on project scope."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer migration support for legacy codebases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in mapping gradual, zero-downtime migration paths to shift monolithic systems over to modern, type-safe structures (e.g., Next.js, Golang, Docker, and PostgreSQL)."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing model and project workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate on a project-based fixed scope model or an ongoing engineering retainer. We produce a technical specification blueprint before starting work to align on deliverables, ensuring complete transparency with zero hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for an initial launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard digital product or editorial platform is built and launched within 4-6 weeks. Complex enterprise cloud architectures or customized fine-tuned AI systems typically take 8-12 weeks from discovery to global deployment."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
