<template>
    <nav
        class="navbar is-transparent is-size-5 has-text-primary"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="container">
            <div class="navbar-brand is-align-items-center">
                <router-link to="/">
                    <span
                        class="navbar-item initials is-size-4 has-text-primary draw-border"
                        >JW</span
                    >
                </router-link>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end is-align-items-center">
                    <MenuItems extra-class="navbar-item" />
                </div>
            </div>
        </div>
    </nav>
    <div class="is-primary" style="height: 5px; width: 100%"></div>
</template>

<script lang="ts" setup>
import MenuItems from "@/components/MenuItems.vue";
</script>

<style lang="scss" scoped>
@import "~@/style/mixins.scss";
@import "~@/colours.scss";

.is-transparent {
    background-color: transparent;
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

.navbar-item {
    line-height: 1;
}

.draw-border {
    @include btn-border-drawing(transparent, $primary, 2px, bottom, right);
}
</style>
