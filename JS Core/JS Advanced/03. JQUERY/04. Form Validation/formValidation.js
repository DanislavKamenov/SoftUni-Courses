function validate() {
    let radioBtn = $('#company');
    radioBtn.on('change', function () {
        let fieldSet = $('#companyInfo');
        if (radioBtn.is(':checked')) {
            fieldSet.css('display', 'block');
        } else {
            fieldSet.css('display', 'none');
            $('#companyNumber').css('border-color', '');
        }
    });
    
    $('#submit').on('click', function (ev) {
        ev.preventDefault();
        let username = $('#username');
        let email = $('#email');
        let pwd = $('#password');
        let cnfPwd = $('#confirm-password');

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^.*?@.*?\..*$/;
        let pwdPattern = /^[\w]{5,15}$/;

        validateLogIn(usernamePattern, username);
        validateLogIn(emailPattern, email);

        if (pwd.val() === cnfPwd.val()) {
            validateLogIn(pwdPattern, pwd);
            validateLogIn(pwdPattern, cnfPwd);
        } else {
            pwd.css('border', 'solid red');
            cnfPwd.css('border', 'solid red');
        }

        if (radioBtn.is(':checked')) {
            let fieldSetPattern = /^[1-9][0-9][0-9][0-9]$/;
            let companyNum = $('#companyNumber');
            validateLogIn(fieldSetPattern, companyNum);
        }
        let isValid = true;
        if($('input[style*="red"]').length > 0) isValid = false;
        if (isValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }

    });

    function validateLogIn(pattern, field) {
        if (!pattern.test(field.val())) {
            field.css('border', 'solid red');

        }
        else {
            field.css('border', 'none');
        }
    }
}
