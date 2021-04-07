<template>
  <article class="advert">
    <img :src="ad.image" alt="" />
    <div class="advertData">
      <h2>{{ ad.title }}</h2>
      <p>{{ ad.description }}</p>

      <div class="advertDetails">
        <div><i class="fas fa-home"></i> {{ ad.inSurface }}m²</div>
        <div><i class="fas fa-tree"></i> {{ ad.outSurface }}m²</div>
        <div>
          <span class="price">{{ affichePrix(ad.price) }}</span>
        </div>
      </div>

      <div class="advertAction">
        <a href="">Ajouter aux favoris</a>
        <a href="">Voir plus</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Ad',
  props: {
    ad: Object,
  },
  methods: {
    affichePrix(prix) {
      return Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(prix);
    },
  },
};
</script>

<style>
.advert {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px #9b9b9b;

  text-align: left;
}

.advert img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 1px 5px #9b9b9b;
}

.advertData {
  padding: 25px 20px;
}

.advertData h2 {
  margin-bottom: 15px;
}

.advertData p {
  margin-bottom: 15px;
  line-height: 1.2em;
  height: calc(1.2em * 3);
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.advertDetails {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  color: #9b9b9b;
}

.advertDetails i {
  margin-right: 5px;
  color: #42b983;
}

.advertDetails .price {
  font-weight: 700;
  color: #42b983;
  font-size: 1.4em;
}

.advertAction {
  display: flex;
  justify-content: space-between;
}

.advertAction a {
  padding: 15px;
  border: 2px #42b983 solid;
  color: black;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 500;
  color: #42b983;
}

.advertAction a:last-child {
  background-color: #42b983;
  color: white;
}
</style>
