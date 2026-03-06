import Api from './Api'

export default {
    index () {
        return Api().get('projects')
    },
    show (projectId) {
        return Api().get('project/' + projectId)
    },
    post (project) {
        return Api().post('project', project)
    },
    put (project) {
        return Api().put('project/' + project.id, project)
    },
    delete (project) {
        return Api().delete('project/' + project.id)
    },
}
