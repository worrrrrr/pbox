<script>
	let count = 0;
	
	const increment = () => {
		count += 1;
	};
</script>

<ion-button>
	add
</ion-button>
<ion-button on:click={increment}>
	Clicks: {count}
</ion-button>

<style style lang="postcss">

</style>
