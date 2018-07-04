const router = require('express').Router();
const draftService = require('../services/draftService');
const mapService = require('../services/mapService');
const authCheck = require('../config/auth-check');
const shortid = require('shortid');

function startDraft(req, res) {
    const first = shortid.generate();
    const second = shortid.generate();
    const third = shortid.generate();

    let newDraft = {
        creator: req.user.id,
        participants: {
            teamOne: {
                url: first,
                name: 'TeamOne'
            },
            teamTwo: {
                url: second,
                name: 'TeamTwo'
            },
            observer: {
                url: third,
                name: 'TeamOne'
            }            
        },   
        _allUrls: [first, second, third]     
    };

    draftService.create(newDraft)
        .then(() => {
            res.status(200).json({
                success: true,
                first, 
                second, 
                third                
            });
        })
        .catch(err=> {
            res.status(404).json({
                success: true,
                message: err
            });
        });
}

function getDraftInfo(req, res) {
    const draftId = req.params.id;

    draftService
        .getOne({_allUrls: { $in: [draftId] }})
        .then(draft => {
            mapService.getAll()
                .then(maps => {
                    if (draft.participants.teamOne.url === draftId) {
                        return res.status(200).json({
                            success: true,
                            maps,
                            message: 'first'
                        });
                    } else if (draft.participants.teamTwo.url === draftId) {
                        return res.status(200).json({
                            success: true,
                            maps,
                            message: 'second'
                        });
                    } else if (draft.participants.observer.url === draftId) {
                        return res.status(200).json({
                            success: true,
                            maps,
                            message: 'third'
                        });
                    }

                    res.status(404).json({
                        success: false,
                        message: 'draft not found'
                    })
                })
                .catch(err => res.status(400));
            
        })
        .catch(err => res.status(400));
}

router
    .post('/start', authCheck, startDraft)
    .get('/:id', getDraftInfo)
    .post('/:id')

module.exports = router;