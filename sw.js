self.addEventListener('push', function(e) {
  var options = {
    body: "This is a body from push notification",
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
