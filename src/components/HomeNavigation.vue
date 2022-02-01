<template>
    <div class="home-nav" :class="{ hidden }">
        <div class="name">
            <div class="mask">
                <div class="first-name">JAMES</div>
            </div>
            <div class="divider" />
            <div class="mask">
                <div class="second-name">WATERS</div>
            </div>
        </div>
        <div class="menu is-flex is-justify-content-space-evenly is-size-3">
            <menu-items />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import MenuItems from "@/components/MenuItems.vue";

const hidden = ref(true);

// function initial() {
//     hidden.value = false;
//     showing.value = true;
//     clearTimeout(timeout.value);
//     timeout.value = setTimeout(() => {
//         showing.value = false;
//     }, 2300);
// }
//
onMounted(() => setTimeout(() => (hidden.value = false), 500));
</script>

<style lang="scss" scoped>
.home-nav {
    text-align: center;
    color: #ffd700;
    font-size: 7rem;
}

.name {
    line-height: 1;
    white-space: nowrap;
}

.divider {
    height: 1.8px;
    width: 100%;
    background: #ffd700;
    transform-origin: 50%;
    transform: scaleX(0.9999);
    transition: transform 0.5s;
    .hidden & {
        transform: scaleX(0);
    }
}

.mask {
    overflow: hidden;
}

.first-name {
    transition: transform 0.5s 0.3s;

    .hidden & {
        transform: translateY(100%);
    }
}

.second-name {
    transition: transform 0.5s 0.3s;

    .hidden & {
        transform: translateY(100%);
    }
}

.second-name {
    transition: transform 0.5s 0.5s;

    .hidden & {
        transform: translateY(-100%);
    }
}

.menu {
    line-height: 1.5;
    .hidden & ::v-deep span {
        opacity: 0;
    }
    @for $i from 1 through 3 {
        ::v-deep span:nth-child(#{$i}) {
            transition: opacity 0.5s #{0.55 + $i * 0.25}s ease-in,
                transform 0.2s;
        }
    }
}
</style>
