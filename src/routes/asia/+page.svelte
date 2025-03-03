<script lang="ts">
	import Country from '$lib/components/Country.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Länder i Asien</title>
</svelte:head>

<h1>Länder i Afrika</h1>
<section>
	{#if data}
		{#each data.list as country}
			<Country countryData={country} />
		{/each}
	{:else}
		<p>Laddar data</p>
	{/if}
</section>
