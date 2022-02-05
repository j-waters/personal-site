<template>
    <div class="container is-max-desktop">
        <nav
            class="navbar is-flex is-transparent is-size-5 has-text-primary is-justify-content-space-between"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="is-align-items-center is-flex">
                <router-link to="/" class="navbar-item draw-border">
                    <span class="initials is-size-3 has-text-primary">JW</span>
                </router-link>
                <div class="divider"></div>
            </div>

            <div class="is-flex is-align-items-center">
                <MenuItems extra-class="navbar-item" />
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import MenuItems from "@/components/MenuItems.vue";
</script>

<style lang="scss" scoped>
@import "~@/style/mixins.scss";
@import "~@/colours.scss";
@import "~bulma/sass/utilities/mixins";

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

.divider {
    height: 60%;
    width: 2px;
    background-color: #ffd700;

    @include from(350px) {
        display: none;
    }
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
