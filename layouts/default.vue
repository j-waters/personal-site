/* eslint-disable vue/attribute-hyphenation */
0.7"
<template>
	<div class="parent">
		<div :class="{front: true, before: before, after: after}">
			<no-ssr>
				<vue-particles
					:particle-opacity="0.7"
					:particles-number="150"
					:particle-size="2"
					:lines-width="0.5"
					:line-linked="true"
					:line-opacity="0.4"
					:lines-distance="150"
					:move-speed="0.4"
					:hover-effect="false"
					:click-effect="false"
					:class="{particles: true, before: before, after: after}"
					color="#dedede"
					lines-color="#dedede"
				/>
			</no-ssr>
			<div :class="{main: true, after: after}">
				<div class="title-mask"><h1 :class="{title: true, before: before, after: after}">James Waters</h1></div>
				<div :class="{line: true, before: before, after: after}"/>
				<div :class="{'links-mask': true, after: after}">
					<div :class="{links: true, before: before}">
						<div class="link" @click="after = !after">
							Projects
						</div>
						<div class="link">
							Github
						</div>
						<div class="link">
							Contact
						</div>
					</div>
				</div>
			</div>
		</div>
		<nuxt/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			before: true,
			after: false
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.before = false
		})
	}
}
</script>

<style>
.parent {
	background-color: #191f24;
}

.front {
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 33, 71, 1) 0%, rgba(47, 183, 186, 1) 100%);
	transition: opacity 3s;
	opacity: 1;
}

.front.before {
	opacity: 0;
}

.particles {
	width: 100%;
	height: 99%;
	transition: opacity 3s .5s;
	opacity: 1;
}

.particles.before {
	opacity: 0;
}


.main {
	position: absolute;
	top: calc(50% - 10em);
	left: 50%;
	transform: translateX(-50%);
	width: fit-content;
	transition: transform, top, left, position;
	transition-duration: 3s;
}

.main.after {
	position: fixed;
	top: 0;
	left: 10%;
	transform: translateX(0);
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 10em;
	color: rgb(210, 255, 255);
	letter-spacing: 1px;
	transition: transform 1s 2.6s, font-size 3s;
	text-align: center;
}

.title.before {
	transform: translateY(100%) scale(0.8);
}

.title.after {
	font-size: 6em;
}

.title-mask {
	width: fit-content;
	height: fit-content;
	overflow: hidden;
}

.line {
	background: rgb(210, 255, 255);
	height: 2px;
	width: 90%;
	margin-left: 5%;
	transition: margin-left 1s 1.5s, width 1s 1.5s, transform 1s 0.5s;
	transform-origin: 150% 100%;
}

.line.before {
	width: 0%;
	margin-left: 50%;
}

.line.after {
	transition: margin-left 1s 1.5s, width 1s 1.5s, transform 1s 2s;
	transform: rotate(-90deg) translate(150%, 50%);
	width: 6em;
	margin-left: calc(95% - 6em);
}

.links-mask {
	position: relative;
	left: 0%;
	width: 90%;
	margin-left: 5%;
	height: fit-content;
	overflow: hidden;
	transition: width 1s 2s, left 1s 1s, transform 1s 0.5s;
}

.links-mask.after {
	left: 100%;
	transform: translateY(-110%);
	width: 80%;
	transition: width 1s 2s, left 0.8s 1.5s, transform 1s 2s;
}


.links {
	text-align: justify;
	width: 100%;
	transition: transform 1s 3s;
}

.links.before {
	transform: translateY(-100%);
}


.links:after {
	content: '';
	width: 100%;
	display: inline-block;
}

.link {
	color: rgb(210, 255, 255);
	font-size: 2.6em;
	display: inline-block;
}

html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

@media screen and (min-width: 0px) {
	html {
		font-size: 8px;
	}
	.main {
		top: calc(50% - 20em);
	}
}

@media screen and (min-width: 376px) {
	html {
		font-size: 10px;
	}
	.main {
		top: calc(50% - 20em);
	}
}

@media screen and (min-width: 480px) {
	html {
		font-size: 10px;
	}
	.main {
		top: calc(50% - 10em);
	}
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
</style>
