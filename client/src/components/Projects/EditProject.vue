<template>
  <div>
    <h1>Edit Project</h1>
    <form v-on:submit.prevent="editProject">
      <p>name: <input type="text" v-model="project.name"></p>
      <p>description: <textarea v-model="project.description"></textarea></p>
      <p>status: <input type="text" v-model="project.status"></p>
      <p>startDate: <input type="date" v-model="project.startDate"></p>
      <p>endDate: <input type="date" v-model="project.endDate"></p>
      <p><button type="submit">บันทึก</button></p>
    </form>
  </div>
</template>

<script>
import ProjectsService from '../../services/ProjectsService'

export default {
  data() {
    return {
      project: {}
    }
  },
  async created() {
    try {
      this.project = (await ProjectsService.show(this.$route.params.projectId)).data
      console.log('edit project:', this.project)
    } catch {
      console.log('error')
    }
  },
  methods: {
    async editProject() {
      await ProjectsService.put(this.project)
      this.$router.push({ name: 'projects' })
    }
  }
}
</script>

<style scoped>
</style>
