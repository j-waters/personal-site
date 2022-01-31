<template>
    <div id="nav" :class="{ hidden, showing, small, shrinking }">
        <div id="name">
            <div id="first-name">
                <div class="mask">
                    <span class="initial">J</span>
                    <span class="remainder-wrapper">
                        <span class="remainder">AMES</span>
                    </span>
                </div>
            </div>
            <div id="divider" />
            <div id="second-name">
                <div class="mask">
                    <span class="initial">W</span>
                    <span class="remainder-wrapper">
                        <span class="remainder">ATERS</span>
                    </span>
                </div>
            </div>
        </div>
        <div id="menu">
            <menu-items />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import MenuItems from "@/components/MenuItems.vue";

const hidden = ref(true);
const showing = ref(false);
const small = ref(false);
const shrinking = ref(false);
const timeout = ref(-1);
const started = ref(false);

function initial() {
    hidden.value = false;
    showing.value = true;
    shrinking.value = false;
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        showing.value = false;
    }, 2300);
}
function shrink() {
    small.value = true;
    shrinking.value = true;
    showing.value = false;
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        shrinking.value = false;
    }, 2300);
}
function grow() {
    small.value = false;
    shrinking.value = true;
    showing.value = false;
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        shrinking.value = false;
    }, 2300);
}

onMounted(() => setTimeout(() => initial(), 500));
</script>

<style scoped lang="scss">
$shrink-transition-duration: 2s;

#nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "LT Tofino", sans-serif;
    text-align: center;
    color: #ffd700;
    will-change: top, left, transform;
    font-size: 30px;

    &.small {
        top: 10px;
        left: 10px;
        transform: translate(0, 0);
    }

    &.shrinking {
        transition: top, left, transform;
        transition-duration: $shrink-transition-duration;
    }
}

#name {
    font-weight: 500;
    line-height: 0.9em;
    font-size: 2em;
    -webkit-font-smoothing: antialiased;
    will-change: transform;
    white-space: nowrap;

    .small & {
        transform: scale(0.6) translate(-1.8em, -0.7em);
    }

    .shrinking & {
        transition: transform $shrink-transition-duration;
    }
}

.mask {
    overflow: hidden;
}

#first-name {
    .hidden & {
        .initial,
        .remainder {
            transform: translateY(100%);
        }
    }

    .showing & {
        .initial,
        .remainder {
            transition: transform 0.5s 0.3s;
        }
    }
}

#second-name {
    will-change: transform;

    .hidden & {
        .initial,
        .remainder {
            transform: translateY(-100%);
        }
    }

    .showing & {
        .initial,
        .remainder {
            transition: transform 0.5s 0.5s;
        }
    }

    .small & {
        transform: translate(0.8em, -0.9em);
    }

    .shrinking & {
        transition: transform $shrink-transition-duration;
    }
}

.initial {
    display: inline-block;
}

.remainder-wrapper {
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}

.remainder {
    display: inline-block;
    will-change: transform, opacity;

    .small & {
        transform: translateX(-100%);
        opacity: 0;
    }

    .shrinking & {
        transition: transform, opacity;
        transition-duration: $shrink-transition-duration;
    }
}

#divider {
    height: 1.8px;
    width: 100%;
    background: #ffd700;
    transform-origin: 100%;
    position: absolute;
    will-change: transform;
    transform: scaleX(0.9999);

    .hidden & {
        transform: scaleX(0);
    }

    .showing & {
        transition: transform 0.5s;
        transform-origin: 50%;
    }

    .small & {
        transform: translate(-2.1em, -0.05em) rotate(90deg) scaleX(0.18);
    }

    .shrinking & {
        transition: transform $shrink-transition-duration;
    }
}

#menu {
    line-height: 1em;
    will-change: transform;

    .hidden & ::v-deep a {
        opacity: 0;
    }

    @for $i from 1 through 3 {
        .showing & ::v-deep a:nth-child(#{$i}) {
            transition: all 0.5s #{0.55 + $i * 0.25}s ease-in;
        }
    }

    .small & {
        transform: translate(0.9em, -3.8em);
    }

    .shrinking & {
        transition: transform $shrink-transition-duration;
    }
}

@media screen and (min-width: 320px) {
    #nav {
        font-size: calc(30px + 40 * ((100vw - 320px) / 1600));
    }
}
</style>
