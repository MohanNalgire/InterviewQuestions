let user = {
    settings: {
        notifications: null
    }
};

// if (user.settings.notifications == null) { user.settings.notifications = true; }

user.settings.notifications ??= true;
console.log(user);
