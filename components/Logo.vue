<template>
	<div>
		<svg viewBox="0 0 200 200" width="200" height="200">
			<g id="J" :fill="colour1">
				<path v-for="i in [1, 3, 4]" :d="segments[i]" :key="i" stroke="none" fill-rule="evenodd"/>
				<path :d="vertical1"/>
			</g>
			<g id="W" :fill="colour2">
				<path :d="segments[5]"/>
				<path :d="vertical2" />
				<path :d="diagonal1" />
				<path :d="diagonal2" />
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'Logo',
	data() {
		return {
			radius: 100,
			thickness: 15,
			margin: 1,
			colour1: '#63ADF2',
			colour2: '#8D99AE'
		}
	},
	computed: {
		segments() {
			let segs = []
			for (let i = 0; i < 7; i++) {
				segs.push(this.hexSegment(i))
			}
			return segs
		},
		vertical1() {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5
			let top = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 4) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * 4) + this.radius
			]
			let bottom = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 1) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * 1) + this.radius
			]

			let innerTop = [
				this.radius - this.thickness * Math.sin((60 * Math.PI) / 180),
				this.thickness + this.thickness * Math.cos((60 * Math.PI) / 180)
			]
			let innerBottom = [
				this.radius - this.thickness * Math.sin((60 * Math.PI) / 180),
				200 - this.thickness * Math.cos((60 * Math.PI) / 180) * 3
			]
			return `M ${top[0]}, ${top[1]}
					L ${bottom[0]}, ${bottom[1]}
					L ${innerBottom[0]}, ${innerBottom[1]}
					L ${innerTop[0]}, ${innerTop[1]}
					z`
		},

		vertical2() {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5
			let top = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 4) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * 4) + this.radius
			]
			let bottom = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 1) + this.radius,
				this.radius * Math.sin(startAngle + angle * 1) + this.radius
			]

			let innerTop = [
				this.radius + this.thickness * Math.sin((60 * Math.PI) / 180),
				this.thickness + this.thickness * Math.cos((60 * Math.PI) / 180)
			]
			let innerBottom = [
				this.radius + this.thickness * Math.sin((60 * Math.PI) / 180),
				200 - this.thickness * Math.cos((60 * Math.PI) / 180) * 3
			]

			console.log('v2', bottom, innerBottom)

			return `M ${top[0]}, ${top[1]}
					L ${bottom[0]}, ${bottom[1]}
					L ${innerBottom[0]}, ${innerBottom[1]}
					L ${innerTop[0]}, ${innerTop[1]}
					z`
		},

		diagonal_meet() {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5

			let startD1 = [
				this.radius + this.thickness * Math.sin((60 * Math.PI) / 180),
				200 - this.thickness * Math.cos((60 * Math.PI) / 180) * 3
			]

			let startD2 = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 0) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * 0) + this.radius
			]

			let heightDiff = startD1[1] - startD2[1]
			let widthDiff = startD2[0] - startD1[0]

			let x1 = (Math.sqrt(3) * heightDiff) / 4 + widthDiff / 4

			let y1 = x1 * Math.tan((60 * Math.PI) / 180)

			let innerTop = [startD1[0] + x1, startD1[1] - y1 - this.thickness]

			console.log(innerTop)
			let top = [innerTop[0], innerTop[1] + this.thickness]

			return [top, innerTop]
		},

		diagonal1() {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5

			let [top, innerTop] = this.diagonal_meet

			let bottom = [
				this.radius + this.thickness * Math.sin((60 * Math.PI) / 180),
				200 - this.thickness * Math.cos((60 * Math.PI) / 180) * 3
			]

			let innerBottom = [
				this.radius + this.thickness * Math.sin((60 * Math.PI) / 180),
				200 - this.thickness * Math.cos((60 * Math.PI) / 180) * 6
			]

			return `M ${top[0]}, ${top[1]}
					L ${innerTop[0]}, ${innerTop[1]}
					L ${innerBottom[0]}, ${innerBottom[1]}
					L ${bottom[0]}, ${bottom[1]}
					z`
		},
		diagonal2() {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5

			let [top, innerTop] = this.diagonal_meet

			let bottom = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 0) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * 0) + this.radius
			]

			let innerBottom = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * 0) + this.radius,
				this.radius * Math.sin(startAngle + angle * 0) +
					this.radius -
					this.thickness * Math.cos((60 * Math.PI) / 180) * 3
			]
			//console.log(this.thickness * Math.sin((60 * Math.PI) / 180), )
			return `M ${innerTop[0]}, ${innerTop[1]}
					L ${top[0]}, ${top[1]}
					L ${bottom[0]}, ${bottom[1]}
					L ${innerBottom[0]}, ${innerBottom[1]}
					z`
		}
	},
	methods: {
		hexSegment(i) {
			let angle = (2 * Math.PI) / 6
			let startAngle = angle * 0.5

			let startBig = [
				this.radius * Math.cos(startAngle + angle * i) + this.radius,
				this.radius * Math.sin(startAngle + angle * i) + this.radius
			]
			let startSmall = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * i) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * i) + this.radius
			]

			let endBig = [
				this.radius * Math.cos(startAngle + angle * (i + 1)) + this.radius,
				this.radius * Math.sin(startAngle + angle * (i + 1)) + this.radius
			]
			let endSmall = [
				(this.radius - this.thickness) * Math.cos(startAngle + angle * (i + 1)) + this.radius,
				(this.radius - this.thickness) * Math.sin(startAngle + angle * (i + 1)) + this.radius
			]

			return `M ${startBig[0]}, ${startBig[1]}
					L ${endBig[0]}, ${endBig[1]}
					L ${endSmall[0]}, ${endSmall[1]}
					L ${startSmall[0]}, ${startSmall[1]}
					z`
		}
	}
}
</script>

<style>
</style>
