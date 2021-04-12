<template>
  <div class="details">
    <img :src="advert.image" />
    <div class="headerData">
      <h1>{{ advert.title }}</h1>
      <span>{{ affichePrix(advert.price) }}</span>
    </div>

    <div class="advertDetails">
      <div><i class="fas fa-home"></i>{{ advert.inSurface }}m²</div>
      <div><i class="fas fa-tree"></i>{{ advert.outSurface }}m²</div>
      <div>
        <i class="fas fa-couch"></i>
        {{ advert.isFurnished === true ? 'meublé' : 'non meublé' }}
      </div>
      <div><i class="fas fa-lightbulb"></i>{{ advert.bilan }}</div>
    </div>
    <p>{{ advert.description }}</p>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'detailsAdvert',
  data: () => ({
    advert: Object,
  }),
  methods: {
    affichePrix(prix) {
      return Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(prix);
    },
  },
  mounted() {
    console.log('test');
    const link = `http://localhost:3000/properties/${this.$route.params.id}`;
    console.log();
    axios.get(link).then((response) => {
      this.advert = response.data;
    });
  },
};
</script>
<style>
.details {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}
.details img {
  border-radius: 15px;
  width: 100%;
  height: max(60vh, 600px);
  object-fit: cover;
  box-shadow: 5px 5px 10px #9b9b9b;
}

.details .headerData {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details .headerData span {
  font-size: 2em;
  font-weight: bold;
  color: #42b983;
}

.details .advertDetails {
  width: 100%;
  border-radius: 15px;
  padding: 25px;
  background-color: rgb(243, 243, 243);
  margin: 50px 0;
}

.advertDetails i {
  margin-right: 10px;
  color: #42b983;
}

.details p {
  font-size: 1.1em;
  margin-bottom: 100px;
}
</style>
