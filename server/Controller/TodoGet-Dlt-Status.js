const todoModel = require("./TodoSchema");

const GetDlt = async(req,res) => {
    const getId = req.params.id;

    if(req.method === 'GET'){
        try {
            const fetchId = await todoModel.find()
            res.json(fetchId) 
        } catch (error) {
            res.status(401).send('Error on while fetching Daata : ',error)
        }
    }else if(req.method === 'DELETE'){
        try {
            const deleteId = await todoModel.findByIdAndDelete(getId)
            res.json({messgae:'successfully deleted',data:deleteId})
        } catch (error) {
            res.status(401).send('Error on while deleting data : ',error)
        }
    }
}


const getTodoItem = async(req,res) => {
    const getId = req.params.id;
    const getTodo = await todoModel.findById({_id:getId})
    res.json(getTodo)
}


const stausUpdate = async(req,res) => {
    const {status} = req.body;
    const getId = req.params.id;
    try {
        const updateStatus = await todoModel.findByIdAndUpdate(getId, { status: true })
        res.json({ message: 'updated status successfully', data: updateStatus })
    } catch (error) {
        res.status(401).send('Error on while updating status : ',error)
    }
    
}



module.exports = {GetDlt,stausUpdate,getTodoItem};