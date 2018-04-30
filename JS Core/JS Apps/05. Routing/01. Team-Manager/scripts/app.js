$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //HOME PAGE
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);
        //ABOUT PAGE
        this.get('#/about', displayAbout);
        //LOGIN PAGE
        this.get('#/login', displayLogin);
        this.post('#/login', performLogin);
        //REGISTER PAGE
        this.get('#/register', displayRegister);
        this.post('#/register', performRegister);
        //LOGOUT ACTION
        this.get('#/logout', performLogout);
        //CATALOG PAGE
        this.get('#/catalog', displayCatalog);
        //CREATE PAGE
        this.get('#/create', displayCreate);
        this.post('#/create', performCreate);
        //TEAM DETAILS PAGE
        this.get('#/catalog/:id', displayDetails);
        //TEAM EDIT PAGE
        this.get('#/edit/:id', displayEdit);
        this.post('#/edit/:id', performEdit);
        //TEAM JOIN ACTION
        this.get('#/join/:id', performJoin);
        //TEAM LEAVE ACTION
        this.get('#/leave', performLeave);

        function displayHome(ctx) {
            ctx.hasNoTeam = auth.hasNoTeam();
            ctx.teamId = sessionStorage.getItem('teamId');
            loadCommon(ctx)
                .then(function () {
                this.partial('./templates/home/home.hbs')
            });
        }

        function displayAbout(ctx) {
            loadCommon(ctx)
                .then(function () {
                this.partial('./templates/about/about.hbs');
            });
        }

        function displayLogin(ctx) {
            loadCommon(ctx).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });

        }

        function performLogin(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password)
                .then((userInfo) => {
                    auth.saveSession(userInfo);
                    auth.showInfo('LOGIN SUCCESSFUL!');
                    ctx.redirect('#/home');
                }).catch(auth.handleError);
        }

        function displayRegister(ctx) {
            loadCommon(ctx)
                .then(function () {
                this.partial('./templates/register/registerPage.hbs')
            });
        }

        function performRegister(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;
            if (password !== repeatPassword) {
                auth.showError('PASSWORDS DO NOT MATCH!');
            } else {
                auth.register(username, password)
                    .then((userInfo) => {
                        auth.saveSession(userInfo);
                        ctx.redirect('#/home');
                        auth.showInfo('REGISTER SUCCESSFUL!');
                    })
                    .catch(auth.handleError);
            }
        }

        function performLogout(ctx) {
            auth.logout()
                .then(() => {
                sessionStorage.clear();
                ctx.redirect('#/home');
                auth.showInfo('LOGOUT SUCCESSFUL!');
            }).catch(auth.showError);
        }
        
        function displayCatalog(ctx) {
            teamsService.loadTeams()
                .then((teams) => {
                    ctx.teams = teams;
                    ctx.hasNoTeam = auth.hasNoTeam();
                    loadCommon(ctx)
                        .then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
                }).catch(auth.showError);
        }

        function displayCreate(ctx) {
            loadCommon(ctx)
                .then(function () {
                this.partial('./templates/create/createPage.hbs');
                });
        }

        function performCreate(ctx) {
            let name = ctx.params.name;
            let comment = ctx.params.comment;
            teamsService.createTeam(name, comment)
                .then((teamInfo) => {
                    teamsService.joinTeam(teamInfo._id)
                        .then((userInfo) => {
                            auth.saveSession(userInfo);
                            ctx.redirect('#/catalog');
                            auth.showInfo(`TEAM "${name}" CREATED SUCCESSFULLY!`);
                        })
                        .catch(auth.handleError);
                })
                .catch(auth.handleError);
        }

        function displayDetails(ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.loadTeamAndMembers(teamId)
                .then((res) =>{
                    [teamInfo, members] = res;
                    ctx.teamId = teamInfo._id;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;
                    ctx.members = members;
                    ctx.isAuthor = sessionStorage.getItem('userId') === teamInfo._acl.creator;
                    ctx.isOnTeam = sessionStorage.getItem('teamId') === teamInfo._id;
                    ctx.hasNoTeam = auth.hasNoTeam();
                    loadCommon(ctx)
                        .then(function () {
                            this.partial('./templates/catalog/details.hbs')
                        });
                })
                .catch(auth.handleError);
        }

        function displayEdit(ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.loadTeamDetails(teamId)
               .then((teamInfo) => {
                    ctx.teamId = teamInfo._id;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;
                   loadCommon(ctx)
                       .then(function () {
                           this.partial('./templates/edit/editPage.hbs');
                       });
               })
                .catch(auth.handleError);

        }

        function performEdit(ctx) {
            let teamId = ctx.params.id.substr(1);
            let teamName = ctx.params.name;
            let teamComment = ctx.params.comment;

            teamsService.edit(teamId, teamName, teamComment)
                .then(() => {
                    ctx.redirect('#/catalog');
                    auth.showInfo('EDIT SUCCESSFUL!');
                })
                .catch(auth.handleError);
        }

        function performJoin(ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.joinTeam(teamId)
                .then((userInfo) =>{
                    auth.saveSession(userInfo);
                    ctx.redirect('#/home');
                    auth.showInfo('TEAM JOINED SUCCESSFULLY!');
                })
                .catch(auth.handleError);
        }

        function performLeave(ctx) {
        teamsService.leaveTeam()
            .then((userInfo) => {
                auth.saveSession(userInfo);
                ctx.redirect('#/catalog');
                auth.showInfo('TEAM LEFT!');
            })
        }

        //Helper method for loading partials
        function loadCommon(ctx) {
            ctx.loggedIn = auth.is();
            ctx.username = sessionStorage.getItem('username');
            return ctx.loadPartials({
                header: './templates/common/header.hbs',
                loginForm: './templates/login/loginForm.hbs',
                registerForm: './templates/register/registerForm.hbs',
                createForm: './templates/create/createForm.hbs',
                editForm: './templates/edit/editForm.hbs',
                team: './templates/catalog/team.hbs',
                teamMember: './templates/catalog/teamMember.hbs',
                teamControls: './templates/catalog/teamControls.hbs',
                footer: './templates/common/footer.hbs',
            });
        }
    });

    app.run();
});