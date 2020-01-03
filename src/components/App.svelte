<script>
  export let name;
</script>

<style>
  :global(body) {
    background-color: #676778;
    color: white;
  }
  .main {
    display: flex;
    justify-content: center;
  }
</style>

<div class="main">
  <h1>Hello {name}!</h1>
</div>
