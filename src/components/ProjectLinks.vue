<template>
    <span>
        <a
            v-if="data.github && visible"
            :href="data.github"
            class="plink"
            target="_blank"
            title="View on Github"
            ><img alt="Github" class="plink" src="img/github.svg"
        /></a>
        <a
            v-if="data.website && visible"
            :href="data.website"
            class="plink"
            target="_blank"
            title="Project Page"
            ><img alt="Website" class="plink" src="img/site.svg"
        /></a>
    </span>
</template>

<script lang="ts" setup>
const props = defineProps<{ data: Record<any, any>; visible: boolean }>();
</script>

<style scoped>
.plink {
    height: 0.8em;
    opacity: 0.5;
    line-height: 0.8em;
    vertical-align: baseline;
}
</style>
