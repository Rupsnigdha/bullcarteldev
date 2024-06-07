<script lang="ts">
	import type { StockRecommendation } from '$lib/types';
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import * as Table from '$lib/components/shadcn/ui/table';
	import { readable } from 'svelte/store';
	import DataTableActions from './DataTableActions.svelte';

	import { addPagination, addSortBy } from 'svelte-headless-table/plugins';
	import { Button } from '$lib/components/shadcn/ui/button';

	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';

	export let data: StockRecommendation[];

	const table = createTable(readable(data), {
		page: addPagination(),
		sort: addSortBy()
	});
	const columns = table.createColumns([
		table.column({
			accessor: 'name',
			header: 'Name',
			plugins: {
				sort: {
					disable: false
				}
			}
		}),
		table.column({
			accessor: 'id',
			header: 'Symbol',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'currentMarketPrice',
			header: 'Current Market Price',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'targetPrice',
			header: 'Target Price',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'stoploss',
			header: 'Stoploss',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),

		table.column({
			accessor: 'investmentType',
			header: 'Investment Type',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: ({ id }) => id,
			header: '',
			cell: ({ value }) => {
				return createRender(DataTableActions, { id: value });
			}
		}),
		table.column({
			accessor: 'dateAdded',
			header: 'Date Added',
			cell: ({ value }) => {
				const formatted = `${value.getDate()}/${value.getMonth() + 1}/${value.getUTCFullYear()}`;
				return formatted;
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'horizon',
			header: 'Horizon',
			plugins: {
				sort: {
					disable: true
				}
			}
		})
	]);
	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);
	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
</script>

<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<Table.Head {...attrs}>
									{#if cell.id === 'name'}
										<Button variant="ghost" on:click={props.sort.toggle}>
											<Render of={cell.render()} />
											<ArrowUpDown class={'ml-2 h-4 w-4'} />
										</Button>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs}>
									<Render of={cell.render()} />
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
	<div class="flex items-center justify-end space-x-4 py-4">
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
</div>
