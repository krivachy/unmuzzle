// Shuffle notifications
const notifications = shuffle(require('./notifications.json'));
const child_process = require('child_process');

const maleNames = [
    'Tom',
    'Bob',
    'Bill',
    'John',
    'Adam'
];
const femaleNames = [
    'Eve',
    'Mary',
    'Wendy',
    'Sara'
];

const interval = process.argv[2] || 5000;

notifications.forEach(showNotification, this);

function showNotification(notification, index) {
    setTimeout(function () {
        child_process.exec(buildNotificationCommand(notification))  
    }, index * interval);
}

function buildNotificationCommand(notification) {
    const title = replaceName(sanitizeText(notification.title));
    const message = replaceName(sanitizeText(notification.content));
    const icon = sanitizeIcon(notification.icon);
    const image = notification.image
      ? ` -contentImage ./img/${notification.image}`
      : '';
    const actions = notification.actions
      ? ` -actions ${notification.actions.map(a => `'${a}'`).join(',')}`
      : '';
    return `terminal-notifier -message '${message}' -sound default -appIcon ./img/${icon} -title '${title}' ${image} ${actions}`;
}

function sanitizeText(text) {
    return text.replace('&nbsp;', ' ');
}

function sanitizeIcon(icon) {
    return icon
      .replace('*male', 'imessage.png')
      .replace('*female', 'imessage.png');
}

function replaceName(text) {
    return text
      .replace('*male', getRandomNameFrom(maleNames))
      .replace('*female', getRandomNameFrom(femaleNames));
}

function getRandomNameFrom(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index];
}


// From: https://stackoverflow.com/a/2450976
// Becasue I don't want dependencies and npm and stuff like that
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}