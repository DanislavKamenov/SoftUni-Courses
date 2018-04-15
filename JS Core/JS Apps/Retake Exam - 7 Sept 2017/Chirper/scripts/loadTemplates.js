// Load all HBS templates in a global constant.
const TEMPLATES = {};

async function loadTemplates() {
    const [FEED, USER_FEED, NAV, FOOTER, LOGIN, REGISTER, DISCOVER, ME, USER, CHIRP] = await Promise.all([
        $.get('./templates/feed.hbs'),
        $.get('./templates/userFeed.hbs'),
        $.get('./templates/common/navigation.hbs'),
        $.get('./templates/common/footer.hbs'),
        $.get('./templates/forms/login.hbs'),
        $.get('./templates/forms/register.hbs'),
        $.get('./templates/discover.hbs'),
        $.get('./templates/me.hbs'),
        $.get('./templates/partials/discover-user.hbs'),
        $.get('./templates/partials/chirp.hbs'),
    ]);

    //Compile HBS templates.

    TEMPLATES.nav = Handlebars.compile(NAV);
    TEMPLATES.feed = Handlebars.compile(FEED);
    TEMPLATES.userFeed = Handlebars.compile(USER_FEED);
    TEMPLATES.foot = Handlebars.compile(FOOTER);
    TEMPLATES.login = Handlebars.compile(LOGIN);
    TEMPLATES.register = Handlebars.compile(REGISTER);
    TEMPLATES.discover = Handlebars.compile(DISCOVER);
    TEMPLATES.me = Handlebars.compile(ME);
    Handlebars.registerPartial('user', USER);
    Handlebars.registerPartial('chirp', CHIRP);
}

//Define functions for rendering all views.
function loadLoginForm() {
    $('#main').html(TEMPLATES.login());
    eventBinder.loginEvents();
}

function loadRegisterForm() {
    $('#main').html(TEMPLATES.register());
    eventBinder.registerEvents();
}

function loadNavigation() {
    $('header').after(TEMPLATES.nav());
    eventBinder.linkEvents()
}

function loadFooter() {
    $(document.body).append(TEMPLATES.foot());
}

function loadHomeFeed() {
    //Get subscribed chirps, followed users and followers for currently logged in user.
    getDataForHomeFeed()
        .then((res) => {
            let username = sessionStorage.getItem('username');
            let followingCount = JSON.parse(sessionStorage.getItem('subs')).length;
            let [chirps, chirpCount, followerCount] = res;
            chirps.forEach(chirp => chirp.time = calcTime(chirp._kmd.ect));
            chirps.sort((a, b) => new Date(b._kmd.ect).getTime() - new Date(a._kmd.ect).getTime());
            let context = {
                username,
                chirps,
                chirpCount,
                followingCount,
                followerCount,
            };
            $('#main').html(TEMPLATES.feed(context));
            eventBinder.homeEvents();
        })
        .catch(webApi.handleAjaxError);
}

function loadUserFeed(event) {
    let username = $(event.target).text();
    console.log(username);
    //Get subscribed chirps, followed users and followers for specified user.
    getDataForUserFeed(username)
        .then((res) => {
            let [chirps, chirpCount, followingCount, followerCount] = res;
            chirps.forEach(chirp => chirp.time = calcTime(chirp._kmd.ect));
            chirps.sort((a, b) => new Date(b._kmd.ect).getTime() - new Date(a._kmd.ect).getTime());
            let isNotFollowing = !JSON.parse(sessionStorage.getItem('subs')).includes(username);
            let context = {
                username,
                isNotFollowing,
                chirps,
                chirpCount,
                followingCount,
                followerCount,
            };
            $('#main').html(TEMPLATES.userFeed(context));
            eventBinder.userFeedEvents();
        })
        .catch(webApi.handleAjaxError);
}

function loadDiscover() {
    getAllUsers()
        .then((allUsers) => {
            //Exclude current user from collection.
           let users = allUsers.filter(user => user._id !== sessionStorage.getItem('userId'));
           //Get followers for each user.
            users.forEach(user => {
                user.followers = users.filter(usr => usr.subscriptions.includes(user.username)).length;
            });
            let context = {users: users.sort((a, b) => b.followers - a.followers)};
            $('#main').html(TEMPLATES.discover(context));
            eventBinder.discoverEvents();
        });
}

function loadAccountInfo() {
    let username = sessionStorage.getItem('username');
    //Get subscribed chirps, followed users and followers for specified user.
    getDataForUserFeed(username)
        .then((res) => {
            let [chirps, chirpCount, followingCount, followerCount] = res;
            chirps.forEach(chirp => {
                chirp.time = calcTime(chirp._kmd.ect);
                chirp.isOwned = chirp._acl.creator === sessionStorage.getItem('userId');
            });
            chirps.sort((a, b) => new Date(b._kmd.ect).getTime() - new Date(a._kmd.ect).getTime());
            let context = {
                username,
                chirps,
                chirpCount,
                followingCount,
                followerCount,
            };
            $('#main').html(TEMPLATES.me(context));
            eventBinder.meEvents();
        })
        .catch(webApi.handleAjaxError);
}

function dsdas() {

}