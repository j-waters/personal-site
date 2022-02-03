<template>
    <!--    <teleport to="#app">-->
    <!--        <div class="modal is-active">-->
    <!--            <div class="modal-background" @click="router.push('/projects')"></div>-->
    <!--            <div class="modal-content">-->
    <div class="box p-0">
        <Project v-if="project" :project="project" :mini="false" />
    </div>
    <!--            </div>-->
    <!--            <button class="modal-close is-large" aria-label="close"></button>-->
    <!--        </div>-->
    <!--    </teleport>-->
</template>

<script lang="ts" setup>
import Project from "@/components/Project.vue";
import { computed } from "vue";
import { useProjectsStore } from "@/store/projects";
import { useRouter } from "vue-router";

const props = defineProps<{ id: string }>();

const projectsStore = useProjectsStore();
projectsStore.load(props.id);

const project = computed(() => projectsStore.projectMap.get(props.id));

const router = useRouter();
</script>

<style scoped></style>
