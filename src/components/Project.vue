<template>
    <div>
        <div :class="{ reverse: reverse }" :id="data.name" class="project">
            <project-title
                class="title-above"
                :data="data"
                :reverse="true"
            ></project-title>
            <div ref="image" class="image">
                <img :src="`img/${data.name.toLowerCase()}/main.png`" />
            </div>
            <div ref="text" class="text">
                <project-title
                    class="title-beside"
                    :data="data"
                    :reverse="reverse"
                ></project-title>
                <p class="description" v-html="data.description"></p>
            </div>
            <!--div class="above">
			<h2 class="name">{{ data.name }}<project-links :data="data" :visible="true" style="padding-left: 10px"/></h2>
			<h3 class="subtitle">{{ data.subtitle }}</h3>
		</div>
		<img ref="image" :src="`img/${data.name.toLowerCase()}/main.png`" class="image">
		<div class="text">
			<img :src="`img/${data.name.toLowerCase()}/logo.svg`" class="logo">
			<div class="beside">
				<h2 class="name">
					<project-links :data="data" :visible="!reverse"/>
					{{ data.name }}
					<project-links :data="data" :visible="reverse"/>
				</h2>
				<h3 class="subtitle">{{ data.subtitle }}</h3>
			</div>
			<div class="description" v-html="data.description"/>
		</div-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProjectLinks from "@/components/ProjectLinks.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";

const props = defineProps<{ data: Record<any, any>; reverse: boolean }>();
</script>

<style scoped>
.project {
    /*height: calc(100vh - 1.4em);*/
    /*transition: opacity 0.1s;*/
    /*scroll-snap-align: start;*/
    /*position: sticky;*/
    /*top: 0;*/
    display: flex;
    align-items: center;
}

.image {
    width: 50%;
    position: relative;
    flex-shrink: 0;
}

.text {
    position: relative;
    flex-grow: 1;
    text-align: right;
    padding: 0 2%;
}

.image img {
    width: 100%;
    display: block;
}

.reverse .text {
    text-align: left;
    order: 0;
}

.reverse .image {
    order: 1;
    margin-right: 0;
    margin-left: 3%;
}

.title-above {
    display: none;
}

@media screen and (max-width: 1080px) {
    .project {
        flex-flow: column;
        position: initial;
        scroll-snap-align: none;
        height: fit-content;
        margin-bottom: 3%;
        align-items: start;
    }

    .title-above {
        display: block;
    }

    .title-beside {
        display: none;
    }

    .image {
        width: 100%;
        height: fit-content;
        margin: 0 !important;
        order: 0 !important;
    }

    .image img {
        width: 100%;
        height: 100%;
        transform: none;
        top: 0;
    }

    .text {
        text-align: justify;
        width: 100%;
        height: fit-content;
        z-index: 1;
        position: relative;
        flex-grow: 2;
        padding: 0 !important;
        margin: 0 !important;
    }

    .description {
        font-size: 18px;
    }
}
</style>
