<script lang="ts">
	import type { StockRecommendation } from '$lib/types';
	import { collection, getDocs, orderBy, query } from 'firebase/firestore'

	import { db } from '$lib/services/firebase.client'
	let stockRecommendations: StockRecommendation[] = []
	let filteredStockRecommendation = stockRecommendations
	const colRef = collection(db, 'stockRecommendations')
	async function fetchResponses() {
		let fbStockRecommendations: StockRecommendation[] = []
		const q = query(colRef, orderBy('dateAdded', 'asc'))
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => {
			let stockRecommendation: StockRecommendation = { ...(doc.data() as StockRecommendation)}
			fbStockRecommendations = [stockRecommendation, ...fbStockRecommendations]
		})
		stockRecommendations = fbStockRecommendations
		filteredStockRecommendation = stockRecommendations
	}
	fetchResponses()
	console.log(stockRecommendations)
	import DataCard from '$lib/components/dataCard/DataCard.svelte';
</script>

<article class="flex flex-col w-full justify-center px-4 py-4">
	<nav>

	</nav>
	<h2 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Dashboard</h2>
	<div
		class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
	> 
	{#each filteredStockRecommendation as stockRecommendation}
		<DataCard data={stockRecommendation} />
	{/each}
	</div>
</article>
