const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BDcLewLrCWcH8-LjMSWosN7pHF4aXdm43OVUZ-QXxp7NrsUZz0dyxQNfoB3aYN7qEiNbxSZoHgHi0cYT-XawsP4",
  privateKey: "xKojQp7uninNAYU-5tgAozsMtYfQk03m6aD24tC_gN8",
};

push.setVapidDetails(
  "mainto:test@code.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fRxneq-8P9U:APA91bFvPmGp-odeKpV25SIqnCNQVLDdNGFK1mCiiNWxWg7VRqwovHZVUDcyHv_E-gXoxC77ebX6fU5knctejlxfrkkMNKn1HaZ2QGbgpwBtJguc_4RJ0BlijDT87H9pvQAS0v0wxOck",
  expirationTime: null,
  keys: {
    p256dh:
      "BMH0ubZnymAhhayBoIv7Ph0tHiDHhwf0JDukdir6ylVYOZ0HW9xqTUJBoTSD4egt_pTlSdFjTEyUow1Wn4oN6KQ",
    auth: "iQNqPWGPQDCWhveKnLZPcA",
  },
};
push.sendNotification(sub, "test message1");
