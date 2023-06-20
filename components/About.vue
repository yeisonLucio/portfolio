<script setup>
const skills = ref([
    { name: "Golang", img: "/img/skills/golang.png" },
    { name: "Laravel", img: "/img/skills/laravel.png" },
    { name: "Node.js", img: "/img/skills/nodejs.png" },
    { name: "Vue.js", img: "/img/skills/vuejs.png" },
    { name: "AWS Lambda", img: "/img/skills/aws-lambda.png" },
    { name: "AWS SQS", img: "/img/skills/aws-sqs.png" },
    { name: "AWS DynamoDB", img: "/img/skills/aws-dynamodb.png" },
    { name: "MySQL", img: "/img/skills/mysql.png" },
    { name: "Serverless Framework", img: "/img/skills/serverless.png" },
    { name: "Docker", img: "/img/skills/docker.png" },
])

</script>
<template>
    <v-row class="text-white mt-4">
        <v-col cols="12" sm="12" md="6" lg="6">
            <article class="text-justify text-subtitle-1" id="profile">
                <p class="mb-3">
                    Desarrollador backend con experiencia en el desarrollo de microservicios utilizando Golang y
                    Laravel. He trabajado con servicios de AWS y he utilizado Pulumi para generar infraestructura como
                    código. También
                    tengo habilidades en frontend y actualmente utilizo Vue.js.
                </p>
                <p class="mb-3">
                    En mi experiencia laboral, he sido capaz de desarrollar soluciones tecnológicas que satisfagan las
                    necesidades específicas de los clientes. He trabajado en el desarrollo de APIs, creación de
                    arquitecturas escalables y seguras, e implementación de sistemas complejos. Además, he utilizado Flutter
                    y Node.js en proyectos personales para mejorar mis habilidades de programación.
                </p>
                <p class="mb-3">
                    Mi enfoque principal es construir aplicaciones escalables, seguras y de alta calidad utilizando las
                    mejores prácticas de la industria y la tecnología más actualizada. Me gusta mantenerme actualizado en
                    las últimas tecnologías y tendencias del mercado, y aplicarlas en mi trabajo para mejorar la eficiencia
                    y la calidad del producto final.
                </p>
                <p>
                    Si estás buscando a alguien para unirse a tu equipo de desarrollo o tienes un proyecto que necesita un
                    experto en backend, estaré encantado de hablar contigo sobre cómo puedo ayudar. ¡No dudes en
                    contactarme!
                </p>
            </article>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
            <v-row>
                <v-col>
                    <div class="d-flex align-center justify-center">
                        <h2 class="text-h4">Habilidades</h2>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-5 mt-lg-10 mb-5">
                <v-col class="d-flex align-center justify-center">
                    <v-sheet class="mx-auto bg-transparent skill-container">
                        <v-slide-group show-arrows>
                            <template #next>
                                <v-icon size="20" si>fas fa-chevron-right</v-icon>
                            </template>
                            <template #prev>
                                <v-icon size="20">fas fa-chevron-left</v-icon>
                            </template>
                            <v-slide-group-item v-for="skill in skills" :key="skill.name">
                                <div class="d-flex align-center justify-center flex-column">
                                    <v-avatar size="120" class="mr-4 pa-3 avatar">
                                        <v-img :src="skill.img" :alt="skill.name"></v-img>
                                    </v-avatar>
                                    <h6 class="text-subtitle-1">{{ skill.name }}</h6>
                                </div>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style>
#profile {
    background-color: rgba(182, 217, 251, 0.2);
    padding: 2rem;
    border-radius: 5px;
}

.skill-container {
    max-width: 600px;
}


/* xs */
@media (max-width: 599px) {
    .skill-container {
        max-width: 350px;
    }
}

/* sm */
@media (min-width: 600px) and (max-width: 959px) {
    .skill-container {
        max-width: 700px;
    }
}

/* md */
@media (min-width: 960px) and (max-width: 1263px) {
    .skill-container {
        max-width: 400px;
    }
}

/* lg */
@media (min-width: 1264px) and (max-width: 1904px) {
    .skill-container {
        max-width: 600px;
    }
}
</style>