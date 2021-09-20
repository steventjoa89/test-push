const push = require('web-push');

let vapidKeys = {
    publicKey: 'BDcLewLrCWcH8-LjMSWosN7pHF4aXdm43OVUZ-QXxp7NrsUZz0dyxQNfoB3aYN7qEiNbxSZoHgHi0cYT-XawsP4',
    privateKey: 'xKojQp7uninNAYU-5tgAozsMtYfQk03m6aD24tC_gN8'
}

push.setVapidDetails('mainto:test@code.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  
};
push.sendNotification(sub, 'test message');
