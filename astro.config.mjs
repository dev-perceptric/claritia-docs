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
        { label: 'Get started', items: ['index', ...['sign-up', 'the-interface', 'first-form', 'connect-your-calendar', 'first-week'].map((p) => `get-started/${p}`)] },
        group('Forms', 'forms', ['forms-list', 'form-studio', 'templates', 'questions-and-logic', 'design', 'share-and-embed', 'on-submission', 'responses-and-spam', 'form-settings']),
        group('Meetings', 'meetings', ['meeting-types', 'availability-and-teams', 'team-meetings', 'booking-page-and-links', 'links-and-polls', 'guest-experience', 'paid-meetings', 'upcoming']),
        group('Email and workflows', 'email', ['workflows', 'triggers-and-steps', 'email-editor', 'templates', 'meeting-emails', 'audiences', 'sending-domain', 'sender']),
        { label: 'Integrations', items: ['integrations', 'integrations/send-leads', 'integrations/webhooks', { label: 'CRMs', collapsed: true, items: ['integrations/attio', 'integrations/close', 'integrations/copper', 'integrations/dynamics-365', 'integrations/freshsales', 'integrations/gohighlevel', 'integrations/hubspot', 'integrations/keap', 'integrations/monday-crm', 'integrations/omniscient', 'integrations/pipedrive', 'integrations/salesforce', 'integrations/zoho-crm'] }, { label: 'Email lists', collapsed: true, items: ['integrations/activecampaign', 'integrations/brevo', 'integrations/kit', 'integrations/klaviyo', 'integrations/mailchimp', 'integrations/mailerlite'] }, { label: 'Sheets and databases', collapsed: true, items: ['integrations/airtable', 'integrations/excel-online', 'integrations/google-sheets', 'integrations/mysql', 'integrations/notion', 'integrations/postgresql'] }, { label: 'Tasks and tickets', collapsed: true, items: ['integrations/clickup', 'integrations/freshdesk', 'integrations/intercom', 'integrations/linear', 'integrations/monday-com', 'integrations/smartsuite', 'integrations/trello', 'integrations/zendesk'] }, { label: 'Documents and files', collapsed: true, items: ['integrations/amazon-s3', 'integrations/box', 'integrations/docusign', 'integrations/dropbox', 'integrations/google-docs', 'integrations/google-drive', 'integrations/onedrive', 'integrations/pandadoc'] }, { label: 'Messages and texts', collapsed: true, items: ['integrations/discord', 'integrations/microsoft-teams', 'integrations/twilio'] }, { label: 'Forms', collapsed: true, items: ['integrations/tally', 'integrations/typeform', 'integrations/webflow-forms'] }, { label: 'Meetings', collapsed: true, items: ['integrations/cal-com', 'integrations/calendly', 'integrations/webex', 'integrations/whereby'] }, { label: 'Calendars and video', collapsed: true, items: ['integrations/google-calendar', 'integrations/outlook-calendar', 'integrations/zoom'] }, { label: 'Payments', collapsed: true, items: ['integrations/paypal', 'integrations/square', 'integrations/stripe'] }, { label: 'Analytics and ads', collapsed: true, items: ['integrations/amplitude', 'integrations/google-ads', 'integrations/meta-conversions-api', 'integrations/mixpanel', 'integrations/posthog', 'integrations/segment'] }, { label: 'Automation', collapsed: true, items: ['integrations/make', 'integrations/zapier'] }] },
        group('Workspace', 'workspace', ['general', 'members-and-seats', 'plans-and-billing', 'brand-and-domains', 'link-domain', 'profile', 'security-and-privacy']),
        group('Developers', 'developers', ['api', 'mcp']),
        { label: 'API reference', collapsed: true, items: ['api-reference', ...['authentication', 'me', 'forms', 'events', 'hooks', 'workflows', 'mcp-tools', 'webhook-events'].map((p) => `api-reference/${p}`)] },
        { label: 'Changelog', collapsed: true, items: ['changelog', 'changelog/2026-11', 'changelog/2026-10'] },
        { label: 'Error guide', collapsed: true, items: ['errors', ...['forms', 'meetings', 'email', 'integrations'].map((p) => `errors/${p}`)] },
        group('Reference', 'reference', ['roles-and-permissions', 'plan-limits', 'glossary', 'faq', 'troubleshooting'], { collapsed: true }),
      ],
    }),
  ],
});
