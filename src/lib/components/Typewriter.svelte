<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let text = "";
  export let typingSpeed = 100;

  let displayedText = "";
  let index = 0;
  let typingComplete = false;
  const dispatch = createEventDispatcher();

  const typewriterEffect = () => {
    if (index < text.length) {
      displayedText += text.charAt(index);
      index++;
      setTimeout(typewriterEffect, typingSpeed);
    } else {
      typingComplete = true;
      dispatch("typingComplete");
    }
  };

  onMount(() => {
    typewriterEffect();
  });
</script>

<div class="typewriter">{displayedText}</div>

<style>
  .typewriter {
    font-family: "Grandstander", cursive;
    white-space: pre-wrap;
  }
</style>
