<template>
    <div class="annonceItem">
      <div class="annoncement">
        <span class="spanTitle">{{advert.title}}</span>
        <span class="spanType">{{advert.type}}</span>
        <span class="spanPrice">{{ affichePrix(advert.price) }}</span>
        <div>
        </div>
        <i class="far fa-edit" @click="emptyDataForEdit(advert)"></i>
        <i class="far fa-trash-alt"  @click="emptyDataForDelete(advert)"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Adminadvert',
  data: () => ({
    itemToEdit: [],
    itemToDelete: [],
  }),
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
    emptyDataForEdit(adAdd) {
      this.itemToEdit = adAdd;
      this.$emit('edit', this.itemToEdit);
      console.log('add item press');
    },
    emptyDataForDelete(adRm) {
      this.itemToDelete = adRm;
      this.$emit('remove', this.itemToDelete);
      console.log('delete item press');
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
   width: 26%;
}
.inputButtonModif,.inputButtonDelete{
  height: 20px;
  width: 20px;
}
i{
  color:#000;
}
</style>
