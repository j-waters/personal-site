<template>
    <a v-if="isOutbound" :href="to" :class="classes">
        <span class="icon-text is-align-items-center">
            <span class="icon is-large" v-if="icon">
                <i class="fa-lg" :class="icon"></i>
            </span>
            <span v-if="$slots.default"><slot /></span>
        </span>
    </a>
    <router-link v-else :to="to" :class="classes">
        <slot />
    </router-link>
</template>

<script lang="ts" setup>
import { RouteLocationRaw, useRouter } from "vue-router";
import { computed } from "vue";

const props = defineProps<{ to: RouteLocationRaw; icon?: string }>();

const isOutbound = computed(
    () =>
        typeof props.to === "string" &&
        (props.to.startsWith("http") || props.to.startsWith("mailto"))
);

const classes = computed(
    () =>
        `button is-primary is-outlined ${props.icon ? "has-icon" : "is-size-4"}`
);
</script>

<style lang="scss" scoped>
a {
    vertical-align: middle;
}

.button:not(.has-icon) {
    $x-padding-scale: 0.3;
    $y-padding-scale: 0.5;
    padding-bottom: calc((0.5em * $y-padding-scale - 1px));
    padding-left: 1em * $x-padding-scale;
    padding-right: 1em * $x-padding-scale;
    padding-top: calc(0.5em * $y-padding-scale - 1px);
    line-height: 1;
    height: fit-content;
    margin-top: 3px;
    margin-bottom: 3px;
}
</style>
