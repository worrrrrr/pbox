<script>
import supabase from "$lib/db";



    async function update(){
        const { user, error } = await supabase.auth.update({
            email: "new@email.com",
            password: "new-password",
            data: { hello: 'world' }
        })
        
    }
      // your script goes here
  </script>
  
  <style>
      /* your styles go here */
  </style>
  
  <!-- markup (zero or more items) goes here -->