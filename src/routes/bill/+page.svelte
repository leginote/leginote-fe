<script>
	import Feed from '$components/Feed.svelte';

	const feedCount = 10;
</script>

<div>
	<ul class="flex flex-col gap-10">
		{#each Array(feedCount) as _}
			<li class="border-b"><Feed /></li>
		{/each}
	</ul>
</div>
