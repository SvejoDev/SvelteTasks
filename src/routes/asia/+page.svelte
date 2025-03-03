<script lang="ts">
	import type { Country } from '$lib/types/index';
	import CountryCard from '$lib/components/Country.svelte';
	import { onMount } from 'svelte';

	async function getCountries() {
		const url = 'https://data.egyweb.se/api/world/getcountries.php';
		const respone = await fetch(url);
		return respone.json();
	}
</script>

<svelte:head>
	<title>Länder i Asien</title>
</svelte:head>

<h1>Länder i Asien</h1>
{#await getCountries()}
	<p>Laddar från server...</p>
{:then dataList}
	{#each dataList as country}
		<CountryCard countryData={country} />
	{/each}
{:catch error}
	<p class="error">Fel: {error.message}</p>
{/await}
