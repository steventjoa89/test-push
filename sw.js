self.addEventListener('push', function(e) {
  var options = {
    body: e.toString(),
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
    self.registration.showNotification("This is a testing...", options)
  );
});
