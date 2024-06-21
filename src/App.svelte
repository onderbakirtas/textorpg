<script lang="ts">
  import Background from "./lib/components/Background.svelte";
  import StoryCard from "./lib/components/StoryCard.svelte";
  import type { TLevel } from "./lib/game";
  import { currentNodeId, story } from "./lib/game";

  $: currentLevel = story.find(
    (level) => level.id === $currentNodeId
  ) as TLevel;
</script>

<main>
  <Background imageUrl={currentLevel.backgroundImage} />
  <StoryCard level={currentLevel} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
</style>
