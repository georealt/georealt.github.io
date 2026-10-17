self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch {}
  event.waitUntil(self.registration.showNotification(data.title || 'Geo Realt', {
    body: data.body || 'New property matches your search', icon: './icon.png', badge: './icon.png',
    tag: data.tag || 'new-listing', data: { url: data.url || './#feed' }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const url = new URL(event.notification.data?.url || './#feed', self.registration.scope);
    if (url.origin !== self.location.origin) return;
    const windows = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    const existing = windows.find(window => new URL(window.url).origin === url.origin);
    if (existing) { await existing.navigate(url.href); await existing.focus(); }
    else await clients.openWindow(url.href);
  })());
});
