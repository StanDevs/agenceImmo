<template>
    <div class="annonceItem">
      <div class="annoncement">
        <span class="spanTitle">{{advert.title}}</span>
        <span class="spanType">{{advert.type}}</span>
        <span class="spanPrice">{{advert.price}}</span>
        <div>
        </div>
         <a href=""><i class="fas fa-plus"></i></a>
         <a href=""><i class="far fa-trash-alt"></i></a>
      </div>
    </div>
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
.annonceItem{
  display: block;
  width: 80%;
  margin: 0 auto;
}
.annonceItem:nth-child(even){
  background-color: rgb(248, 248, 248);
}
.annonceItem:nth-child(odd){
  background-color: rgb(221, 221, 221);
}
.annoncement{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
.spanTitle,.spanType,.spanPrice{
   width: 15%;
}
.inputButtonModif,.inputButtonDelete{
  height: 20px;
  width: 20px;
}
i{
  color:#000;
}
</style>
