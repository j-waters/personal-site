<template>
    <router-link
        v-for="item in items"
        :to="item.route"
        :key="item.route"
        :class="extraClass"
        >{{ item.title }}</router-link
    >
</template>

<script lang="ts" setup>
const props = defineProps<{ extraClass?: string }>();

const items = [
    { title: "About", route: "about" },
    { title: "Portfolio", route: "portfolio" },
    { title: "Contact", route: "contact" },
];
</script>

<style lang="scss" scoped>
@import "~@/colours.scss";

a {
    cursor: pointer;
    pointer-events: initial;
    transition: transform 0.2s;
    display: inline-block;

    &:link {
        text-decoration: inherit;
        color: inherit;
    }

    &:visited {
        text-decoration: inherit;
        color: inherit;
    }

    &:hover {
        transform: scale(1.025);
        color: $menu-hover;
    }
}
</style>
