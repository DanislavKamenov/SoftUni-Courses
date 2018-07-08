const router = require('express').Router();
const draftService = require('../services/draftService');
const authCheck = require('../config/auth-check');
const shortid = require('shortid');

function startDraft(req, res) {
    const teamOneUrl = shortid.generate();
    const teamTwoUrl = shortid.generate();
    const observerUrl = shortid.generate();
    const banCount = req.body.banCount;
    const firstTeam = req.body.firstTeam;

    let newDraft = {
        creator: req.user.id,
        participants: {
            teamOne: {
                url: teamOneUrl,
                name: 'TeamOne'
            },
            teamTwo: {
                url: teamTwoUrl,
                name: 'TeamTwo'
            },
            observer: {
                url: observerUrl,
                name: 'observer'
            }
        },
        banCount,
        firstTeam,
        isOnTurn: firstTeam,
        _allUrls: [teamOneUrl, teamTwoUrl, observerUrl]
    };

    draftService.create(newDraft)
        .then((draft) => {
            draft.isOnTurn = draft.participants[firstTeam];
            draft.save();
            res.status(200).json({
                success: true,
                teamOneUrl,
                teamTwoUrl,
                observerUrl,
            });
        })
        .catch(err => {
            res.status(404).json({
                success: false,
                message: err.message || err
            });
            console.log(err);
        });
}

function getDraftInfo(req, res) {
    const participant = req.params.id;

    draftService
        .getOne({ _allUrls: { $in: [participant] } })
        .then(draft => {
            if (draft.participants.teamOne.url === participant) {
                return res.status(200).json({
                    success: true,
                    participant: draft.participants.teamOne,
                    draft
                });
            } else if (draft.participants.teamTwo.url === participant) {
                return res.status(200).json({
                    success: true,
                    participant: draft.participants.teamTwo,
                    draft
                });
            } else if (draft.participants.observer.url === participant) {
                return res.status(200).json({
                    success: true,
                    participant: draft.participants.observer,
                    draft
                });
            }

            res.status(404).json({
                success: false,
                message: 'draft not found'
            });
        })
        .catch(err => res.status(400));

}

function banMap(req, res) {
    const participant = req.body.participant;
    const mapName = req.body.mapName;

    draftService
        .getOne({ _allUrls: { $in: [participant.url] } })
        .then(draft => {
            if (draft.participants.teamOne.isReady && draft.participants.teamTwo.isReady) {
                const mapIndex = draft.maps.findIndex(m => m.name === mapName);
                draft.maps[mapIndex].set({ 'name': mapName, 'isAllowed': false });
                //TODO: find a way to make this work.            
                draft.save();

                res.status(200).json({
                    success: true,
                    draft
                });
            }
        })
        .catch(err => console.log(err));
}

function setTeamReadiness(req, res, next) {
    const participantUrl = req.params.id;
    const participant = req.body.participant;

    draftService
        .getOne({ _allUrls: { $in: [participantUrl] } })
        .then(draft => {
            if (participant) {
                if (draft.participants.teamOne.name === participant.name) {
                    draft.participants.teamOne.isReady = participant.isReady;
                } else if (participant && draft.participants.teamTwo.name === participant.name) {
                    draft.participants.teamTwo.isReady = participant.isReady;
                }
                draft.save();

                if (draft.participants.teamOne.isReady && draft.participants.teamTwo.isReady) {
                    return next(draft);
                }

                res.status(200).json({
                    success: true,
                    draft
                });
            }
        }).catch(err => console.log(err));
}


router
    .post('/start', authCheck, startDraft)
    .get('/:id', setTeamReadiness, getDraftInfo)
    .post('/:id', banMap)

module.exports = router;