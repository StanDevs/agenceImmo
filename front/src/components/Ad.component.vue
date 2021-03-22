<template>
  <article>
    <h2>{{ ad.title }}</h2>
    <p>{{ ad.description }}</p>
    <strong>{{ affichePrix(ad.price) }}</strong>
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
  article {
    border: 1px #42b983 solid;
  }
</style>
