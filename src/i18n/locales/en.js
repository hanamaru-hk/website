export default {
  nav: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
  },
  home: {
    slogan: 'Build it. Own it.',
    subtitle: 'Hanamaru Software',
  },
  services: {
    title: 'Services',
    intro: 'Software vendor services we offer.',
    items: [
      {
        name: 'Custom Software Development',
        description:
          'Tailored web and mobile applications built around your business needs.',
        tags: ['Web', 'Mobile'],
      },
      {
        name: 'System Integration',
        description:
          'Connect and unify your existing tools, APIs, and data pipelines.',
        tags: ['API', 'Automation'],
      },
      {
        name: 'Cloud & DevOps',
        description:
          'Reliable hosting, CI/CD pipelines, and infrastructure as code.',
        tags: ['AWS', 'CI/CD'],
      },
      {
        name: 'Maintenance & Support',
        description:
          'Ongoing monitoring, updates, and support for running systems.',
        tags: ['Support', 'Monitoring'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Get in touch with Hanamaru.',
    email: 'Email',
    sendEmail: 'Send email',
    whatsapp: 'WhatsApp',
    chatOnWhatsApp: 'Chat on WhatsApp',
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
  },
  footer: {
    rights: '© 2026 Hanamaru Company Limited',
  },
}
