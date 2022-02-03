<template>
    <div class="projects">
        <div class="container is-max-desktop block">
            <h1 class="title is-1 has-text-centered">Projects</h1>
            <p class="block has-text-centered">
                A selection of the projects I've worked on over the years.
                Filter by
                <TagComponent
                    :tag="{ type: 'technology', name: 'Technology' }"
                />,
                <TagComponent
                    :tag="{
                        type: 'reason',
                        name: 'Context',
                        icon: 'fa-university',
                    }"
                />
                and
                <TagComponent
                    :tag="{
                        type: 'platform',
                        name: 'Platform',
                        icon: 'fa-desktop',
                    }"
                />:
            </p>
            <VueMultiselect
                v-model="filterTags"
                :options="tags"
                :multiple="true"
                track-by="id"
                label="name"
                class="block"
                placeholder="Search projects by tag"
            >
                <template v-slot:option="props"
                    ><TagComponent :tag="props.option"
                /></template>
                <template v-slot:tag="props">
                    <TagComponent
                        :tag="props.option"
                        :deletable="true"
                        @delete="props.remove(props.option)"
                        class="mr-2 mb-2"
                    />
                </template>
            </VueMultiselect>
        </div>

        <Project
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
        />
    </div>
</template>

<script lang="ts" setup>
import VueMultiselect from "vue-multiselect";
import { computed, ref } from "vue";
import TagComponent from "@/components/TagComponent.vue";
import Project from "@/components/Project.vue";
import { ProjectItem, useProjectsStore } from "@/store/projects";
import { Tag, useTagsStore } from "@/store/tags";

const filterTags = ref<Tag[]>([]);
const filterTagIds = computed(() => filterTags.value?.map((tag) => tag.id));

const projectsStore = useProjectsStore();
projectsStore.loadAll();

function getProjectScore(project: ProjectItem): number {
    const tagCount =
        filterTags.value.length > 0
            ? project.tags.reduce(
                  (acc, tagId) =>
                      acc + (filterTagIds.value.includes(tagId) ? 1 : 0),
                  0
              )
            : 1;
    if (tagCount == 0) {
        return 0;
    }
    const dateWeight = project.date.getTime() / 2000000000000;
    return tagCount + dateWeight;
}

const filteredProjects = computed(() =>
    projectsStore.projects
        .filter((p) => getProjectScore(p) > 0)
        .sort((a, b) => getProjectScore(b) - getProjectScore(a))
);

const tagsStore = useTagsStore();

const tags = computed(() => tagsStore.tags);
</script>

<style lang="scss" scoped>
@import "~vue-multiselect/dist/vue-multiselect.css";

.search {
    max-width: 300px;
}
</style>
