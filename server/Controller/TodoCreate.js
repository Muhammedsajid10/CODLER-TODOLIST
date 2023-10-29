const todoModel = require("./TodoSchema");

const createTodo = async(req,res) => {
    const {task,status} = req.body;
    try {
        const todoDetails = await todoModel.create({
            task,
            status
        })
        res.json(todoDetails)
    } catch (error) {
        res.status(401).send('errror on while creating todo')
    }
    
}

module.exports = createTodo;