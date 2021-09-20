self.addEventListener('push', function(e) {
  var options = {
    body: 'This body was generated from push',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore this new world',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'images/xmark.png'
      }
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello World', options)
  );
});
