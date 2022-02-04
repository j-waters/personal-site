<template>
    <div class="card" :class="{ 'is-horizontal': mini }">
        <div class="card-image is-flex-grow-3">
            <figure class="image is-flex is-align-items-center">
                <img class="image-blur" :src="project.media.cover" />
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

            <div>
                <div class="tags mb-1">
                    <TagComponent
                        v-for="tagId in project.tags"
                        :key="tagId"
                        :tag-id="tagId"
                    />
                </div>

                <p class="mb-2" v-if="mini">
                    {{ project.summary }}.&nbsp;<router-link
                        :to="`/projects/${project.id}`"
                        class="is-underlined"
                        >Read more »</router-link
                    >
                </p>
                <p v-else class="content" v-html="project.content" />

                <div class="buttons">
                    <a
                        v-if="project.github"
                        :href="project.github"
                        class="button is-link"
                        target="_blank"
                        @click.stop
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
                        class="button is-link"
                        target="_blank"
                        @click.stop
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
                <router-link to="/projects" class="is-link" v-if="!mini"
                    >‹ Back to projects</router-link
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TagComponent from "@/components/TagComponent.vue";
import { ProjectItem } from "@/store/projects";

const props = defineProps<{ project: ProjectItem; mini: boolean }>();
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

.image {
    overflow: hidden;
}

.image-blur {
    position: absolute;
    --blur: 20px;
    --offset: calc(-1 * var(--blur));
    top: var(--offset, 0);
    left: var(--offset, 0);
    width: calc(100% - 2 * var(--offset, 0px));
    height: calc(100% - 2 * var(--offset, 0px));
    filter: blur(var(--blur));
    object-fit: cover;

    ~ img {
        z-index: 1;
    }
}

//// Add a pseudo element to keep the aspect ratio
//.image::after {
//    content: "";
//    display: block;
//    padding-bottom: calc(900% / 16);  // Define ratio here
//}

// Stretch the images over the container and keep them contained
//.image > * {
//    position: absolute;
//    top: var(--offset, 0);
//    left: var(--offset, 0);
//    width: calc(100% - 2 * var(--offset, 0px));
//    height: calc(100% - 2 * var(--offset, 0px));
//    object-fit: contain;
//}

// Blur the background image and cover the whole container
// Use the negative blur value as offset to prevent the blur
// from mixing with the document background color
//.img-blur {
//    --blur: 20px;
//    --offset: calc(-1 * var(--blur));
//    object-fit: cover;
//    filter: blur(var(--blur));
//}

.buttons .button {
    margin-bottom: 0;
}
</style>
