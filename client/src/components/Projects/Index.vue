<template>
  <div>
    <h2>Get all projects</h2>
    <p><button v-on:click="navigateTo('/project/create')">สร้าง Project</button></p>
    <h4>จำนวน project {{ projects.length }}</h4>
    <div v-for="project in projects" v-bind:key="project.id">
      <p>id: {{ project.id }}</p>
      <p>name: {{ project.name }}</p>
      <p>description: {{ project.description }}</p>
      <p>status: {{ project.status }}</p>
      <p>startDate: {{ project.startDate }}</p>
      <p>endDate: {{ project.endDate }}</p>
      <p><button v-on:click="navigateTo('/project/' + project.id)">ดูข้อมูล Project</button></p>
      <p><button v-on:click="navigateTo('/project/edit/' + project.id)">แก้ไข Project</button></p>
      <p><button v-on:click="deleteProject(project)">ลบข้อมูล Project</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../../services/ProjectsService'

export default {
  data() {
    return {
      projects: []
    }
  },
  async created() {
    try {
      this.projects = (await ProjectsService.index()).data
      console.log(this.projects)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteProject(project) {
      const ok = window.confirm('Want to delete?')
      if (ok) {
        await ProjectsService.delete(project)
        await this.refreshData()
      }
    },
    async refreshData() {
      this.projects = (await ProjectsService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
