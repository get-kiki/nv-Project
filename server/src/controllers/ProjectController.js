const { Project } = require('../models')

module.exports = {
  // get all project
  async index (req, res) {
    try {
      const projects = await Project.findAll()
      res.send(projects)
    } catch (err) {
      res.status(500).send({
        error: 'The projects information was incorrect'
      })
    }
  },

  // create project
  async create (req, res) {
    try {
      const project = await Project.create(req.body)
      res.send(project.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create project incorrect'
      })
    }
  },

  // edit project, suspend, active
  async put (req, res) {
    try {
      await Project.update(req.body, {
        where: {
          id: req.params.projectId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update project incorrect'
      })
    }
  },

  // delete project
  async remove (req, res) {
    try {
      const project = await Project.findOne({
        where: {
          id: req.params.projectId
        }
      })

      if (!project) {
        return res.status(403).send({
          error: 'The project information was incorrect'
        })
      }

      await project.destroy()
      res.send(project)
    } catch (err) {
      res.status(500).send({
        error: 'The project information was incorrect'
      })
    }
  },

  // get project by id
  async show (req, res) {
    try {
      const project = await Project.findByPk(req.params.projectId)
      res.send(project)
    } catch (err) {
      res.status(500).send({
        error: 'The project information was incorrect'
      })
    }
  }
}
