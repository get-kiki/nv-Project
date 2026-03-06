<template>
  <div>
    <h1>Create Project</h1>
    <form v-on:submit.prevent="createProject">
      <p>name: <input type="text" v-model="project.name"></p>
      <p>description: <textarea v-model="project.description"></textarea></p>
      <p>status: <input type="text" v-model="project.status"></p>
      <p>startDate: <input type="date" v-model="project.startDate"></p>
      <p>endDate: <input type="date" v-model="project.endDate"></p>
      <p><button type="submit">สร้าง Project</button></p>
    </form>
  </div>
</template>

<script>
import ProjectsService from '../../services/ProjectsService'

export default {
  data() {
    return {
      project: {
        name: '',
        description: '',
        status: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    async createProject() {
      try {
        await ProjectsService.post(this.project)
        this.$router.push({ name: 'projects' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
