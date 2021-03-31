<template>
  <article>
    <h2>{{ advert.title }}</h2>
    <p>{{ advert.description }}</p>
    <strong>{{advert.price}}</strong>
    <!-- <strong>{{ affichePrix(advert.price) }}</strong> -->
    <div id="conteneur">
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
  },
};
</script>

<style>
article {
    border: 1px #42b983 solid;
}
#conteneur{
    border: 1px black solid;
 }
.item{
    border: 1px black solid;
 }
</style>
