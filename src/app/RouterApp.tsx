/**
 * RouterApp — Lazy-loaded router component
 * 
 * This file is dynamically imported by App.tsx to defer loading
 * the entire route module graph (130+ templates, 400+ CSS files)
 * AND the design system CSS.
 * 
 * By isolating everything heavy in this separate chunk, the main
 * App component renders a loading screen immediately while this
 * module and all its dependencies load asynchronously.
 */

// Design system styles — loaded as part of the lazy chunk
import '../styles/index.css';

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function RouterApp() {
  return <RouterProvider router={router} />;
}
