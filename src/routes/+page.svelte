<script lang="ts">
	import type { Country } from '$lib/types/index';
	import CountryCard from '$lib/components/CountryCard.svelte';
	import { onMount } from 'svelte';
	let hasLoadData = false;
	let dataList: Country[] = [];

	onMount(() => {
		getCountries();
	});
	async function getCountries() {
		hasLoadData = false;

		const url = 'https://data.egyweb.se/api/world/getcountries.php';
		const respone = await fetch(url);
		dataList = await respone.json();

		hasLoadData = true;
	}
</script>

<svelte:head>
	<title>Länder i Europa</title>
</svelte:head>

<h1>Länder i Europa</h1>
<section class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#if hasLoadData}
		{#each dataList as country}
			<CountryCard countryData={country} />
		{/each}
	{:else}
		<p>Laddar länder...</p>
	{/if}
</section>
