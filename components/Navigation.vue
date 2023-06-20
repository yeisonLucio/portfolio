<script setup>
const tab = ref('')
</script>
<template>
  <v-card color="transparent" class="mt-3" elevation="0">
    <v-tabs v-model="tab" color="white" bgColor="blue-grey-darken-1" alignTabs="center">
      <v-tab value="about">
        <v-icon start>fa-solid fa-circle-info</v-icon>
        Acerca de
      </v-tab>
      <v-tab value="experience">
        <v-icon start>fa-solid fa-briefcase</v-icon>
        Experiencia
      </v-tab>
      <v-tab value="studies">
        <v-icon start>fa-solid fa-graduation-cap</v-icon>
        Estudios
      </v-tab>
      <v-tab value="projects">
        <v-icon start>fa-solid fa-file-code</v-icon>
        Proyectos
      </v-tab>
      <v-tab value="articles">
        <v-icon start>fa-solid fa-newspaper</v-icon>
        Artículos
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="about">
          <About/>
        </v-window-item>
        <v-window-item value="experience">
          Building...
        </v-window-item>
        <v-window-item value="studies">
          Building...
        </v-window-item>
        <v-window-item value="projects">
          Building...
        </v-window-item>
        <v-window-item value="articles">
          Building...
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>