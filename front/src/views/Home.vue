<template>
  <div class="home">
<<<<<<< HEAD
    <div class="class">
      <ad-component v-for="ad in adverts" :key="ad" :ad="ad"></ad-component>
=======
    <div class="containerList">
      <div class="item" v-for="achat in achats" :key="achat">
        <h2>{{achat.titre}}</h2>
        <p>{{achat.description}}</p>
        <strong>
          {{Intl.NumberFormat(
          'fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: '0' }
          ).format(achat.prix)}}
        </strong>
      </div>
>>>>>>> 25f302e9dcf322b914c69adf21bcb5abad869863
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import AdComponent from '../components/Ad.component.vue';
=======
// @ is an alias to /src
>>>>>>> 25f302e9dcf322b914c69adf21bcb5abad869863

export default {
  name: 'Home',
  components: {
<<<<<<< HEAD
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
=======
  },
  data: () => ({
    achats: [
      { titre: 'Maison Bourg', description: 'ceci est la description', prix: 180000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 110000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
      { titre: 'Maison Bourg2', description: 'ceci est la deuxieme description', prix: 200000 },
>>>>>>> 25f302e9dcf322b914c69adf21bcb5abad869863
    ],
  }),
};
</script>

<style>
<<<<<<< HEAD
  .class {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
=======
  .containerList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
  }

  .item {
    border: 5px #42b983 solid;
>>>>>>> 25f302e9dcf322b914c69adf21bcb5abad869863
  }
</style>
