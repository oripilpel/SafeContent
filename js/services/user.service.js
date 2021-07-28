var gUsers = _createUsers()

gUsers[0].isAdmin = true

function authUser(username, pass) {
    user = _getUser(username)
    if (!user || !(username === user.userName) || !(pass === user.password)) {
        alert('Wrong credentials.. try again! ')
    }
    else {
        _updateLastLoginTime(user);
        saveToStorage('loggedinUser', user)
        renderPage(user)
    }
}

function logOutUser() {
    saveToStorage('loggedinUser', {});
    renderPage(undefined);
}

function _createUsers() {
    users = ['ori', 'nahum', 'shlomi']
    return users.map(function (name) {
        return {
            id: _makeId(),
            userName: name,
            password: 'secret',
            lastLoginTime: 0,
            isAdmin: false
        }
    })
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _updateLastLoginTime(user) {
    user.lastLoginTime = Date.now();
}

function _getUser(username) {
    return gUsers.find(function (user) {
        return user.userName === username
    })
}
