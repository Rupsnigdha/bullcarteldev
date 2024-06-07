<script lang="ts">
	import type { StockRecommendation } from '$lib/types';
	export let data: StockRecommendation;
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import { Badge } from "$lib/components/shadcn/ui/badge";

	import CircleHelp from 'lucide-svelte/icons/circle-help';
</script>

<Card.Root class="w-full border-muted">
	<Card.Header>
		<div class="w-full h-full relative">
			<Card.Title class="uppercase font-black text-2xl">{data.id}</Card.Title>
			<Card.Description>{data.name}</Card.Description>
			<div class="absolute top-0 right-0 z-10">
				<CircleHelp class="text-muted hover:text-foreground hover:cursor-pointer" />
			</div>
		</div>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-row">
			<div class="flex gap-6 w-full">
				<div class="w-full border border-muted rounded-sm p-2">
					<div class="w-full h-full relative">
						<div class="font-medium text-foreground/60">CMP</div>
						<div class="text-xl font-bold">{data.currentMarketPrice}</div>
						<div class="absolute top-0 right-0 z-10">
							<CircleHelp class="text-muted hover:text-foreground hover:cursor-pointer" size=16 />
						</div>
					</div>
				</div>
				<div class="w-full border border-muted rounded-sm p-2">
					<div class="w-full h-full relative">
						<div class="font-medium text-foreground/60">Target Price</div>
						<div class="text-xl font-bold text-green-700">{data.targetPrice}</div>
						<div class="absolute top-0 right-0 z-10">
							<CircleHelp class="text-muted hover:text-foreground hover:cursor-pointer" size=16 />
						</div>
					</div>
				</div>
				<div class="w-full border border-muted rounded-sm p-2">
					<div class="w-full h-full relative">
						<div class="font-medium text-foreground/60">Stoploss</div>
						<div class="text-xl font-bold text-red-700">{data.stoploss}</div>
						<div class="absolute top-0 right-0 z-10">
							<CircleHelp class="text-muted hover:text-foreground hover:cursor-pointer" size=16 />
						</div>
					</div>
				</div>
			</div>
		</div>
	</Card.Content>
    <Card.Footer>
		<div class="flex gap-2">
			<Badge variant="outline" class="px-4 py-1 text-xs border-primary/80">
				{data.investmentType}
			</Badge>
			
			<Badge variant="outline" class="px-4 py-1 text-xs border-primary/80">
				{data.horizon} Months
			</Badge>
		</div>
	</Card.Footer>
</Card.Root>
