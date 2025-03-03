<script>
	let { countryData } = $props();
	const flagURL = '/flags/' + countryData.Code2.toLowerCase() + '.webp';
	console.log(JSON.stringify(countryData));
</script>

<section class="rounded-md border border-black p-4 align-top">
	<h1 class="mb-4 text-lg">{countryData.Name}</h1>
	<figure class="mb-4">
		<img src={flagURL} alt="flagga" height="70" class="border border-black" />
		<figcaption class="text-base">Flagga {countryData.Name}</figcaption>
	</figure>

	<table>
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
				<td>{new Intl.NumberFormat('sv-SE').format(countryData.Population)} m²</td>
			</tr>
		</tbody>
	</table>
</section>
