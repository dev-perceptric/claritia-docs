// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const group = (label, dir, pages, extra = {}) => ({ label, ...extra, items: pages.map((p) => `${dir}/${p}`) });

export default defineConfig({
  site: 'https://docs.tryclaritia.com',
  integrations: [
    starlight({
      title: 'Claritia Docs',
      description: 'Claritia help center: build forms with Tia or a template, let leads book the right person, and follow up with workflows and meeting emails.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', alt: 'Claritia', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'external', label: 'Claritia app', href: 'https://app.tryclaritia.com' }],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#fafaf5' } },
      ],
      expressiveCode: {
        styleOverrides: { borderRadius: '12px', borderColor: 'var(--cl-line)', codeFontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace" },
      },
      sidebar: [
        { label: 'Get started', items: ['index', ...['sign-up', 'first-form', 'connect-your-calendar', 'first-week'].map((p) => `get-started/${p}`)] },
        group('Forms', 'forms', ['form-studio', 'templates', 'questions-and-logic', 'design', 'share-and-embed', 'on-submission', 'responses-and-spam', 'form-settings']),
        group('Meetings', 'meetings', ['meeting-types', 'availability-and-teams', 'team-meetings', 'booking-page-and-links', 'paid-meetings', 'upcoming']),
        group('Email and workflows', 'email', ['workflows', 'triggers-and-steps', 'email-editor', 'meeting-emails', 'audiences', 'sending-domain']),
        { label: 'Integrations', items: ['integrations', 'integrations/send-leads', 'integrations/webhooks'] },
        group('Workspace', 'workspace', ['members-and-seats', 'plans-and-billing', 'brand-and-domains', 'security-and-privacy']),
        group('Developers', 'developers', ['api', 'mcp']),
        group('Reference', 'reference', ['glossary', 'faq', 'troubleshooting'], { collapsed: true }),
      ],
    }),
  ],
});
