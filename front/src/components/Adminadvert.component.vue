<template>
  <article>
    <h2>{{ advert.title }}</h2>
    <p>{{ advert.description }}</p>
    <strong>{{ affichePrix(advert.price) }}</strong>
    <div id="maison">
        <div class="item">
           bonjour
        </div>
        <div class="item">
           bonjour
        </div>
        <div class="item">
           bonjour
        </div>
        <div class="item">
           bonjour
        </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Adminadvert',
  props: {
    advert: {
      type: Object,
      required: true,
    },
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
article {
    border: 1px #42b983 solid;
}
#maison{
    border: 1px black solid;
 }
.item{
    border: 1px black solid;
 }
</style>
