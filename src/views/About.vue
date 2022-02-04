<template>
    <div class="about has-text-primary">
        <div class="tile is-vertical">
            <div class="tile is-parent">
                <article
                    class="tile is-child box is-transparent has-text-primary"
                >
                    <h1 class="title is-1 has-text-primary mb-2">Hello!</h1>
                    <div class="buttons block is-justify-content-center">
                        <LinkButton to="https://github.com/j-waters" icon="fab fa-github"/>
                        <LinkButton to="mailto:james@jcwaters.co.uk" icon="fas fa-envelope"/>
                        <LinkButton to="https://www.linkedin.com/in/james-c-waters/" icon="fab fa-linkedin"/>
                    </div>
                    <div class="is-size-5">
                    <p class="mb-2">
                        My name's James, and I'm a fourth year computer science
                        student at Southampton University.
                    </p>
                    <p class="mb-2">
                        I interned for 3 summers at
                        <LinkButton to="https://netcraft.com"
                            >Netcraft</LinkButton
                        >
                        and worked part time as a frontend developer at
                        <LinkButton to="https://www.buckleconsulting.com/"
                            >Buckle Consulting</LinkButton
                        >
                        for a year.
                    </p>
                    <p>
                        See my
                        <LinkButton to="/projects">projects</LinkButton>
                        or my
                        <LinkButton to="https://github.com/j-waters"
                            >Github</LinkButton
                        >
                        to see most of my personal projects and some of my
                        coursework.
                    </p>
                    </div>
                </article>
            </div>
            <div class="tile">
                <div class="tile is-parent">
                    <article
                        class="tile is-child box is-transparent has-text-primary"
                    >
                        <h2 class="heading is-size-5">Proficient</h2>
                        <div class="tags is-justify-content-center">
                            <ClickableTagComponent
                                v-for="tag in proficient"
                                :key="tag.id"
                                :tag="tag"
                            />
                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article
                        class="tile is-child box is-transparent has-text-primary"
                    >
                        <h2 class="heading is-size-5">Familiar</h2>
                        <div class="tags is-justify-content-center">
                            <ClickableTagComponent
                                v-for="tag in familiar"
                                :key="tag.id"
                                :tag="tag"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Familiarity, useTagsStore } from "@/store/tags";
import { computed } from "vue";
import TagComponent from "@/components/TagComponent.vue";
import { useProjectsStore } from "@/store/projects";
import ClickableTagComponent from "@/components/ClickableTagComponent.vue";
import LinkButton from "@/components/LinkButton.vue";

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

.title {
    font-size: 5rem;
}

.box.is-transparent {
    background-color: transparent;
    //backdrop-filter: blur(1.5px);
    padding: .75rem;
}
</style>
