<template>
	<div :class="{reverse: reverse}" :id="data.name" class="project">
		<div class="title-above">
			<h2>{{ data.name }}</h2>
			<div class="subtitle">{{ data.subtitle }}</div>
		</div>
		<div ref="image" class="image"><img :src="`img/${data.name.toLowerCase()}/main.png`"></div>
		<div ref="text" class="text">
			<div class="text-wrap">
				<div class="title-beside">
					<h2>
						<project-links :data="data" :visible="!reverse"/>
						{{ data.name }}
						<project-links :data="data" :visible="reverse"/>
					</h2>
					<div class="subtitle">{{ data.subtitle }}</div>
				</div>
				<p class="description" v-html="data.description"></p>
			</div>
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
</template>

<script>
import ProjectLinks from '../components/ProjectLinks'
import { isBrowser } from 'mobile-device-detect'

export default {
	name: 'Project',
	components: {
		ProjectLinks
	},
	props: {
		data: Object,
		reverse: Boolean
	},
	mounted() {
		if (isBrowser) this.setupAnimations()
	},
	methods: {
		setupAnimations() {
			let width = this.$el.clientWidth
			let height = this.$el.clientHeight
			let content = document.getElementById('content')
			let contentPadTop = parseFloat(window.getComputedStyle(content, null).getPropertyValue('padding-top'))
			let contentPadSide = parseFloat(window.getComputedStyle(content, null).getPropertyValue('padding-left'))

			let fadein = new window.Motus.Animation({
				$el: this.$el,
				$scrollElement: content,
				endPoint: [-height - contentPadTop - 1],
				keyframes: [{ opacity: 0 }, { opacity: 1 }],
				onScroll: this.onScroll
			})
			window.Motus.addAnimation(fadein)

			let slideoutLeft = new window.Motus.Animation({
				$el: (!this.reverse) ? this.$refs.image : this.$refs.text,
				$scrollElement: content,
				startPoint: [height + 1],
				endPoint: [-50],
				keyframes: [{ left: 0, opacity: 1 }, { left: -width / 2 - contentPadSide, opacity: 0 }],
				onScroll: this.onScroll
			})
			window.Motus.addAnimation(slideoutLeft)

			let slideoutRight = new window.Motus.Animation({
				$el: (!this.reverse) ? this.$refs.text : this.$refs.image,
				$scrollElement: content,
				startPoint: [height + 1],
				endPoint: [-50],
				keyframes: [{ right: 0, opacity: 1 }, { right: -width / 2 - contentPadSide, opacity: 0 }],
				onScroll: this.onScroll
			})
			window.Motus.addAnimation(slideoutRight)
		}
	}
}
</script>

<style scoped>
.project {
	height: calc(100vh - 1.4em);
	transition: opacity 0.1s;
	scroll-snap-align: start;
	position: sticky;
	top: 0;
	display: flex;
}

.project-wrapper {
	display: flex;
}

.image {
	width: 50%;
	height: calc(100vh - 1.4em);
	position: relative;
	flex-shrink: 0;
}

.text {
	height: calc(100vh - 1.4em);
	position: relative;
	flex-grow: 1;
	text-align: right;
}

.text:not(.reverse) {
	padding-left: 2%;
}

.text-wrap {
	top: 50%;
	transform: translateY(-50%);
	position: relative;
}

.image img {
	width: 100%;
	top: 50%;
	position: relative;
	display: block;
	transform: translateY(-50%);
}

.fixed {
	position: sticky;
	top: 1.4em;
}

.reverse .text {
	text-align: left;
	order: 0;
	padding-right: 2%;
}

.reverse .image {
	order: 1;
	margin-right: 0;
	margin-left: 3%;
}

.subtitle {
	color: darkgrey;
	font-size: 0.4em;
	font-style: italic;
}

.title-above {
	display: none;
}

@media screen and (max-width: 768px) {
	.project {
		flex-flow: column;
		position: initial;
		scroll-snap-align: none;
		height: fit-content;
		margin-bottom: 3%;
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


	.text-wrap {
		transform: none;
		top: 0;
	}

	.description {
		font-size: 18px;
	}
}
</style>
