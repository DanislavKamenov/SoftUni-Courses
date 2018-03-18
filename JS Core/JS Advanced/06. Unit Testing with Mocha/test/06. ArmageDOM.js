const jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('ArmageDOM', function () {
    let selector;
    beforeEach('initHTML', function () {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`;
        selector = $('#target');
    });

    it('only 1 selector', function () {
        let originalHTML = selector.html();
        nuke(selector);
        expect(selector.html()).to.equal(originalHTML);
    });
    it('Should not remove with duplicate selectors', function () {
        let originalHTML = selector.html();
        let selector1 = $('#target');
        nuke(selector1, selector1);
        expect(selector.html()).to.be.equal(originalHTML);
    });
    it('Should not remove with an invalid selector', function () {
        let oldHtml = $(selector).html();
        nuke(selector, 2);
        expect(selector.html()).to.be.equal(oldHtml);
    });
    it('both selectors valid', function () {
        let originalHTML = selector.html();
        nuke($('.nested'), $('.target'));
        !!expect(selector.html()).to.not.equal(originalHTML);
    })
    it('Should not remove with two valid selectors', function () {
        let originalHTML = selector.html();
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        nuke(selector1, selector2);
        expect(selector.html()).to.be.equal(originalHTML);
    });
});