<script lang="ts">
  import { afterUpdate, createEventDispatcher, onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  export let imageUrl;
  let currentImageUrl = "";
  let nextImageUrl = imageUrl;
  let opacity = tweened(1, {
    duration: 3000,
    easing: cubicOut,
  });

  const dispatch = createEventDispatcher();

  function preloadImage(url: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = reject;
      img.src = url;
    });
  }

  async function changeImage() {
    try {
      currentImageUrl = '';
      await opacity.set(0).then(() => preloadImage(nextImageUrl));
      currentImageUrl = nextImageUrl;
      await opacity.set(1);
      dispatch("imageLoaded");
    } catch (error) {
      console.error("Image preload failed", error);
    }
  }

  onMount(() => {
    currentImageUrl = imageUrl;
  });

  afterUpdate(() => {
    if (nextImageUrl !== imageUrl) {
      nextImageUrl = imageUrl;
      changeImage();
    }
  });
</script>

<div
  class="background"
  style="background-image: url({currentImageUrl}); opacity: {$opacity};"
></div>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    /* transition: opacity 1s ease-in-out; */
  }
</style>
