
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeResults,
} = require('../../models/controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/result').post(addReaction);
router.route('/:thoughtId/result/:resultId').delete(removeResults);

module.exports = router;
