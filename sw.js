self.addEventListener('push', function(e) {
  var options = {
    body: 'This body was generated from push',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },

  };
  e.waitUntil(
    self.registration.showNotification('Hello World', options)
  )
});
