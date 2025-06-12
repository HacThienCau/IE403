import express from 'express';
const router = express.Router();
import { countAll, countClean, countHate, countOffensive, countIndividual, countGroups, countReligion, countRace, countPolitics , getAllCount, getCommentData} from '../controllers/YoutubeController.js';

// Route to count 
router.get('/all', countAll);
router.get('/clean', countClean);
router.get('/hate', countHate);
router.get('/offensive', countOffensive);
router.get('/individual', countIndividual);
router.get('/groups', countGroups);
router.get('/religion', countReligion);
router.get('/race', countRace);
router.get('/politics', countPolitics);
// Route to get all counts
router.get('/count', getAllCount);
// Route to get comment data
router.get('/comment', getCommentData);

module.exports = router;