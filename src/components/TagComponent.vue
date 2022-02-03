<template>
    <span class="tag is-rounded" :class="`is-${colour}`">
        <span class="icon-text">
            <span class="icon">
                <i class="fas" :class="icon"></i>
            </span>
            <span>{{ tagDetails.name }}</span>
        </span>

        <button
            v-if="deletable"
            class="delete is-small"
            @click="emit('delete')"
    /></span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Tag, TagID, useTagsStore } from "@/store/tags";

const props = defineProps<{ tag?: Tag; tagId?: TagID; deletable?: boolean }>();

const tagsStore = useTagsStore();

const emit = defineEmits<{
    (e: "delete"): void;
}>();

const tagDetails = computed(
    () => props.tag ?? tagsStore.tagMap.get(props.tagId!)
);

const colour = computed(() => {
    switch (tagDetails.value!.type) {
        case "platform":
            return "purple";
        case "reason":
            return "orange";
        case "technology":
            return "danger";
    }
    return "";
});

const icon = computed(() => {
    if (tagDetails.value!.icon) {
        return tagDetails.value!.icon;
    }
    switch (tagDetails.value!.type) {
        case "reason":
            return "orange";
        case "technology":
            return "fa-tools";
    }
    return "";
});
</script>

<style scoped></style>
