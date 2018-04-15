let eventBinder = (() => {
    //Bind all notification boxes.
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    });

    function notificationEvents() {
        $('#infoBox, #errorBox').on('click', function() {
            $(this).fadeOut()
        });
    }
    
    function linkEvents() {
        $('#linkHome').on('click', loadHomeFeed);
        $('#linkLogout').on('click', auth.logOutUser);
        $('#linkDiscover').on('click', loadDiscover);
        $('#linkMe').on('click', loadAccountInfo);
    }

    function loginEvents() {
        $('#linkRegister').on('click', loadRegisterForm);
        $('#formLogin').on('submit', function (event) {
            event.preventDefault();
            auth.loginUser();
        });
    }

    function registerEvents() {
        $('#linkLogin').on('click', loadLoginForm);
        $('#formRegister').on('submit', function (event) {
            event.preventDefault();
            auth.registerUser();
        });
    }
    
    function homeEvents() {
        $('#formSubmitChirp').on('submit', createChirp);
        $('.chirp-author').on('click', loadUserFeed);
    }

    function meEvents() {
        $('#formSubmitChirpMy').on('submit', createChirp);
        $('.chirp-time').find('a').on('click', deleteChirp);
    }
    
    function discoverEvents() {
        $('.userbox').find('.chirp-author').on('click', loadUserFeed);
    }

    function userFeedEvents() {
        $('#btnFollow, #btnUnfollow').on('click', function (event) {
            let btn = $(event.target);
            if (btn.text() === 'Follow') {
                btn.text('Unfollow');
                followUser(event);
                btn.attr('id', 'btnUnfollow').text('Unfollow');

            } else {
                unfollowUser(event);
                btn.attr('id', 'btnFollow').text('Follow');

            }
        });
    }

    return {loginEvents, registerEvents, linkEvents, notificationEvents, homeEvents, discoverEvents, meEvents, userFeedEvents};
})();