<template>
    <span v-for="(item, i) in menuItems" :key="item.route" :class="extraClass">
        <router-link
            :to="item.route"
            class="hover-underline-animation"
            :class="{ 'router-link-active': indexFromPath(currentPath) === i }"
            >{{ item.title }}</router-link
        >
    </span>
</template>

<script lang="ts" setup>
import menuItems from "@/data/menuItems";
import { indexFromPath } from "@/helpers/indexFromPath";
import { computed } from "vue";
import { useRoute } from "vue-router";

defineProps<{ extraClass?: string }>();

const currentPath = computed(() => useRoute().path);
</script>

<style lang="scss" scoped>
@import "~@/colours.scss";
@import "~@/style/mixins.scss";

a {
    cursor: pointer;
    pointer-events: initial;
    transition: transform 0.2s;
    display: inline-block;

    @include hover-underline-animation($primary);

    &:link {
        text-decoration: inherit;
        color: inherit;
    }

    &:visited {
        text-decoration: inherit;
        color: inherit;
    }

    &.router-link-active {
        font-weight: bold;
    }
}
</style>
