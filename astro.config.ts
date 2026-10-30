import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { missing } from './src/lib/content';

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelHost ? `https://${vercelHost}` : 'http://localhost:4321',
  vite: { plugins: [tailwindcss()] },
  integrations: [
    {
      name: 'missing-content-report',
      hooks: {
        'astro:build:done': ({ logger }) => {
          if (missing.length === 0) return logger.info('No missing content.');
          logger.warn(`Missing content (${missing.length}), hidden from the page:\n  - ${missing.join('\n  - ')}`);
        },
      },
    },
  ],
});
