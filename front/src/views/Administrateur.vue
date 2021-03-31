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
    adverttab: [{
      title: 'maison 1',
      description: 'test',
      price: 20,
    },
    {
      title: 'maison 2',
      description: 'test2',
      price: 40,
    },
    ],

  }),
};
</script>

<style>
*{
    background-color: rgb(56, 51, 51);
    color: rgb(255, 255, 255);
}
</style>
