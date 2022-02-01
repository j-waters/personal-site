<template>
    <span v-for="item in menuItems" :key="item.route">
        <router-link
            :to="item.route"
            class="hover-underline-animation"
            :class="extraClass"
            >{{ item.title }}</router-link
        >
    </span>
</template>

<script lang="ts" setup>
import menuItems from "@/data/menuItems";

defineProps<{ extraClass?: string }>();
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
