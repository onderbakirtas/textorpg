<script lang="ts">
  export let text: string;
</script>

<button on:click>{text}</button>

<style>
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.75rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>