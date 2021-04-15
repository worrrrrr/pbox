<script>
  import Header from "$lib/_Header.svelte";
  import MenuSide from "$lib/_MenuSide.svelte";
  import "../app.postcss";
</script>

<main>
  <ion-split-pane content-id="main">
    <!--  the side menu  -->
    <ion-menu content-id="main">
      <MenuSide  />
    </ion-menu>
    <!-- the main content -->

    <ion-content  id="main" fullscreen={true}>
      <Header />
      <slot />
    </ion-content>
  </ion-split-pane>
</main>

<style lang="postcss">
 
</style>
