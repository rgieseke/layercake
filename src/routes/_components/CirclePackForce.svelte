<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleOrdinal, scaleBand } from 'd3-scale';

	import ForceLayout from '../../_components/CirclePackForce.svelte';

	import data from '../../_data/dots.json';

	const xKey = 'category';
	const rKey = 'value';
	const zKey = 'category';

	let groupBy = $state('true');

	const seriesNameSet = new Set();
	const seriesColors = ['#f0c', '#0cf', '#fc0'];

	data.forEach(d => {
		seriesNameSet.add(d[zKey]);
	});

	/* --------------------------------------------
	 * Convert this to an array so we can use it in our scales
	 */
	const seriesNames = [...seriesNameSet];

	let manyBodyStrength = 3;
	let xStrength = 0.1;
</script>

<div class="input-container">
	<label><input type="radio" bind:group={groupBy} value="true" />GroupBy `true`</label>
	<label><input type="radio" bind:group={groupBy} value="false" />GroupBy `false`</label>
</div>

<div class="chart-container">
	<LayerCake
		{data}
		x={xKey}
		r={rKey}
		z={zKey}
		xScale={scaleBand()}
		xDomain={seriesNames}
		rRange={[3, 12]}
		zScale={scaleOrdinal()}
		zDomain={seriesNames}
		zRange={seriesColors}
	>
		<Svg>
			<ForceLayout {manyBodyStrength} {xStrength} groupBy={JSON.parse(groupBy)} nodeStroke="#000" />
		</Svg>
	</LayerCake>
</div>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 250px;
	}
	label {
		cursor: pointer;
	}
	input {
		margin-right: 7px;
	}
</style>
