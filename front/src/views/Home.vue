<template>
  <div class="home">
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
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
    ],
  }),
};
</script>

<style>
  .containerList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
  }

  .item {
    border: 5px #42b983 solid;
  }
</style>
