self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(self.registration.showNotification(data.title || 'Geo Realt', {
    body: data.body || 'New property matches your search', icon: './icon.png', badge: './icon.png',
    tag: data.tag || 'new-listing', data: { url: './#feed' }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || './#feed'));
});
