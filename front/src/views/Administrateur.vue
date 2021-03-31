<template>
<div class="administrateur">
    <h1>Ceci est un test</h1>
    <button>Ajouter une maison</button>
    <adminadvert-component></adminadvert-component>
</div>
</template>

<script>
import AdminadvertComponent from '../components/Adminadvert.component.vue';

export default {
  name: 'Administrateur',
  components: {
    AdminadvertComponent,
  },
};
</script>

<style>
*{
    background-color: rgb(56, 51, 51);
    color: rgb(255, 255, 255);
}
</style>
