<template>
  <section id="projects">
    <div class="container">
      <div class="projet-list">
        <ProjectCard
          v-for="project in projects"
          :key="project"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/global/ProjectCard.vue";

export default {
  name: "ProjectListSection",
  components: {
    ProjectCard,
  },
  data: function () {
    return {
      projects: [],
    };
  },
  methods: {},
  mounted: function () {
    this.$store.watch(
      (state) => state.projects,
      () => {
        this.projects = this.$store.getters.getProjects.reverse();
      },
      { immediate: true }
    );
  },
};
</script>

<style scoped lang="scss">
section#projects {
  .container {
    width: 90%;
  }
  .projet-list {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
}
</style>