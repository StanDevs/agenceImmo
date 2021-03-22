<template>
  <div class="home">
    <div class="class">
      <ad-component v-for="ad in adverts" :key="ad" :ad="ad"></ad-component>
    </div>
  </div>
</template>

<script>
import AdComponent from '../components/Ad.component.vue';

export default {
  name: 'Home',
  components: {
    AdComponent,
  },
  data: () => ({
    adverts: [
      {
        title: 'Maison 1',
        description: 'Ceci est la description de la maison 1',
        price: 250000,
      },
      {
        title: 'Maison 2',
        description: 'Ceci est la description de la maison 2',
        price: 480000,
      },
      {
        title: 'Maison 3',
        description: 'Ceci est la description de la maison 3',
        price: 360000,
      },
    ],
  }),
};
</script>

<style>
  .class {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
</style>
