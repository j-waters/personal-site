<template>
    <div id="root" :class="{ before }">
        <BackgroundParticles />
        <div class="container">
            <TopNavigation v-if="notHome" />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import BackgroundParticles from "@/components/BackgroundParticles.vue";
import TopNavigation from "@/components/TopNavigation.vue";

const before = ref(false);

const route = useRoute();

const stopWatch = watch(route, route => {
    if (route.name == "Home") {
        nextTick(() => (before.value = false));
    } else {
        before.value = false;
    }
    stopWatch();
});

const notHome = computed(() => route.name && route.name !== "Home");
</script>

<style lang="scss">
body {
    margin: 0;
    min-height: 100vh;
    background-color: black;
}
</style>

<style lang="scss" scoped>
#root {
    background: rgb(2, 0, 36);
    background: linear-gradient(rgba(46, 64, 87, 1) 0%, rgba(2, 0, 36, 1) 80%);
    opacity: 1;
    transition: opacity 1.5s;

    &.before {
        opacity: 0;
    }
}
</style>
