<script lang="ts">
import supabase from '$lib/db';

	import Header from '$lib/Header/index.svelte';
	import '../app.postcss';
	import Login from './user/login.svelte';
		const user = supabase.auth.user()
		console.log(user)
</script>
<body>{#if user}
	<ion-split-pane content-id="main" when="md">
		<ion-menu content-id="main" side="start" type="overlay">
			<ion-header>
				<ion-toolbar>
					<ion-title>MenuSide</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content>

						<a  sveltekit:prefetch href="/">หน้าแรก</a>
			
			</ion-content>
			<ion-footer>
				<ion-toolbar>
					<ion-title>
						<ion-button add>add</ion-button>
					</ion-title>
				</ion-toolbar>
			</ion-footer>
		</ion-menu>
		<ion-content id="main">
			<Header />
			<main>
				<slot />
			</main>
		</ion-content>
	</ion-split-pane>
	{:else}
	<Login></Login>
{/if}
</body>






<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
</style>
