'use client'

import { NotificationAPIProvider } from '@notificationapi/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationAPIProvider
      clientId='0dcxf5zrhfdrcbibobhn8y5um0'
      userId='millerm30@icloud.com'
      playSoundOnNewNotification={true}
      customServiceWorkerPath="service/notificationapi-service-worker.js"
    >
      {children}
    </NotificationAPIProvider>
  );
}