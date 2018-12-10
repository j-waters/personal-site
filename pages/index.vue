<template>
	<div style="width: 100vw; height:100wh; overflow: hidden">
		<div>

		</div>

		<div v-show="false">
			<div class="top">

			</div>
			<div class="bottom">

			</div>
			<h1 id="t1" ref="james" :style="jamesStyle" class="title">
				James
			</h1>
			<h1 id="t2" ref="waters" :style="watersStyle" class="title">
				Waters
			</h1>

			<div id="main" class="">
				<div class="px-6 py-4">
					hello
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},
	data() {
		return {
			isMounted: false
		}
	},
	computed: {
		jamesRect() {
			if (this.isMounted) {
				return this.$refs.james.getBoundingClientRect()
			}
			return {}
		},
		watersRect() {
			if (this.isMounted) {
				return this.$refs.waters.getBoundingClientRect()
			}
			return {}
		},
		jamesStyle() {
			return {} //{top: 'calc(40vh - ' + this.jamesRect.height + 'px)'}
		},
		watersStyle() {
			return {} //{top: '40vh'}
		}
	},
	mounted() {
		this.$nextTick(this.createScene)
		this.isMounted = true
	},
	destroyed() {
		// Destroy ScrollMagic when our component is removed from DOM
		//this.$ksvuescr.$emit('destroy')
	},
	methods: {
		createScene() {
			let TweenMax = this.$gsap.TweenMax
			let tween = new this.$gsap.TimelineMax()
			tween.add(TweenMax.to(`#t2`, 0, { x: '-50%' }), 0)
			tween.add(TweenMax.to(`#t1`, 50, { left: '10px', x: '0%' }), 0)
			tween.add(TweenMax.to(`#main`, 20, { top: this.jamesRect.height}), 30)
			tween.add(TweenMax.to(`#t2`, 10, {x: '-25%'}), 15)
			tween.add(
				[
					//TweenMax.to(`.top`, 30, { rotation: '-90deg', x: '--12.6%' }),
					TweenMax.to(`.bottom`, 30, { rotation: '-90deg', x: '-12.6%' }),

				],
				20
			)
			tween.add(TweenMax.to(`#t2`, 25, { y: '-118%' }), 25)
			tween.add(TweenMax.to(`#t2`, 15, { left: this.jamesRect.width + 30 + 'px', x: '0%' }), 35)

			const scrollDuration = this.jamesRect.top
			// create scene and set its params
			const scene = new this.$scrollmagic.Scene({
				offset: 0, // start scene after scrolling for 100px
				duration: scrollDuration // pin the element for 400px of scrolling
			})
				//.setPin('#t1')
				.setTween(tween)

			const fix1 = new this.$scrollmagic.Scene({
				offset: scrollDuration, // start scene after scrolling for 100px
			})
			.setClassToggle("#t1", "fixed")

			const fix2 = new this.$scrollmagic.Scene({
				offset: scrollDuration, // start scene after scrolling for 100px
			})
				.setClassToggle("#t2", "fixed")

			// Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
			this.$ksvuescr.$emit('addScene', 'scene', scene)

			this.$ksvuescr.$emit('addScene', 'fix1', fix1)

			this.$ksvuescr.$emit('addScene', 'fix2', fix2)
		}
	}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

#main {
	position: fixed;
	top: 100vh;
	background-color: white;
	width: 100%;
	left: 10%;
	height: 100vh;
}

.fixed {
	position: fixed !important;
	top: 0 !important;
	transform: none !important;
}

body {
	overflow-x: hidden;
}

.top {
	background: #bfc0c0;
	position: fixed;
	transform: rotate(0deg);
	transform-origin: 50% 100%;
	width: 200vw;
	/*top: -60vh;*/
	height: 100vh;
	left: -50%;
}

#t1 {
	top: calc(40vh - 8vw);
	position: absolute;
	color: #08b2e3;
	left: 50%;
	transform: translateX(-50%);
}

.bottom {
	width: 200vw;
	height: 200vh;
	background: #cee7e6;
	position: absolute;
	top: 40vh;
	transform: rotate(0deg);
	transform-origin: 50% 0%;
	left: -50%;
}

#t2 {
	top: 40vh;
	position: absolute;
	color: #8d99ae;
	left: 50%;
	transform: translateX(-50%);
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
