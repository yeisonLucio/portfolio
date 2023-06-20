<script setup>
const goLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yeisonlucio1266/", "_blank");
};

const downloadCV = () => {
    let url = '/pdf/yeison-lucio-cv.pdf';

    let link = document.createElement('a');
    link.href = url;
    link.download = 'yeison-lucio-cv.pdf';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};
</script>
<template>
    <div>
        <v-row>
            <v-col cols="12" md="12">
                <div id="img-header-container">
                    <div id="row-container">
                        <v-row id="row-text">
                            <v-col cols="12" md="6" sm="12" lg="6">
                                <v-img height="350" src="/img/profile.png" alt="Profile"></v-img>
                            </v-col>
                            <v-col cols="12" sm="12" lg="6" md="6" align-self="center">
                                <div class="text-white d-flex justify-center align-center flex-column">
                                    <h3 class="text-h4 text-lg-h2 text-md-h2 text-sm-h2">¡Hola! soy</h3>
                                    <h1 class="text-h3 text-sm-h3 text-lg-h1 text-md-h1">
                                        <span class="text-red">&lt;</span>
                                        Yeison Lucio
                                        <span class="text-red">/&gt;</span>
                                    </h1>
                                    <h2 class="text-h4 text-sm-h4 text-md-h3 text-lg-h3text-grey">> Software Engineer</h2>
                                    <div class="mt-4">
                                        <v-btn @click="goLinkedIn()" color="blue-darken-2"
                                            prepend-icon="fa-brands fa-linkedin" :rounded="true">
                                            LinkedIn
                                        </v-btn>
                                        <v-btn @click="downloadCV()" color="teal" class="ml-5"
                                            prepend-icon="fa-solid fa-file-arrow-down" :rounded="true">
                                            Descargar CV
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
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

#row-container {
    background:rgba(18, 19, 55, 0.5);
}
</style>
