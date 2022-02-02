<template>
    <span class="tag is-rounded"
        >{{ tagDetails.name
        }}<button
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
    () => props.tag ?? tagsStore.tagMap.get(props.tagId)
);
</script>

<style scoped></style>
