<script>
	import '../app.css';
	import Header from '$components/layout/Header.svelte';
	import Sidebar from '$components/layout/Sidebar.svelte';
</script>

<div class="app h-full w-full">
	<Header />
	<div class="flex">
		<Sidebar />
		<main>
			<slot></slot>
		</main>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
