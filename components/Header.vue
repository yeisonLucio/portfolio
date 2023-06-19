<script setup>
</script>
<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div id="img-header-container">
                    <v-row id="blur-container">
                        <v-col cols="6">
                            <v-img height="350" src="/img/profile.png" alt="John"></v-img>
                        </v-col>
                        <v-col cols="6" align-self="center">
                            <div class="text-white">
                                <h3 class="text-h2">¡Hola! soy</h3>
                                <h1 class="text-h1">
                                    <span class="text-red">&lt;</span>
                                    Yesion Lucio
                                    <span class="text-red">/&gt;</span>
                                </h1>
                                <h2 class="text-h3 text-grey">> Software Engineer</h2>
                                <div class="mt-4">
                                    <v-btn color='teal' prepend-icon="mdi-email" :rounded="true">
                                        Contactar
                                    </v-btn>
                                    <v-btn color='blue' class="ml-5" prepend-icon="mdi-download" :rounded="true">
                                        Descargar CV
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<style>
#img-header-container {
    background-image: url("/img/profile_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;

}

#blur-container {
    backdrop-filter: blur(4px);
}

</style>