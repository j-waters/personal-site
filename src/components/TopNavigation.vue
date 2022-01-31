<template>
    <div id="top-nav">
        <router-link to="/"><span id="initials">JW</span></router-link>
        <span id="vertical-divider" />
        <MenuItems id="menu" />
    </div>
</template>

<script lang="ts" setup>
import MenuItems from "@/components/MenuItems.vue";
</script>

<style scoped>
#top-nav {
    font-family: "LT Tofino", sans-serif;
    color: #ffd700;
    position: sticky;
    font-size: 2em;
    top: 0;
    line-height: 1;
    height: 1.5em;
    z-index: 10;
    flex-shrink: 0;
    will-change: transform, opacity;
}

#initials {
    display: inline-block;
}

#vertical-divider {
    display: inline-block;
    height: 49%;
    width: 2px;
    background-color: #ffd700;
    margin: 0 5px;
}

#menu {
    vertical-align: text-top;
}

a {
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
