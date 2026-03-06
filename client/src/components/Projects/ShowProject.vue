<template>
  <div>
    <h1>Show Project</h1>
    <p>id: {{ project.id }}</p>
    <p>name: {{ project.name }}</p>
    <p>description: {{ project.description }}</p>
    <p>status: {{ project.status }}</p>
    <p>startDate: {{ project.startDate }}</p>
    <p>endDate: {{ project.endDate }}</p>
    <p><button v-on:click="$router.push({ name: 'projects' })">กลับ</button></p>
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
    var projectId = this.$route.params.projectId
    this.project = (await ProjectsService.show(projectId)).data
    console.log('show project:', this.project)
  }
}
</script>

<style scoped>
</style>
