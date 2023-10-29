const express = require('express');
const createTodo = require('./Controller/TodoCreate');
const {GetDlt, stausUpdate, getTodoItem} = require('./Controller/TodoGet-Dlt-Status');
const router = express.Router();

router.route('/').post(createTodo)
router.route('/get').get(GetDlt)
router.route('/dlt/:id').delete(GetDlt)
router.route('/updateStatus/:id').put(stausUpdate)
router.route('/getTodo/:id').get(getTodoItem)




module.exports = router;