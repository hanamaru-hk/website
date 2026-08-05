export default {
  nav: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
  },
  home: {
    slogan: 'Build it. Own it.',
    seeOffers: 'View our services',
  },
  services: {
    title: 'Services',
    items: [
      {
        name: 'Custom Software Development',
        description:
          'Tailored web, mobile, desktop and cloud applications built around your business needs.',
        tags: ['Web', 'Mobile', 'Desktop'],
      },
      {
        name: 'Web Application Development',
        description:
          'Dashboards, client portals, booking systems and SaaS platforms for your team and customers.',
        tags: ['Dashboard', 'Portal', 'SaaS'],
      },
      {
        name: 'Mobile App Development',
        description:
          'Native iOS and Android apps, plus cross-platform builds that share a single codebase.',
        tags: ['iOS', 'Android'],
      },
      {
        name: 'AI Integration & Automation',
        description:
          'AI features, chatbots and workflow automation that remove repetitive manual work.',
        tags: ['AI', 'Automation'],
      },
      {
        name: 'API & Third-Party Integrations',
        description:
          'Connect your tools with accounting, CRM, ERP and payment gateways.',
        tags: ['API', 'CRM', 'ERP'],
      },
      {
        name: 'UI/UX Design',
        description:
          'App and web design, from discovery and wireframes to polished interfaces.',
        tags: ['UI', 'UX'],
      },
      {
        name: 'Legacy Modernisation',
        description:
          'Migrate, replatform and refactor outdated systems onto maintainable modern stacks.',
        tags: ['Migration', 'Refactoring'],
      },
      {
        name: 'Maintenance & Support',
        description:
          'SLA-backed packages covering security patches, upgrades and ongoing feature work.',
        tags: ['Support', 'SLA'],
      },
      {
        name: 'Consultancy / Fractional CTO',
        description:
          'Senior technical strategy, architecture reviews and due diligence.',
        tags: ['Strategy', 'Consulting'],
      },
      {
        name: 'Cloud & DevOps',
        description:
          'Reliable hosting, CI/CD pipelines, and infrastructure as code.',
        tags: ['AWS', 'CI/CD'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    email: 'Email',
    emailDesc: "Feel free to reach out to us at software{'@'}hanamaru.hk.",
    sendEmail: 'Send email',
    whatsapp: 'WhatsApp',
    chatOnWhatsApp: 'Chat on WhatsApp',
    github: 'GitHub',
    githubDesc: 'We have some experimental projects on GitHub. Feel free to use and comment.',
    viewOnGitHub: 'View on GitHub',
    address: 'Address',
    addressDesc:
      'B7 11/F Por Mee Factory Building,\nCheung Sha Wan,\nKowloon,\nHong Kong',
    bookingRequired: 'Booking required',
    viewOnMap: 'View on Google Maps',
    formTitle: 'Send us a message',
    name: 'Name',
    phone: 'Phone',
    emailField: 'Email',
    message: 'Message',
    placeholders: {
      name: 'Your name',
      phone: 'Your phone number',
      email: 'Your email',
      message: 'Any enquiries',
    },
    rules: {
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
    },
    submit: 'Submit',
    success: 'Thank you for your enquiry, we will reply shortly.',
    errors: {
      failed: 'Failed to send your message, please try again.',
      timeout: 'The request timed out, please try again.',
    },
  },
  footer: {
    rights: '© 2026 Hanamaru Company Limited',
  },
}
