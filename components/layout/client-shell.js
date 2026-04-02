"use client";

/**
 * ClientShell — wraps every page with Navbar, Footer, CommandPalette,
 * ambient background, and the custom cursor glow.
 */

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import BackgroundEffects from '@/components/layout/background-effects';
import CommandPalette from '@/components/layout/command-palette';
import CursorGlow from '@/components/layout/cursor-glow';
import ContactFAB from '@/components/layout/contact-fab';

export default function ClientShell({ children }) {
  const [cmdOpen, setCmdOpen] = useState(false);

  const handleGlobalKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [handleGlobalKeyDown]);

  return (
    <>
      <CursorGlow />
      <BackgroundEffects />
      <Navbar onCommandPalette={() => setCmdOpen(true)} />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <main className='relative z-10 flex min-h-screen flex-col pt-16 lg:pt-20'>
        {children}
      </main>
      <div className='relative z-10'>
        <Footer />
      </div>
      <ContactFAB />
    </>
  );
}
