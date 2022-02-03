<template>
    <div class="block card is-horizontal">
        <div class="card-image is-flex-grow-3">
            <figure class="image">
                <img :src="project.media.cover" />
            </figure>
        </div>
        <div class="card-content is-flex-grow-5">
            <div class="media mb-2">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="project.media.icon" />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ project.title }}</p>
                    <p class="subtitle is-6">
                        {{ project.subtitle }} •
                        <time :datetime="project.date.getFullYear()">{{
                            project.date.getFullYear()
                        }}</time>
                    </p>
                </div>
            </div>

            <div class="content">
                <div class="tags mb-1">
                    <TagComponent
                        v-for="tagId in project.tags"
                        :key="tagId"
                        :tag-id="tagId"
                    />
                </div>
                <p>{{ project.subtitle }}</p>

                <div class="buttons">
                    <a
                        v-if="project.github"
                        :href="project.github"
                        class="button"
                        target="_blank"
                    >
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                            <span class="is-link">Github</span>
                            <span class="icon">
                                <i class="fas fa-external-link-alt"></i>
                            </span>
                        </span>
                    </a>

                    <a
                        v-if="project.website"
                        :href="project.website"
                        class="button"
                        target="_blank"
                    >
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-globe"></i>
                            </span>
                            <span class="is-link">Website</span>
                            <span class="icon">
                                <i class="fas fa-external-link-alt"></i>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProjectLinks from "@/components/ProjectLinks.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import TagComponent from "@/components/TagComponent.vue";
import { ProjectItem } from "@/store/projects";

const props = defineProps<{ project: ProjectItem }>();
</script>

<style lang="scss" scoped>
@import "~@/colours.scss";

.link {
    border-bottom: solid 1px black;
}

$shadow-multiplier: 3;

.card {
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, calc(0.1 *
                            $shadow-multiplier)),
            0 0px 0 1px rgba($scheme-invert, calc(0.02 * $shadow-multiplier));
    }
}
</style>
