'use client'

import { NotificationAPIProvider } from '@notificationapi/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationAPIProvider
      clientId="Your client ID here"
      userId="Your user ID here"
    >
      {children}
    </NotificationAPIProvider>
  );
}