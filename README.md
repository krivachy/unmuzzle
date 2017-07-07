# unmuzzle

Do you like [Muzzle](https://muzzleapp.com/)'s notifications on it's landing page but wished you had such exciting notifications to mute? Well now you can!

### Quickstart

Just use me:

```
brew install terminal-notifier
git clone git@github.com:krivachy/unmuzzle.git
cd unmuzzle
node unmuzzle.js
```

Want a more authentic notification experience?
Follow the instructions on [terminal-notifier](https://github.com/julienXX/terminal-notifier#caveats) to enable them:

> To enable actions on the notification (the buttons that allow the user to select an option), open System Preferences > Notifications, select terminal-notifer in the sidebar, and select the "Alerts" alert style. 
![Enabling actions](https://github.com/julienXX/terminal-notifier/raw/master/assets/System_prefs.png)

### Requirements

* Some version of node. I used v7.7.1
* Brew or if not [install terminal-notifier](https://github.com/julienXX/terminal-notifier#download)

### Options

You can specify the interval which the notifications should come, e.g.:

```
node unmuzzle.js 3000
```

### Known issues

* The terminal icon from terminal-notifier is always visible. Don't think this can be remove. Please submit PR if you know otherwise.
* Some notifications don't work and get displayed.

### Credits

All credits go to [Muzzle](https://muzzleapp.com/) and [Bryan Jones](https://twitter.com/bdkjones) for the idea. 
Download Muzzle and follow him on Twitter! 