
<ion-header >
    <ion-toolbar color="primary-shade" >
      <ion-button href='.'>
        <ion-icon slot="icon-only" name="person-circle"></ion-icon>
      </ion-button>
    </ion-toolbar>
</ion-header>
<ion-content>
  <ion-nav>
  <ion-list>
    {#each menu as item}

  <!-- content here -->
       <ion-item  href='{item.title}' >
         <ion-icon name='{item.icon}' slot="start"></ion-icon>
         <ion-label>{item.title}</ion-label>
       </ion-item>
    
    {/each}
  </ion-list>
</ion-nav>



</ion-content>
<style>
</style>
<script>


  let menu=[]

  menu=[
    {title:'Search',icon:'Search-outline'},
    {title:'Person',icon:'Person-outline'},
    {title:'Cube',icon:'Cube-outline'},
    {title:'Help',icon:'Help-outline'},
    
  ]
 
</script>