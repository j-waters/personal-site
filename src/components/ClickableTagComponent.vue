<template>
    <TagComponent
        :data-tooltip="tooltip"
        :tag="tag"
        class="has-tooltip-arrow has-tooltip-bottom has-tooltip-multiline"
        :class="{ 'is-clickable': clickable }"
        @click="goto()"
    />
</template>

<script lang="ts" setup>
import { Tag } from "@/store/tags";
import TagComponent from "@/components/TagComponent.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ tag: Tag }>();

const clickable = computed(() => props.tag.count > 0);

const tooltip = computed(() =>
    clickable.value
        ? `Click to see the ${props.tag.count} project${
              props.tag.count == 1 ? "" : "s"
          } in which this technology was used`
        : null
);

const router = useRouter();

function goto() {
    router.push({ name: "Projects", query: { tags: props.tag.id } });
}
</script>

<style lang="scss" scoped>
[data-tooltip] {
    border-bottom-width: 0 !important;
}

.is-clickable:hover {
    text-decoration: underline;
}
</style>
