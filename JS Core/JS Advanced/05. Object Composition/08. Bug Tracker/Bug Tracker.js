function bugTracker() {
    let id = 0;
    let status = 'Open';
    let bugs = [];
    let domFragment = null;
    function report(author, description, reproducible, severity) {
        bugs.push({ID: id++, author, description, reproducible, severity, status});
        output(domFragment);
    }
    function setStatus(id, newStatus) {
        for (let bug of bugs) {
            if (bug.ID === id) {
                bug.status = newStatus;
            }
        }
        output(domFragment);
    }
    function remove(id) {
        for (let bug of bugs) {
            if (bug.ID === id) {
                bugs.splice(bugs.indexOf(bug), 1);
            }
        }
        output(domFragment);
    }
    function sort (method) {
        if (method && method !== 'ID' && method !== 'severity') {
            bugs.sort((a, b) => a[method].localeCompare(b[method]))
        } else {
            bugs.sort((a, b) => a[method] - b[method]);
        }
        output(domFragment);
    }
    function output(selector) {
        domFragment = $(selector);
        domFragment.html("");
        for (let bug of bugs) {
            let wrapper = $(`<div id="report_${bug.ID}" class="report"></div>`);
            let body = $(`<div class="body"><p>${bug.description}</p></div>`);
            let title = $(`<div class="title"></div>`);
            let author = $(`<span class="author">Submitted by: ${bug.author}</span>`);
            let status = $(`<span class="status">${bug.status} | ${bug.severity}</span>`);

            author.appendTo(title);
            status.appendTo(title);
            body.appendTo(wrapper);
            title.appendTo(wrapper);
            wrapper.appendTo(domFragment);
        }
    }
    return {report, setStatus, remove, sort, output};
}