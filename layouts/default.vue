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
					:move-speed="0.4 * pmod"
					:hover-effect="false"
					:click-effect="false"
					:class="{particles: true, before: before, after: after}"
					color="#dedede"
					lines-color="#dedede"
				/>
			</no-ssr>
			<div :class="{main: true, after: after}">
				<router-link to="/" style="text-decoration: none"><div class="title-mask"><h1 :class="{title: true, before: before, after: after}">James Waters</h1></div></router-link>
				<div :class="{line: true, before: before, after: after}"/>
				<div :class="{'links-mask': true, after: after}">
					<div :class="{links: true, before: before, after: after}">
						<router-link to="/projects"><div class="link">Projects</div></router-link>
						<a class="link" href="https://github.com/j-waters" target="_blank">
							Github
						</a>
						<div class="link">
							Contact
						</div>
					</div>
				</div>
			</div>
		</div>
		<transition name="slide">
			<div v-if="after" class="content">
				<div class="content-wrap">

						<router-view/>

				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			before: this.$route.name == 'index',
			after: this.$route.name != 'index',
			pmod: 1
		}
	},
	watch: {
		$route(to, from) {
			if (to.name == 'index') {
				this.after = false
			}
			if (from.name == 'index') {
				this.after = true
			}
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
.content {
	position: absolute;
	width: 80%;
	margin-left: 10%;
	background: whitesmoke;
	font-size: 24px;
	top: 4em;
	transition: top 1.5s;
	border-radius: .25rem;
	box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
}

.content-wrap {
	padding: 10px;
}

.parent {
	background-color: #191f24;
	/*height: 100vh;
	overflow: hidden;
	position: relative;*/
}

.front {
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 33, 71, 1) 0%, rgba(47, 183, 186, 1) 100%);
	transition: opacity 1.5s;
	opacity: 1;
}

.front.before {
	opacity: 0;
}

.particles {
	width: 100%;
	height: 99%;
	transition: opacity 1.5s 0.25s;
	opacity: 1;
}

.particles.before {
	opacity: 0;
}

.main {
	position: fixed;
	top: calc(50% - 10em);
	left: 50%;
	transform: translateX(-50%);
	width: fit-content;
	transition: transform, top, left, position;
	transition-duration: 1.5s;
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
	transition: transform 0.5s 1.3s, font-size 1.5s;
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
	transition: margin-left 0.5s 0.75s, width 0.5s 0.75s, transform 0.5s 0.25s;
	transform-origin: 158% 100%;
}

.line.before {
	width: 0%;
	margin-left: 50%;
}

.line.after {
	transition: margin-left 0.5s 0.75s, width 0.5s 0.75s, transform 0.5s 1s;
	transform: rotate(-90deg) translate(175%, 50%);
	width: 5em;
	margin-left: calc(95% - 5em);
}

.links-mask {
	position: relative;
	left: 0%;
	width: 90%;
	margin-left: 5%;
	height: fit-content;
	overflow: hidden;
	transition: width 0.5s 1s, left 0.5s 0.5s, transform 0.5s 0.25s;
}

.links-mask.after {
	left: 100%;
	transform: translateY(-110%);
	width: 80%;
	transition: width 0.5s 1s, left 0.4s 0.75s, transform 0.5s 1s;
}

.links {
	text-align: justify;
	width: 100%;
	transition: transform 0.5s 1.5s;
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
	text-decoration: none;
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

@media screen and (max-width: 375px) {
	html {
		font-size: 8px;
	}
	.main {
		top: calc(50% - 20em);
	}
}

@media screen and (max-width: 560px) {
	html {
		font-size: 10px;
	}
	.main {
		top: calc(50% - 20em);
	}

	.main.after {
		width: 90vw;
		left: 5vw;
	}
	.title.after {
		font-size: 3.6em;
		width: 90vw;
	}

	.line.after {
		transform: initial;
		width: 90vw;
		margin-left: initial;
	}

	.links-mask.after {
		left: initial;
		transform: initial;
		width: 90vw;
		margin-left: 0;
	}

	.content {
		top: 3.2em;
	}
}

@media screen and (max-width: 1020px) {
	html {
		font-size: 10px;
	}
}

@media screen and (max-width: 1024px) and (min-width: 560px){
	.main.after {
		left: 1vw;
		width: 98vw;
	}
	.title.after {
		font-size: 2.6em;
	}

	.line.after {
		width: 2.6em;
		transform: rotate(-90deg) translate(170%, 50%);
		margin-left: 145px;
	}

	.line {
		transform-origin: 160% 100%;
	}

	.links-mask.after {
		left: 158px;
		transform: translateY(-110%);
		width: 60%;
	}

	.link {
		font-size: 2em;
		padding-right: 1em;
	}

	.links.after {
		text-align: left;
	}

	.links.after:after {
		display: none;
	}
}

@media screen and (max-width: 768px) and (min-width: 560px){
	.content {
		top: 1.8em;
	}
}

@media screen and (max-width: 1024px) and (min-width: 768px){
	.content {
		top: 2.4em;
	}
}

@media screen and (max-width: 1024px) and (min-width: 768px){
	.line.after {
		margin-left: 220px;
	}

	.links-mask.after {
		left: 255px;
		width: 62%;
		transform: translateY(-110%);
	}

	html {
		font-size: 16px;
	}
}

@media screen and (max-width: 1024px){
	.content {
		width: 100% !important;
		margin-left: 0 !important;
	}
}

@media screen and (min-width: 1024px) and (max-width: 1440px){
	.content {
		width: 90% !important;
		margin-left: 5% !important;
	}
	html {
		font-size: 12px;
	}

	.main.after {
		left: 5%;
	}
}

@media screen and (min-width: 1441px){
	.content {
		top: 5em;
	}
}

.slide-enter-active, .slide-leave-active {
	transition: top 1.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
	top: 100vh;
}



*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}


::-webkit-scrollbar {
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
</style>

