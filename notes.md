Utilisateur base de données mangodb 

id : admin
mdp: admin


mongodb+srv://admin:<password>@propriete.1u3lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Pour faire les tests : POSTMAN
https://web.postman.co/workspace/My-Workspace~fc425746-0fb7-446a-8efb-469d02d4eb35/request/15058335-7dfa8bec-a0d2-49a2-ad69-c0a4bff8180f


#admin.vue 
<template>
<div class="administrateur">
    <h1>Ceci est un test</h1>
    <button>Ajouter une maison</button>
    <adminadvert-component v-for="ad in adverttab" :key="ad" :advert="ad"></adminadvert-component>
</div>
</template>

<script>
import AdminadvertComponent from '../components/Adminadvert.component.vue';

export default {
  name: 'Administrateur',
  components: {
    AdminadvertComponent,
  },
  data: () => ({
    adverttab: [{
      title: 'maison 1',
      description: 'test',
      price: 20,
    },
    {
      title: 'maison 2',
      description: 'test2',
      price: 40,
    },
    ],

  }),
};
</script>

<style>
*{
    background-color: rgb(56, 51, 51);
    color: rgb(255, 255, 255);
}
</style>



#adminadvert.component.vue

<template>
  <article>
    <h2>{{ advert.title }}</h2>
    <p>{{ advert.description }}</p>
  
    <strong>{{ affichePrix(advert.price) }}</strong>
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
#conteneur{
    border: 1px black solid;
 }
.item{
    border: 1px black solid;
 }
</style>

