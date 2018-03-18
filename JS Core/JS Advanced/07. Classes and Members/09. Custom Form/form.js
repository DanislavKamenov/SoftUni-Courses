let result = (function() {

    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.onInput();
        }

        onInput() {
            this._elements.on('input', (event) => {
                // When elements change so does the value
                let text = $(event.target).val();
                this._value = text;
                for (let el of this._elements) {
                    $(el).val(text);
                }
            });
        }

        set value(text) {
            this._value = text;
            for (let el of this._elements) {
                $(el).val(text);
            }
        }

        get value() {
            return this._value;
        }

        get elements() {
            return this._elements;
        }

        set invalidSymbols(regex) {
            this._invalidSymbols = regex;
        }

        isValid() {
            return !this._invalidSymbols.test(this._value);
        }
    }

    class Form {
        constructor(textboxes) {
            this._element = $('<div>').addClass('form');
            this.textboxes = arguments;
        }

        set element(argsArr) {
            for (let arg of argsArr) {
                $(arg._elements).appendTo(this._element);
            }
        }

        set textboxes(args) {
            for (let arg in args) {
                if (!(args[arg] instanceof Textbox)) {
                    throw new Error();
                }
            }

            this._textboxes = args;
            this.element = this._textboxes
        }

        submit() {
            let allValid = true;
            $.each(this._textboxes, function (key, value) {
                if(value.isValid()) {
                    value._elements.css('border', '2px solid green');
                    console.log(value._elements);
                } else {
                    allValid = false;
                    value._elements.css('border', '2px solid red');
                }
            });
            return allValid;
        }

        attach(selector) {
            this._element.appendTo($(selector))
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.submit();
form.attach("#root");
