<template>
    <Particles id="particles" :options="options" />
</template>

<script lang="ts">
    import { IOptions } from "tsparticles";
    export default {
        name: "BackgroundParticles",
        data() {
            return {
                options: {
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#F1BF98"
                        },
                        links: {
                            color: "#F1BF98",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 0.5
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.4,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 150
                        },
                        opacity: {
                            value: 0.7
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: true,
                            value: 2
                        }
                    },
                    detectRetina: true
                } as IOptions
            };
        }
    };
</script>

<style scoped>
    #particles {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
</style>
