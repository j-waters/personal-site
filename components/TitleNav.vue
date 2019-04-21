<template>
	<div :class="{'before-transition': beforeTransition}" class="container">
		<div class="name" @click="$router.push('/')">
			<h1 class="firstname">
				<div class="mask">
				<span class="initial">J</span><span class="nameleft-wrapper">
					<span class="nameleft">AMES</span>
				</span>
					</div>
			</h1>
			<div class="divider"/>
			<h1 class="surname">
				<div class="mask">
				<span class="initial">W</span><span class="nameleft-wrapper">
					<span class="nameleft">ATERS</span>
				</span>
				</div>
			</h1>
		</div>
		<div class="menu">
			<router-link to="about">About</router-link>
			<router-link to="projects">Portfolio</router-link>
			<router-link to="contact">Contact</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TitleNav',
	data() {
		return {
			beforeTransition: true
		}
	},
	mounted() {
		setTimeout(() => {
			this.beforeTransition = false
		}, 3000)
	}
}
</script>

<style scoped>
.container {
	position: fixed;
	top: 50%;
	left: 50%;
	color: #ffd700;
	transform: translate(-50%, -50%);
	font-family: 'LT Tofino';
	text-align: center;
	transition: top, left, font-size, transform;
	transition-duration: 2s;
	will-change: top, left;
	pointer-events: none;
}

.name {
	transform-origin: 0 0;
	transition: transform;
	transition-duration: 2s;
	will-change: transform;
}

.scrolled .name {
	transform: scale(0.6);
}

.nameleft {
	transition: opacity, transform;
	transition-duration: 2s;
	display: inline-block;
	will-change: opacity, transform;
}

.nameleft-wrapper {
	overflow: hidden;
	display: inline-block;
	text-align: left;
	vertical-align: top;
}

.firstname .nameleft-wrapper {
	width: 2.8em;
}

.surname .nameleft-wrapper {
	width: 3.1em;
}

.surname {
	transition: transform;
	transition-duration: 2s;
	will-change: transform;
}

.mask {
	overflow: hidden;
}

.before-transition .firstname .initial, .before-transition .firstname .nameleft-wrapper {
	display: inline-block;
	transition: transform 0.5s 0.8s;
}

.before .firstname .initial, .before .firstname .nameleft-wrapper {
	transform: translateY(100%);
}

.before-transition .surname .initial, .before-transition .surname .nameleft-wrapper {
	display: inline-block;
	transition: transform 0.5s 1s;
}

.before .surname .initial, .before .surname .nameleft-wrapper {
	transform: translateY(-100%);
}

.scrolled .container {
	top: 0;
	left: -0.3em;
	transform: translate(0, 0);
}

.scrolled .nameleft {
	opacity: 0;
	transform: translateX(-100%);
}

.name h1 {
	font-weight: 500;
	line-height: 0.9em;
	font-size: 2em;
	transition: transform, font-size;
	transition-duration: 2s;
	-webkit-font-smoothing: antialiased;
}

.scrolled .initial {
	cursor: pointer;
	pointer-events: initial;
}

.before .divider {
	transform: scaleX(0);
}

.before-transition .divider {
	transition: transform 0.5s 0.5s;
	transform-origin: 50%;
}

.divider {
	height: 1.8px;
	width: 100%;
	background: #ffd700;
	transition: transform;
	transition-duration: 2s;
	transform-origin: 100%;
	position: absolute;
	will-change: transform;
	transform: scaleX(0.9999);
}

.scrolled .divider {
	transform: translate(-4.4em, -0.1em) rotate(90deg) scaleX(0.18);
}

.scrolled .surname {
	transform: translate(0.8em, -0.89em);
}

.menu {
	line-height: 1em;
	transition: transform;
	transition-duration: 2s;
}

.menu a {
	font-size: 0.5em;
	cursor: pointer;
	pointer-events: initial;
}

.menu a:link {
	text-decoration: inherit;
	color: inherit;
}

.menu a:visited {
	text-decoration: inherit;
	color: inherit;
}

.before-transition .menu a:nth-of-type(1) {
	transition: opacity 0.5s 1.3s;
}

.before-transition .menu a:nth-of-type(2) {
	transition: opacity 0.5s 1.55s;
}

.before-transition .menu a:nth-of-type(3) {
	transition: opacity 0.5s 1.8s;
}

.before .menu a {
	opacity: 0;
}

.scrolled .menu {
	transform: translate(1.3em, -3.7em);
}
</style>
