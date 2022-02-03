<template>
    <transition
        :name="verticalTransition"
        @before-enter="toggleBodyScroll(true)"
        @after-enter="toggleBodyScroll(false)"
    >
        <div class="container is-max-desktop" v-if="notHome">
            <TopNavigation />
            <router-view v-slot="{ Component, route }">
                <transition
                    :name="horizontalTransition"

                >
                    <section
                        class="hero is-fullheight-with-navbar"
                        :key="route.path"
                    >
                        <div
                            class="hero-body p-0"
                            :class="{
                                'page-fullheight': route.meta.fullHeight,
                            }"
                        >
                            <div class="box" :class="{'p-0': route.meta.noPadding}">
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
import { indexFromPath } from "@/helpers/indexFromPath";

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

        if (to.meta.childTo == from.name) {
            horizontalTransition.value = "slide-up-over"
            console.log("up")
            return
        }
        if (from.meta.childTo == to.name) {
            horizontalTransition.value = "slide-down-over"
            console.log("down")
            return
        }

        const fromIndex = indexFromPath(from.path)
        const toIndex = indexFromPath(to.path)
        console.log(fromIndex, toIndex)
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
.page-fullheight {
    align-items: flex-start !important;
    .box {
        min-height: calc(100vh - #{3.25rem + 1.5rem});
    }
}

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

@each $direction in ("up", "down") {
    .slide-#{$direction}-over-leave-active,
    .slide-#{$direction}-over-enter-active {
        transition: 1s;
        position: absolute;
        top: 3.25rem;
        bottom: 0;
        left: 0;
        right: 0;
    }

}

.slide-down-over-leave-active,
.slide-up-over-enter-active,
{
    z-index: 100;
}
.slide-up-over-enter-from {
    transform: translateY(100%);
}


.slide-down-over-leave-to {
    transform: translateY(100%);
}

</style>
