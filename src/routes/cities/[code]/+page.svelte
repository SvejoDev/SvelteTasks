<script lang="ts">
	let { data } = $props();
</script>

<svelte:head></svelte:head>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-2xl font-bold">Städer i {data.country || 'landet'}</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.cities as city}
			<div class="rounded-lg border p-4 shadow-sm">
				<h2 class="mb-2 text-xl font-semibold">{city.Name}</h2>
				<p class="text-gray-600">Population: {city.Population}</p>
				<p class="text-gray-600">District: {city.District}</p>
			</div>
		{/each}
	</div>
</div>
