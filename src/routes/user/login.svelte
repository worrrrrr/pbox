
<script>
import supabase from "$lib/db";
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

    let username;
    let password;

   async function signUp(){
        let { user, error } = await supabase.auth.signUp({
              email: 'worakrit.soo@pea.co.th',
              password: 'avqnMlkZuSPxDdnzEhla'
            })
            console.log(user,error)

    }

    async function logIn(){
        let {user,error} = await supabase.auth.signIn({
            email: 'worakrit.soo@pea.co.th',
            password: 'avqnMlkZuSPxDdnzEhla'
            })
           console.log(user,error)
    }

    

</script>


<section>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Login</ion-card-title>
        </ion-card-header>
        <ion-card-content>
                <input type="text" bind:value={username} placeholder="username" />
                <input type="password" bind:value={password} placeholder="password" />
                
                <ion-button on:click={logIn}>Login</ion-button>
                <ion-button on:click={signUp}>signUp</ion-button>
        </ion-card-content>
    </ion-card>
</section>
  <style style lang="postcss">



  </style>