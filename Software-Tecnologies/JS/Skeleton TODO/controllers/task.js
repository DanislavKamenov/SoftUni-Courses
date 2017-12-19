const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find({}).then(tasks =>
		res.render("task/index", {tasks : tasks}));
    },
	createGet: (req, res) => {
        res.render("task/create");
	},
	createPost: (req, res) => {
        let task = req.body;

        Task.create(task).then(task => {
            res.redirect("/")
        }).catch( task => {
        	task.error = "Could not create task";
			res.render("task/create", task)
		});
	},
	deleteGet: (req, res) => {
		let taskId = req.params.id;
		Task.findById(taskId).then(task => {
            if (task) {
                res.render("task/delete", task)
            } else {
				res.redirect("/");
			}
        }).catch(err => { err = "Could not find Task";
        		res.redirect("/", err);
        });
	}
    	
	,
	deletePost: (req, res) => {
        let taskId = req.params.id;

        Task.findByIdAndRemove(taskId).then(res => {
            res.redirect("/")
        }).catch( task => {
            task.error = "Could not delete task";
            res.render("task/delete", task)
        });
	}
};