const router = require('express').Router();

function startAuthDraft(req, res) {

}

function startUnauthDraft(req, res) {

}

function startDraft(req, res) {
    if (req.isAuthenticated()) {
        startAuthDraft(req, res);
    } else {
        startUnauthDraft(req, res);
    }
}

router
    .post('/start', startDraft)

module.exports = router;