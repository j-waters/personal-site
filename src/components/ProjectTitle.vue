<template>
    <div class="title">
        <h2>
            <project-links :data="data" :visible="!reverse" />
            {{ data.name }}
            <project-links :data="data" :visible="reverse" />
        </h2>
        <h5 class="subtitle">{{ data.subtitle }}</h5>
    </div>
</template>

<script lang="ts" setup>
import ProjectLinks from "@/components/ProjectLinks.vue";
const props = defineProps<{ data: Record<any, any>; reverse: boolean }>();
</script>

<style scoped>
.subtitle {
    color: darkgrey;
    font-size: 1.5em;
    font-style: italic;
    margin-block-start: 0;
    margin-block-end: 1.2em;
}

h2 {
    margin-block-end: 0;
    font-size: 2em;
}
</style>
