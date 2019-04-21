<template>
	<div :class="{home: home, scrolled: !home, before: home && before}" @wheel="scroll">
		<div class="background">
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
					:class="{particles: true}"
					color="#F1BF98"
					lines-color="#F1BF98"
				/>
			</no-ssr>
			<div v-if="home && desktop" class="scrolldown">
				<a><span/></a>
			</div>
		</div>

		<transition name="slide">
			<div v-if="!home" id="content">
				<div class="content-wrap">
					<transition mode="out-in" name="fade">
						<router-view/>
					</transition>
				</div>
			</div>
		</transition>
		<div class="top-shade"></div>
		<title-nav/>
		<!--div ref="content" class="content">
			<div class="zeroth"></div>
			<div ref="first" class="first">NUMBER ONE</div>
			<div>NUMBER TWO</div>
		</div-->
	</div>
</template>

<script>
import TitleNav from '~/components/TitleNav'
import { isBrowser } from 'mobile-device-detect'

export default {
	components: {
		TitleNav
	},
	data() {
		return {
			desktop: isBrowser,
			pages: ['about', 'portfolio', 'contact'],
			viewTransition: 'fade',
			before: true
		}
	},
	computed: {
		home() {
			return this.$route.name === 'index'
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.before = false
		})
	},
	methods: {
		scroll(event) {
			if (this.home && event.deltaY > 0) {
				this.$router.push('about')
			}
			if (this.$route.name == 'about' && event.deltaY < 0) {
				this.$router.push('/')
			}
		}
	}
}
</script>

<style scoped>
.background {
	width: 100vw;
	height: 100vh;
	background: rgb(2, 0, 36);
	background: linear-gradient(rgba(46, 64, 87, 1) 0%, rgba(2, 0, 36, 1) 80%);
	position: fixed;
	top: 0;
	transition: opacity 1.5s;
}

.before .background {
	opacity: 0;
}

#content {
	position: fixed;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	background: rgba(2, 0, 36, 0.7);
	box-shadow: 0px 0px 40px 40px rgba(2, 0, 36, 0.7);
	color: #eee5e9;
	font-family: 'LT Tofino', sans-serif;
	padding-top: 1.4em;
	scroll-padding-top: 1.4em;
	padding-left: 0.2em;
	padding-right: 0.2em;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	overflow-x: hidden;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 2s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
	transform: translateY(100%);
}

.particles {
	width: 100%;
	height: 99%;
	transition: opacity 1.5s 0.25s;
	opacity: 1;
}

.top-shade {
	background: linear-gradient(rgba(2, 0, 36, 1) 60%, rgba(2, 0, 36, 0) 100%);
	width: 100vw;
	height: 1.4em;
	position: fixed;
	top: 0;
	left: 0;
	display: none;
}

@media screen and (max-width: 768px) {
	.top-shade {
		display: initial;
	}
}

.scrolldown {
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translateX(-50%);
	transition: opacity 0.5s 1.6s;
}

.before .scrolldown {
	opacity: 0;
}

.scrolldown a span {
	position: absolute;
	top: 0;
	left: 50%;
	width: 24px;
	height: 24px;
	margin-left: -12px;
	border-left: 1px solid #fff;
	border-bottom: 1px solid #fff;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-animation: sdb05 1.5s infinite;
	animation: sdb05 1.5s infinite;
	box-sizing: border-box;
}

@-webkit-keyframes sdb05 {
	0% {
		-webkit-transform: rotate(-45deg) translate(0, 0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		-webkit-transform: rotate(-45deg) translate(-20px, 20px);
		opacity: 0;
	}
}
@keyframes sdb05 {
	0% {
		transform: rotate(-45deg) translate(0, 0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: rotate(-45deg) translate(-20px, 20px);
		opacity: 0;
	}
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
	opacity: 0;
}
</style>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

html {
	font-size: 30px;
}

@media screen and (min-width: 320px) {
	html {
		font-size: calc(30px + 40 * ((100vw - 320px) / 1600));
	}
}

@media screen and (min-width: 1920px) {
	html {
		font-size: 70px;
	}
}

p {
	font-size: 0.35em;
}

@media screen and (max-width: 768px) {
	p {
		font-size: 16px;
	}
}



::-webkit-scrollbar {
	width: 10px;
	background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #555;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #f5f5f5;
}
</style>
