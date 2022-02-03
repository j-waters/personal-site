<template>
    <div id="root" :class="{ before }">
        <BackgroundParticles id="particles-home"/>
        <section class="hero is-fullheight">
            <div class="hero-body is-justify-content-space-around">
                <HomeNavigation />
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import HomeNavigation from "@/components/HomeNavigation.vue";
import BackgroundParticles from "@/components/BackgroundParticles.vue";
import { nextTick, onMounted, ref } from "vue";

const before = ref(true);

onMounted(() => nextTick(() => (before.value = false)));
</script>

<style lang="scss" scoped>
#root {
    background: rgb(2, 0, 36);
    background: linear-gradient(rgba(46, 64, 87, 1) 0%, rgba(2, 0, 36, 1) 80%);
    opacity: 1;
    transition: opacity 1.5s;
    min-height: 100vh;
    z-index: -1;

    &.before {
        opacity: 0;
    }
}
</style>
