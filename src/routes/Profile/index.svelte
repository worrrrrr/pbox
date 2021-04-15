<div class="container">
    <div class="header"><Nav /></div>
    <div class="left">left</div>
    <div class="main">Main</div>
    <div class="right">right</div>
    <div class="footer">footer</div>
  </div>
  
  <style>
  .container {
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-areas:
      "header header header"
      "left main right"
      "footer footer footer";
    grid-template-columns: 120px 4fr 1fr;
    grid-template-rows: 80px 1fr 80px;
  }
  
  .header {
    grid-area: header;
  }
  .left {
    grid-area: left;
  }
  .main {
    grid-area: main;
  }
  .right {
    grid-area: right;
  }
  .footer {
    grid-area: footer;
  }
  </style>
  
  <script>
  import Nav from "$lib/_Nav.svelte";
  </script>