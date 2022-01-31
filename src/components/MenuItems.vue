<template>
    <span>
        <router-link to="about">About</router-link>&thinsp;
        <router-link to="portfolio">Portfolio</router-link>&thinsp;
        <router-link to="contact">Contact</router-link>
    </span>
</template>

<script lang="ts" setup></script>

<style scoped>
a {
    font-size: 0.5em;
    cursor: pointer;
    pointer-events: initial;
}

a:link {
    text-decoration: inherit;
    color: inherit;
}

a:visited {
    text-decoration: inherit;
    color: inherit;
}
</style>
