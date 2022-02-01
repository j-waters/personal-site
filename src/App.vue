<template>
    <transition
        :name="verticalTransition"
        @before-enter="toggleBodyScroll(true)"
        @after-enter="toggleBodyScroll(false)"
    >
        <div class="container" v-if="notHome">
            <TopNavigation />
            <router-view v-slot="{ Component, route }">
                <transition
                    :name="horizontalTransition"
                    @before-enter="toggleBodyScroll(true)"
                    @after-enter="toggleBodyScroll(false)"
                >
                    <section
                        class="hero is-fullheight-with-navbar"
                        :key="route.path"
                    >
                        <div class="hero-body p-0">
                            <div class="box">
                                <component :is="Component" />
                            </div>
                        </div>
                    </section>
                </transition>
            </router-view>
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
import menuItems from "@/data/menuItems";

const route = useRoute();

const verticalTransition = computed(() =>
    isFirstNavigation.value
        ? "fade"
        : route.name == "Home"
        ? "slide-down"
        : "slide-up"
);

const isFirstNavigation = ref(true);

const horizontalTransition = ref("");

watch(
    () => ({
        ...route,
    }),
    (to, from) => {
        if (from.name != undefined) {
            isFirstNavigation.value = false;
        }

        const fromIndex = menuItems.findIndex(
            (value) => value.route == from.path
        );
        const toIndex = menuItems.findIndex((value) => value.route == to.path);
        console.log(fromIndex, toIndex);
        if (fromIndex > toIndex) {
            horizontalTransition.value = "slide-right";
        } else {
            horizontalTransition.value = "slide-left";
        }
    }
);

const notHome = computed(() => route.name && route.name !== "Home");

function toggleBodyScroll(disabled: boolean) {
    const body = document.querySelector("html");
    if (body) body.style.overflowY = disabled ? "hidden" : "overlay";
}
</script>

<style lang="scss">
@import "style/mixins";
body {
    margin: 0;
    min-height: 100vh;
    background-color: rgba(2, 0, 36, 1);
}

html {
    @include scrollbars();
}
</style>

<style lang="scss" scoped>
.box {
    width: 100%;
}

@each $direction in ("up", "down") {
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

@each $direction in ("left", "right") {
    .slide-#{$direction}-leave-active,
    .slide-#{$direction}-enter-active {
        transition: 1s;
        position: absolute;
        width: 100%;
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

.slide-left-enter-from,
.slide-right-leave-to {
    transform: translateX(100vw);
}
.slide-left-leave-to,
.slide-right-enter-from {
    transform: translateX(-100vw);
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
