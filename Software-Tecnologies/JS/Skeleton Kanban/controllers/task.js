const Task = require('../models/Task');

module.exports = {
	index: (req, res) => {
		let taskCollection = [{}];
		Task.find().then(tasks => {
           let openTasks = [];
           let inProgressTasks = [];
           let finishedTasks = [];

            for (let currentTask of tasks) {
                if (currentTask.status === "Open") {
					openTasks.push(currentTask);
                } else if (currentTask.status === "In Progress") {
                	inProgressTasks.push(currentTask);
				} else {
                	finishedTasks.push(currentTask);
				}
            }
            res.render("task/index",
				{
					"openTasks": openTasks,
					"inProgressTasks": inProgressTasks,
					"finishedTasks": finishedTasks
				})
		})
	},
	createGet: (req, res) => {
		res.render("task/create")
	},
	createPost: (req, res) => {
		let taskEntity = req.body;
		Task.create(taskEntity).then(taskEntity =>{
			res.redirect("/")
		});
	},
	editGet: (req, res) => {
		let taskId = req.params.id;

		Task.findById(taskId).then(task =>{
			res.render("task/edit", {"title": task})
		});
	},
	editPost: (req, res) => {
        let taskID = req.params.id;
        let task = req.body;

        Task.findByIdAndUpdate(taskID, task, {runValidators: true}).then(taskFromDb =>{
		res.redirect("/");
        });
	}
};