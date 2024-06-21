<script lang="ts">
  import { fade } from "svelte/transition";
  import { currentNodeId, type TLevel } from "../game";
  import Button from "./Button.svelte";
  import Typewriter from "./Typewriter.svelte";

  export let level: TLevel;

  let typingComplete = false;
</script>

<div class="card">
  {#key level.id}
    <Typewriter
      text={level.content}
      typingSpeed={25}
      on:typingComplete={() => {
        typingComplete = true;
      }}
    />
  {/key}

  {#if typingComplete}
    <div class="options" in:fade={{ delay: 500 }}>
      {#each level.options as option}
        <Button
          text={option.text}
          on:click={() => {
            $currentNodeId = option.nextId;
            typingComplete = false;
          }}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .card {
    padding: 1rem;
    margin: 1rem;
    position: relative;
    z-index: 10;
    background-color: wheat;
    color: darkslategray;
    border-radius: 0.5rem;
    width: 80%;
    max-width: 40rem;
  }

  .options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
</style>
