<template>
    <nav
        class="navbar is-transparent is-size-3"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <router-link to="/"
                    ><span class="initials">JW</span></router-link
                >
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <MenuItems :extra-class="'navbar-item'" />
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import MenuItems from "@/components/MenuItems.vue";
</script>

<style lang="scss" scoped>
.is-transparent {
    background-color: transparent;
}

.navbar {
    color: #ffd700;
}
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
