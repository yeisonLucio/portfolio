<script setup>
const tab = ref('')
</script>
<template>
  <v-card color="transparent" class="mt-3" elevation="0">
    <v-tabs v-model="tab" color="white" bgColor="blue-grey-darken-1" alignTabs="center">
      <v-tab value="about">
        <v-icon start>mdi-information-outline</v-icon>
        Acerca de
      </v-tab>
      <v-tab value="experience">
        <v-icon start>mdi-briefcase-outline</v-icon>
        Experiencia
      </v-tab>
      <v-tab value="studies">
        <v-icon start>mdi-school-outline</v-icon>
        Estudios
      </v-tab>
      <v-tab value="projects">
        <v-icon start>mdi-file-code-outline</v-icon>
        Proyectos
      </v-tab>
      <v-tab value="articles">
        <v-icon start>mdi-file-document-multiple-outline</v-icon>
        Artículos
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="about">
          <About/>
        </v-window-item>

        <v-window-item value="experience">
          experience
        </v-window-item>
        <v-window-item value="studies">
          estudios
        </v-window-item>
        <v-window-item value="projects">
          proyectos
        </v-window-item>
        <v-window-item value="articles">
          Artículos
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>