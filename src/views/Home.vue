<template>
    <home-hero />
    <home-about />
    <home-news />
</template>

<script>
import HomeHero from './home/Hero.vue'
import HomeAbout from './home/About.vue'
import HomeNews from './home/News.vue'
export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeNews
  }
}
</script>
