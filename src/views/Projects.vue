<template>
    <div class="box projects">
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
            <div class="block is-flex" style="gap: 1rem">
                <VueMultiselect
                    v-model="filterTags"
                    :options="tags"
                    :multiple="true"
                    track-by="id"
                    label="name"
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
                <div class="is-block">
                    <div
                        class="tags has-addons is-flex-wrap-nowrap is-clickable toggle-switch"
                        @click="isOr = !isOr"
                    >
                        <span class="tag" :class="{ 'is-success': isOr }"
                            >OR</span
                        >
                        <span class="tag" :class="{ 'is-success': !isOr }"
                            >AND</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <router-link
            v-for="project in filteredProjects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="is-clickable block is-block"
        >
            <Project :project="project" :mini="true" />
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import VueMultiselect from "vue-multiselect";
import { computed, reactive, ref, watch } from "vue";
import TagComponent from "@/components/TagComponent.vue";
import Project from "@/components/Project.vue";
import { ProjectItem, useProjectsStore } from "@/store/projects";
import { isTag, Tag, TagID, useTagsStore } from "@/store/tags";
import { useRoute, useRouter } from "vue-router";

const tagsStore = useTagsStore();

const router = useRouter();
const route = useRoute();

function updateQuery(update: Record<string, any>) {
    router.replace({ query: { ...route.query, ...update } });
}

const isOr = computed({
    get() {
        return !route.query.and;
    },
    set(isOr: boolean) {
        updateQuery({ and: isOr ? undefined : 1 });
    },
});

const filterTagIds = computed({
    set(tagIds: TagID[]) {
        updateQuery({ tags: tagIds?.join(",") || undefined });
    },
    get(): TagID[] {
        const tagsString = route.query.tags as string | undefined;
        return tagsString?.split(",").filter(isTag) ?? [];
    },
});

const filterTags = computed({
    get(): Tag[] {
        return tagsStore.tagsFromIds(filterTagIds.value);
    },
    set(tags: Tag[]) {
        filterTagIds.value = tags.map((tag) => tag.id);
    },
});

const projectsStore = useProjectsStore();
projectsStore.loadAll();

function getProjectScore(project: ProjectItem): number {
    const minimumTagCount = isOr.value ? 1 : filterTags.value.length;
    const tagCount =
        filterTags.value.length > 0
            ? project.tags.reduce(
                  (acc, tagId) =>
                      acc + (filterTagIds.value.includes(tagId) ? 1 : 0),
                  0
              )
            : 1;
    if (tagCount < minimumTagCount) {
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

const tags = computed(() => tagsStore.tags);
</script>

<style lang="scss" scoped>
@import "~@/colours";

.search {
    max-width: 300px;
}

.toggle-switch {
    height: 100%;
    position: relative;

    .tag {
        height: 100%;
        margin-bottom: 0;
        transition: color, background-color;
        transition-duration: 0.5s;
    }
}
</style>
