<template>
    <div class="portfolio">
        <p class="block">
            A selection of the projects I've worked on over the years. Filter by
            technology
        </p>
        <VueMultiselect
            v-model="filters"
            :options="tags"
            :multiple="true"
            track-by="id"
            label="name"
            class="block"
        >
            <template v-slot:option="props"
                ><Tag :tag="props.option"
            /></template>
            <template v-slot:tag="props">
                <Tag
                    :tag="props.option"
                    :deletable="true"
                    @delete="props.remove(props.option)"
                />
            </template>
        </VueMultiselect>

        <Project
            v-for="project in projects"
            :key="project.name"
            :project="project"
        />
    </div>
</template>

<script lang="ts" setup>
import VueMultiselect from "vue-multiselect";
import { computed, ref } from "vue";
import Tag from "@/components/Tag.vue";
import Project from "@/components/Project.vue";
import { useProjectsStore } from "@/store/projects";
import { useTagsStore } from "@/store/tags";

const projectsStore = useProjectsStore();
projectsStore.loadAll();

const projects = computed(() => projectsStore.projects);

const tagsStore = useTagsStore();

const tags = computed(() => tagsStore.tags);

const filters = ref();
</script>

<style lang="scss" scoped>
@import "~vue-multiselect/dist/vue-multiselect.css";
</style>
