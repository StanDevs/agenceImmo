<template>
  <div class="home">
    <nav>
      <div class="item">
        <h2>Type</h2>
        <div class="buttonSelect">
          <input type="checkbox"
                 id="selectAppartement"
                 value="appartement"
                 class="d-none"
                 v-model="filter.type"
          >
          <label for="selectAppartement">Appartement</label>
        </div>
        <div class="buttonSelect">
          <input type="checkbox"
                 id="selectMaison"
                 value="maison"
                 class="d-none"
                 v-model="filter.type"
          >
          <label for="selectMaison">Maison</label>
        </div>
      </div>
      <div class="item">
        <h2>Prix</h2>
        <input
          type="range"
          name="prixMax"
          id="prixMax"
          v-model="filter.prixMax"
          min="0"
          max="1000000"
          step="50000"
        >
      </div>
    </nav>
    <main>
      <div class="advertsContainer">
        <ad-component v-for="ad in filteredAdvert" v-bind:key="ad.id" :ad="ad"></ad-component>
      </div>
    </main>
  </div>

</template>

<script>
import axios from 'axios';
import AdComponent from '../components/Ad.component.vue';

export default {
  name: 'Home',
  components: {
    AdComponent,
  },
  data: () => ({
    filter: {
      type: [],
      prixMax: undefined,
    },
    adverts: [
      {
        title: 'Appartement 1',
        description: 'Ceci est la description de la maison 1',
        price: 250000,
        type: 'appartement',
      },
      {
        title: 'Appartement 2',
        description: 'Ceci est la description de la maison 2',
        price: 480000,
        type: 'appartement',
      },
      {
        title: 'Maison 1',
        description: 'Ceci est la description de la maison 3',
        price: 360000,
        type: 'maison',
      },
    ],
  }),
  computed: {
    filteredAdvert() {
      let res = this.adverts;
      if (this.filter.type.length !== 0) {
        res = this.adverts.filter((ad) => this.filter.type.some((type) => type === ad.type));
      }
      if (this.filter.prixMax !== undefined) {
        res = res.filter((ad) => ad.price <= this.filter.prixMax);
      }

      return res;
    },
  },
  mounted() {
    console.log('test');
    axios.get('http://localhost:3000/properties').then((response) => {
      console.log(response.data);
      this.adverts = response.data;
    });
  },
};
</script>

<style>

  .home {
    display: flex;
  }

  .d-none {
    display: none;
  }

  .home navbar {
    height: 100vh;
    width: 300px;
  }

  navbar .item * {
    margin: 5px;
  }

  .buttonSelect input[type="checkbox"] + label {
    padding: 5px 10px;
    border-radius: 25px;
    border: 1px #42b983 solid;
    display: inline-block;
  }

  .buttonSelect input[type="checkbox"]:checked + label {
    background-color: #42b983;
    color: white;
  }

  main {
    width: 100%;
  }

  .advertsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
</style>
