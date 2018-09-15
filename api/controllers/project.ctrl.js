const models = require("../models");
console.log(models.Users);
module.exports = {
    getOne: (req, res) => {
        const id = req.params.id;
        models.Project.findOne({
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    getAll: (req, res) => {
        models.Project.findAll()
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    createOne: (req, res) => {
        const project = {
           status: req.body.status,
           name: req.body.name,
           location: req.body.location,
           company: req.body.company
        }

        models.Project.create(project)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        })
    },
    updateOne: (req, res) => {
        const id = req.params.id;
        const newProject = {
            status: req.body.status,
            name: req.body.name,
            location: req.body.location,
            company: req.body.company
         }
        models.Project.update(newProject, {
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    deleteOne: (req, res) => {
        const id = req.params.id;

        models.Project.destroy({
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    }

}