<template>
	<div :class="{project: true, reverse: reverse}">
		<div class="above">
			<h2 class="name">{{ data.name }}</h2>
			<h3 class="subtitle">{{ data.subtitle }}</h3>
		</div>
		<img :src="`img/${data.name.toLowerCase()}/main.png`" class="image">
		<div class="text">
			<img :src="`img/${data.name.toLowerCase()}/logo.svg`" class="logo">
			<div class="beside">
				<h2 class="name">{{ data.name }}</h2>
				<h3 class="subtitle">{{ data.subtitle }}</h3>
			</div>
			<div class="description" v-html="data.description"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Project',
	props: {
		data: Object,
		reverse: Boolean
	}
}
</script>

<style scoped>
.project {
	display: flex;
	margin-bottom: 20px;
}

.image {
	width: 40%;
	height: 100%;
	margin-right: 10%;
	flex-grow: 3;
}

.name {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.subtitle {
	display: block;
	color: darkgrey;
	font-size: 0.65em;
}

.description {
	text-align: justify;
	font-size: 18px;
}

.text {
	text-align: right;
	width: 50%;
	z-index: 1;
	position: relative;
	flex-grow: 2;
}

.logo {
	width: 50%;
	height: 100%;
	position: absolute;
	z-index: 0;
	opacity: 0.2;
	left: 50%;
	transform: translateX(-50%);
}

.reverse .text {
	text-align: left;
	order: 0;
}

.reverse .image {
	order: 1;
	margin-right: 0;
	margin-left: 10%;
}

.project:last-child {
	margin-bottom: 0;
}

.above {
	display: none;
}

@media screen and (max-width: 425px) {
	.image {
		margin-right: 0;
		width: 100%;
		order: 0;
	}

	.reverse .image {
		margin-left: 0;
	}

	.project {
		flex-flow: column;
	}

	.text {
		width: 100%;
	}

	.reverse .text {
		order: 1;
	}

	.above {
		display: block;
	}

	.beside {
		display: none;
	}
}
</style>
