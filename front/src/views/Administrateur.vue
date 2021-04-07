<template>
  <div class="administrateur">
    <h1>Ceci est un test</h1>
    <button>Ajouter une maison</button>
    <adminadvert-component v-for="ad in adverttab" :key="ad" :advert="ad"></adminadvert-component>
  </div>
</template>

<script>
import AdminadvertComponent from '../components/Adminadvert.component.vue';

export default {
  name: 'Administrateur',
  components: {
    AdminadvertComponent,
  },
  data: () => ({
    adverttab: [
      {
        id: 1,
        title: 'maison 1',
        type: 'Maison',
        price: 20,
      },
      {
        id: 2,
        title: 'maison 2',
        type: 'Appartement',
        price: 40,
      },
    ],
  }),
};
</script>

<style>
</style>
