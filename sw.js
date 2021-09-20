self.addEventListener('push', function(event) {
  var options = {
    body: event.data.text(),
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore this new world',
      }
    ]
  };
  e.waitUntil(
    self.registration.showNotification("This is a testing push notification", options)
  );
});
