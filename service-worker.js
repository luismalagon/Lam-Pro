// service-worker.js
// Implementación mínima para cumplir con los requisitos de instalación de PWA.

// Evento 'install': Se dispara cuando el navegador instala el Service Worker.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Evento de instalación recibido.');
  // self.skipWaiting() fuerza al SW a activarse inmediatamente después de la instalación.
  self.skipWaiting(); 
});

// Evento 'activate': Se dispara cuando el Service Worker toma el control de la página.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activación completada.');
  // clients.claim() asegura que el SW controle todas las pestañas abiertas inmediatamente.
  event.waitUntil(clients.claim()); 
});

// Evento 'fetch': Es crucial para que el SW sea válido (incluso si no hacemos caché).
self.addEventListener('fetch', (event) => {
  // Estrategia: Dejamos que la red maneje la solicitud (network-only).
  event.respondWith(fetch(event.request));
});