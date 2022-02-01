<template>
    <transition
        :name="verticalTransition"
        @before-enter="toggleBodyScroll(true)"
        @after-enter="toggleBodyScroll(false)"
    >
        <div class="container" v-if="notHome">
            <TopNavigation />
            <section class="hero is-fullheight-with-navbar">
                <div class="hero-body">
                    <div class="box">
                        <router-view />
                    </div>
                </div>
            </section>
        </div>
        <div v-else>
            <router-view />
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import BackgroundParticles from "@/components/BackgroundParticles.vue";
import TopNavigation from "@/components/TopNavigation.vue";

const route = useRoute();

const verticalTransition = computed(() =>
    isFirstNavigation.value
        ? "fade"
        : route.name == "Home"
        ? "slide-down"
        : "slide-up"
);

const navigations = ref(0);
const isFirstNavigation = computed(() => navigations.value <= 1);

watch(route, () => {
    navigations.value += 1;
});

const notHome = computed(() => route.name && route.name !== "Home");

function toggleBodyScroll(disabled: boolean) {
    const body = document.querySelector("html");
    if (body) body.style.overflowY = disabled ? "hidden" : "auto";
}
</script>

<style lang="scss">
body {
    margin: 0;
    min-height: 100vh;
    background-color: rgba(2, 0, 36, 1);
}
</style>

<style lang="scss" scoped>
@each $direction in ("left", "right", "up", "down") {
    .slide-#{$direction}-leave-active,
    .slide-#{$direction}-enter-active {
        transition: 1s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.slide-up-enter-from,
.slide-down-leave-to {
    transform: translateY(100%);
}
.slide-up-leave-to,
.slide-down-enter-from {
    transform: translateY(-100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
