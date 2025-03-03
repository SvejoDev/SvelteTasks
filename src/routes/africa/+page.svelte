<script>
  import Country from "$lib/components/Country.svelte";
  let {data} = $props();
</script>


<svelte:head>
  <title>Länder i Afrika</title>
</svelte:head>


<h1>Länder i Afrika</h1>
<section>
  {#each data.list as country}
     <Country countryData={country} />
  {/each}
</section>
