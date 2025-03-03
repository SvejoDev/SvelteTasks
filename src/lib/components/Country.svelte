<script>
	export let countryData;
	const flagURL = '/flags/' + countryData.Code2.toLowerCase() + '.webp';
</script>

<section class="rounded-md border border-black p-4 align-top">
	<h1 class="mb-4 text-lg">{countryData.Name}</h1>
	<figure class="mb-4">
		<img src={flagURL} alt="flagga" height="70" class="border border-black" />
		<figcaption class="text-base">Flagga {countryData.Name}</figcaption>
	</figure>

	<table class="collapse text-sm">
		<tbody>
			<tr>
				<th class="text-left font-bold after:content-[':_']">Namn (lokalt)</th>
				<td>{countryData.LocalName}</td>
			</tr>
			<tr>
				<th class="text-left font-bold after:content-[':_']">Landskod</th>
				<td>{countryData.Code}</td>
			</tr>
			<tr>
				<th class="text-left font-bold after:content-[':_']">Folkmängd</th>
				<td>{countryData.Population}</td>
			</tr>
			<tr>
				<th class="text-left font-bold after:content-[':_']">Yta</th>
				<td>{countryData.SurfaceArea}</td>
			</tr>
		</tbody>
	</table>
</section>
