// Reuce this code
const user = {
    isLoggedIn: false,
    userName: ''
}

if (!user.isLoggedIn) {
    user.isLoggedIn = true;
}

if(!user.userName){
    user.userName='Guest';
}

// -------
user.isLoggedIn ||= true;
user.userName ||= 'Guest';