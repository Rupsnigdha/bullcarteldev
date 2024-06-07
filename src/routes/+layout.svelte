<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { ModeWatcher } from 'mode-watcher';
	
	import * as Tooltip from "$lib/components/shadcn/ui/tooltip/index.js";
	import * as Avatar from "$lib/components/shadcn/ui/avatar/index.js";
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	
	import X from "lucide-svelte/icons/x";
	
	import HomeHoverCard from '$lib/components/home/HomeHoverCard.svelte'
	
	let hellobarVisible : boolean = true;
</script>

<ModeWatcher />
<article class="min-h-screen">
	<!-- <header>
		{#key hellobarVisible}
		<div class="bg-primary flex justify-center py-2 {hellobarVisible ? 'block' : 'hidden'}" out:slide={{ duration: 500, easing: quintOut, axis: 'y' }}>
			<div class="text-xs md:text-sm container flex justify-between items-center px-3 md:px-10">
				<span>Our website is currently in its alpha stage and we value your feedback! Please submit your thoughts through this
				<HomeHoverCard /> and help us build something great!
				</span>
				<Tooltip.Root>
					<Tooltip.Trigger asChild let:builder>
					  <Button builders={[builder]} on:click={() => {hellobarVisible = false}} class="p-0"><X size=24/></Button>
					</Tooltip.Trigger>
					<Tooltip.Content>
					  <p>Close</p>
					</Tooltip.Content>
				  </Tooltip.Root>
			</div>
		</div>
		{/key}
	</header> -->
	<main>
		<slot />
	</main>
</article>
