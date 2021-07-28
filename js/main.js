function onInit() {
    var userLoggedIn = loadFromStorage('loggedinUser')
    renderPage(userLoggedIn);
}

function renderPage(user) {
    var elSignIn = document.querySelector('.sign-in')
    var elLoggedIn = document.querySelector('.logged-in')
    if (user && user.userName) {
        var elAdminBtn = document.querySelector('.admin-btn');
        document.querySelector('span').innerText = `${user.userName}`;
        (user.isAdmin) ? elAdminBtn.style.visibility = 'visible' : elAdminBtn.style.visibility = 'hidden'
        elSignIn.style.display = 'none';
        elLoggedIn.style.display = 'flex';
    }
    else {
        elSignIn.style.display = 'flex';
        elLoggedIn.style.display = 'none';
    }
}

function onLogin() {
    var elUserName = document.querySelector('[name=userName]');
    var elPass = document.querySelector('[name=password]');
    authUser(elUserName.value, elPass.value);
    elUserName.value = '';
    elPass.value = '';
}

function onLogout() {
    logOutUser();
}

function onAdmin() {
    location.assign('admin.html');
}

function onBack() {
    location.assign('index.html');
}

function onLoadAdmin() {
    var userLoggedIn = loadFromStorage('loggedinUser')
    if (!userLoggedIn || !userLoggedIn.userName || !userLoggedIn.isAdmin) location.assign('index.html');
}

function renderAdminPage() {
    getUsers();
}