import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import WebGLBackground from './components/effects/WebGLBackground';
import GrainOverlay from './components/effects/GrainOverlay';
import './index.css';
import { ThemeProvider } from 'next-themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
      <WebGLBackground />
      <GrainOverlay />
      <App />
    </ThemeProvider>
  </StrictMode>
);
