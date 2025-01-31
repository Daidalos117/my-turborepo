'use client'

import { NotificationAPIProvider } from '@notificationapi/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationAPIProvider
      clientId='Add your client id here'
      userId='Add your user id here'
      playSoundOnNewNotification={true}
      customServiceWorkerPath="service/notificationapi-service-worker.js"
    >
      {children}
    </NotificationAPIProvider>
  );
}