<template>
    <Particles :id="id" :options="options" class="particles" />
</template>

<script lang="ts" setup>
import { IOptions, RecursivePartial } from "tsparticles";

defineProps<{id: string}>()

const options: RecursivePartial<IOptions> = {
    fpsLimit: 60,
    particles: {
        color: {
            value: "#F1BF98",
        },
        links: {
            color: "#F1BF98",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 0.5,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.05,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 150,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 2,
        },
    },
    detectRetina: true,
};
</script>

<style scoped>
.particles {
    width: 100vw;
    height: 100vh;
    position: absolute;
}
</style>
