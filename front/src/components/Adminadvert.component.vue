<template>
  <article>
    <h2>{{ ad.title }}</h2>
    <p>{{ ad.description }}</p>
    <strong>{{ affichePrix(ad.price) }}</strong>
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
