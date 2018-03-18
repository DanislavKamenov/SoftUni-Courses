class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.initContainer();
        this._container = null;
    }

    initContainer () {
        let wrapper = $('<div class="overlay"></div>');
        let dialog = $('<div class="dialog"></div>');
        let paragraph = $(`<p>${this.message}</p>`);
        let okBtn = $('<button>OK</button>');
        let cancelBtn = $('<button>Cancel</button>');

        okBtn.on('click', () => {
            let inputFields = $('.overlay  input');
            let paramsObj = {};
            if (inputFields.length > 0) {
                for (let field of inputFields) {
                    let key = $(field).attr('name');
                    let value = $(field).val();
                    paramsObj[key] = value;
                }
            }

            wrapper.remove();

            this.callback(paramsObj);
        });

        cancelBtn.on('click', () => {
           wrapper.remove();
        });

        paragraph.appendTo(dialog);
        okBtn.appendTo(dialog);
        cancelBtn.appendTo(dialog);
        dialog.appendTo(wrapper);

        this._container = wrapper;
    }

    addInput(label, name, type) {
        let lab = $(`<label>${label}</label>`);
        let input = $(`<input name="${name}" type="${type}">`);
        let dialog = this._container.find('.dialog > button')[0];
        $(dialog).before(lab);
        $(dialog).before(input);
    }

    render() {
        this._container.appendTo($(document.body));
    }
}