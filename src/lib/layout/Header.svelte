<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
</script>

<header class="sticky">
	<AppBar
		class={'w-full'}
		gridColumns="grid-cols-3"
		slotDefault="place-self-center"
		slotTrail="place-content-end"
	>
		<svelte:fragment slot="lead">
			<a href="/">
				<img src={logo} alt="Leginote" class="h-8 w-8" />
			</a></svelte:fragment
		>
		<p class="h2">LegiNote</p>
		<svelte:fragment slot="trail">
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="GitHub" class="h-8 w-8" />
			</a></svelte:fragment
		>
	</AppBar>

	<!-- <div class="corner" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
		<a href="/">
			<img src={logo} alt="Leginote" />
		</a>
	</div>

	<div>
		<p>LegiNote</p>
	</div>

	<div class="corner">

	</div> -->
</header>
