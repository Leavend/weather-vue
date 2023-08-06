<template>
  <div class="home">
    <div class="container">
      <Hero />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "HomeViews",
  components: {
    Hero,
  },
};
</script>