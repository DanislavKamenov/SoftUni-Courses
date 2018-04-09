const TEMPLATES = {};

async function loadTemplates() {
    const [
        NAVIGATION_TEMPLATE,
        HOME_TEMPLATE,
        LOGIN_REGISTER_TEMPLATE,
        CREATE_EDIT_TEMPLATE,
        LIST_ADS_TEMPLATE,
        AD_PARTIAL_TEMPLATE,
        AD_DETAILS_TEMPLATE
    ] = await Promise.all([
        $.get('./templates/common/headers.hbs'),
        $.get('./templates/home.hbs'),
        $.get('./templates/forms/loginRegisterForm.hbs'),
        $.get('./templates/forms/createEditForm.hbs'),
        $.get('./templates/ads/displayAds.hbs'),
        $.get('./templates/ads/adPartial.hbs'),
        $.get('./templates/ads/adDetails.hbs')
    ]);

    TEMPLATES['links'] = Handlebars.compile(NAVIGATION_TEMPLATE);
    TEMPLATES['home'] = Handlebars.compile(HOME_TEMPLATE);
    TEMPLATES['loginRegister'] = Handlebars.compile(LOGIN_REGISTER_TEMPLATE);
    TEMPLATES['createEdit'] = Handlebars.compile(CREATE_EDIT_TEMPLATE);
    TEMPLATES['displayAds'] = Handlebars.compile(LIST_ADS_TEMPLATE);
    TEMPLATES['adDetails'] = Handlebars.compile(AD_DETAILS_TEMPLATE);
    Handlebars.registerPartial('ad', AD_PARTIAL_TEMPLATE);
}

function loadNavigationTemplate() {
    let context = {
        isAuth: auth.is(),
        user: sessionStorage.getItem('username'),
    };

    $('#menu').html(TEMPLATES.links(context));
    eventBinder.links();
}

function loadHomeTemplate() {
    $('main').html(TEMPLATES.home());
}

function loadFormTemplate(e) {
    let formName = $(e.target).attr('id').slice(4);

    if (formName === 'Login' || formName === 'Register') {
        let context = {type: formName};
        $('main').html(TEMPLATES.loginRegister(context));
        eventBinder.formAuth();
    } else {
        let context = {action: 'Create', type: 'new'};
        $('main').html(TEMPLATES.createEdit(context));
        eventBinder.formSend();
    }
}

function loadListTemplate(context) {
    $('main').html(TEMPLATES.displayAds(context));
    eventBinder.actions();
}

function loadAdDetailsTemplate(context) {
    $('main').html(TEMPLATES.adDetails(context));
}

function loadEditTemplate(e) {
    let id = $(e.target).parent().parent().attr('id');
    let context = {
        ad: adsCache.filter(ad => ad._id === id)[0],
        type: 'existing',
        action: 'Edit',
    };
    $('main').html(TEMPLATES.createEdit(context));
    eventBinder.edit();
}