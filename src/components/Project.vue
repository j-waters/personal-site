<template>
    <div class="block card is-horizontal">
        <div class="card-image is-flex-grow-3">
            <figure class="image">
                <img :src="project.media.cover" />
            </figure>
        </div>
        <div class="card-content is-flex-grow-5">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="project.media.icon" />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ project.title }}</p>
                    <p class="subtitle is-6">{{ project.subtitle }}</p>
                </div>
            </div>

            <div class="content">
                {{ project.subtitle }}
                <br />
                <time :datetime="project.date.getFullYear()">{{
                    project.date.getFullYear()
                }}</time>
                <div class="tags">
                    <Tag
                        v-for="tagId in project.tags"
                        :key="tagId"
                        :tag-id="tagId"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProjectLinks from "@/components/ProjectLinks.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import Tag from "@/components/Tag.vue";
import { ProjectItem } from "@/store/projects";

const props = defineProps<{ project: ProjectItem }>();
</script>

<style scoped></style>
