<template>
    <div class="about">
        <h1 class="title is-1">Hello!</h1>
        <p class="block">
            My name's James, and I'm a fourth year computer science student at
            Southampton University
        </p>
        <p class="block">
            I interned for 3 summers at
            <a class="is-link" href="https://netcraft.com">Netcraft</a>, and worked part time as
            a frontend developer at
            <a class="is-link" href="https://www.buckleconsulting.com/">Buckle Consulting</a>
            for a year
        </p>
        <p class="block">
            See my <router-link to="/projects" class="button is-small is-info">projects</router-link> or my
            <a href="https://github.com/j-waters">Github</a>
            to see most of my personal projects and some of my coursework
        </p>

        <h2 class="heading is-size-5">Proficient</h2>
        <div class="tags is-justify-content-center">
            <ClickableTagComponent
                v-for="tag in proficient"
                :key="tag.id"
                :tag="tag"
            />
        </div>

        <h2 class="heading is-size-5">Familiar</h2>
        <div class="tags is-justify-content-center">
            <ClickableTagComponent
                v-for="tag in familiar"
                :key="tag.id"
                :tag="tag"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Familiarity, useTagsStore } from "@/store/tags";
import { computed } from "vue";
import TagComponent from "@/components/TagComponent.vue";
import { useProjectsStore } from "@/store/projects";
import ClickableTagComponent from "@/components/ClickableTagComponent.vue";

const projectsStore = useProjectsStore();
projectsStore.loadAll();

const tagsStore = useTagsStore();

const proficient = computed(() =>
    tagsStore.tags.filter((tag) => tag.familiarity == Familiarity.HIGH)
);
const familiar = computed(() =>
    tagsStore.tags.filter((tag) => tag.familiarity == Familiarity.MEDIUM)
);
</script>

<style scoped lang="scss">
.about {
    text-align: center;
}

.skill:not(:last-child)::after {
    content: " • ";
}

h4 {
    /*margin-bottom: ;*/
    margin-block-end: 0;
}

a:not(.button) {
    text-decoration: underline;
}
</style>
