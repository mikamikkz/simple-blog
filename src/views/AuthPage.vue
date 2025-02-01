<template>
  <main>
    <BaseCard
      v-for="(post, idx) in posts"
      :key="`post-${idx}`"
      :class="['dark', post.size]"
      :image="post.image"
      :title="post.title"
      :content="post.content"
    />
  </main>
  <LoginForm />
</template>

<script setup lang="ts">
  import BaseCard from '@/components/BaseCard.vue';
  import LoginForm from '@/components/LoginForm.vue';

  const posts = [
    {
      image: 'https://www.pokebeach.com/news/2024/08/Squirtle-Genetic-Apex.jpg',
      title: 'The new Pokemon TCG Pocket card art is insane',
      size: 'large',
      content: 'this art is by Shinji Kanda, he has many cards with this artstyle! i have a shiny Magneton in pokemon go \
      that i named "Kandavolt" since i got it around the same time his promo artwork..'
    }, {
      image: 'https://static.gosugamers.net/b7/66/3b/011a4ea78dc06b8ef4611a8efb65c97398182bfe87741e03c148941109.webp?w=1600',
      title: 'Mavuika Rating and Best Builds',
      content: 'Mavuika is a 5-star Pyro Claymore character in Genshin Impact that best functions as a Main DPS or \
      Sub-DPS! See Mavuika\'s best builds, artifacts and weapons, materials, kit, and all known info about her here!',
      size: 'small',
    }, {
      image: 'https://kpoplife.com/wp-content/uploads/2024/11/g-dragon-music-visionary-of-the-year.png',
      title: 'BIGBANG reunites for iconic performance',
      content: 'Kpop superstars Seventeen solidified their ascendancy by clinching a grand prize for \
      the second consecutive year at the 2024 MAMA Awards on Saturday, one of the most prestigious \
      ceremonies in the K-pop industry',
      size: 'small',
    }, {
      image: 'https://images5.alphacoders.com/114/1145016.jpg',
      title: 'Analyzing Gojo Satoru\'s Character',
      content: 'I got annoyed at the lack of posts that analyze gojo satoru in depth so I wrote one myself. people\
      said I should post this here too. despite being an extroverted and easy-going person I think gojo satoru\'s \
      one of the',
      size: 'small',
    }, {
      image: 'https://gkids.com/wp-content/uploads/2024/10/Arcane_KeyArt_2024-05-29-829x1024.jpg',
      title: 'Arcane because I\'ve lost control of my life',
      content: 'So yeah, just finished. First of all, wow! Second of all, how do I stop being sad? I know \
      this sounds stupid, but you know that sort of sad, empty feeling you get after finishing a show? Well\
      after Arcane for some reason that feeling has been cranked up to 11 because I have been feeling an \
      existential dread towards continuing living in a world so god damn boring compared to Piltover.',
      size: 'large',
    }, {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWLCIhOHgTZuO7vTRwkKjTaFbDuzThiggOA&s',
      title: 'Analyzing Gojo Satoru\'s Character',
      content: 'I got annoyed at the lack of posts that analyze gojo satoru in depth so I wrote one myself. people\
      said I should post this here too. despite being an extroverted and easy-going person I think gojo satoru\'s \
      one of the',
      size: 'small',
    }, {
      image: 'https://www.pokebeach.com/news/2024/08/Squirtle-Genetic-Apex.jpg',
      title: 'The new Pokemon TCG Pocket card art is insane',
      size: 'large',
      content: 'this art is by Shinji Kanda, he has many cards with this artstyle! i have a shiny Magneton in pokemon go \
      that i named "Kandavolt" since i got it around the same time his promo artwork..'
    }, {
      image: 'https://static.gosugamers.net/b7/66/3b/011a4ea78dc06b8ef4611a8efb65c97398182bfe87741e03c148941109.webp?w=1600',
      title: 'Mavuika Rating and Best Builds',
      content: 'Mavuika is a 5-star Pyro Claymore character in Genshin Impact that best functions as a Main DPS or \
      Sub-DPS! See Mavuika\'s best builds, artifacts and weapons, materials, kit, and all known info about her here!',
      size: 'small',
    }, {
      image: 'https://kpoplife.com/wp-content/uploads/2024/11/g-dragon-music-visionary-of-the-year.png',
      title: 'BIGBANG reunites for iconic performance',
      content: 'Kpop superstars Seventeen solidified their ascendancy by clinching a grand prize for \
      the second consecutive year at the 2024 MAMA Awards on Saturday, one of the most prestigious \
      ceremonies in the K-pop industry',
      size: 'small',
    }, {
      image: 'https://images5.alphacoders.com/114/1145016.jpg',
      title: 'Analyzing Gojo Satoru\'s Character',
      content: 'I got annoyed at the lack of posts that analyze gojo satoru in depth so I wrote one myself. people\
      said I should post this here too. despite being an extroverted and easy-going person I think gojo satoru\'s \
      one of the',
      size: 'small',
    }, {
      image: 'https://gkids.com/wp-content/uploads/2024/10/Arcane_KeyArt_2024-05-29-829x1024.jpg',
      title: 'Arcane because I\'ve lost control of my life',
      content: 'So yeah, just finished. First of all, wow! Second of all, how do I stop being sad? I know \
      this sounds stupid, but you know that sort of sad, empty feeling you get after finishing a show? Well\
      after Arcane for some reason that feeling has been cranked up to 11 because I have been feeling an \
      existential dread towards continuing living in a world so god damn boring compared to Piltover.',
      size: 'large',
    }, {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWLCIhOHgTZuO7vTRwkKjTaFbDuzThiggOA&s',
      title: 'Analyzing Gojo Satoru\'s Character',
      content: 'I got annoyed at the lack of posts that analyze gojo satoru in depth so I wrote one myself. people\
      said I should post this here too. despite being an extroverted and easy-going person I think gojo satoru\'s \
      one of the',
      size: 'small',
    },
  ]
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

main {
  background: $primary;
  height: 100vh;
  width: 100vw;
  padding: 32px;
  overflow: hidden;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, 520px);
  grid-auto-rows: 12px;
  grid-column-gap: 28px;
  justify-content: center;

  .card {
    opacity: 20%;

    &.small {
      grid-row-end: span 40;
    }

    &.large {
      grid-row-end: span 61;
    }
  }
}

.login-form {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
