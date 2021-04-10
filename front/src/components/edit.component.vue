<template>
    <div id="edit">
        <div class="cache">
        </div>
    <div class="formulaireEditProperty">
      <i class="far fa-times-circle" @click="emptyDataForEdit()"></i>
      <form >
        <div class="nameProperty input">
          <label for="nameInput">Nom</label>
          <input class="styleInput" v-model="title" type="text" name=
          "nameInput" id="nameInput" :placeholder="advert.title" />
        </div>

        <div class="typeProperty input">
          <label for="typeInput">Type de propriété</label>
          <select class="styleInput" v-model="type" name="typeInput" id="typeInput">
            <option value="Maison">Maison</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
            <option value="Parking/box">Parking/box</option>
          </select>
        </div>

        <div class="descriptionPoperty input">
          <label for="descriptionInput">Description</label>
          <textarea
            class="styleInput"
            v-model="description"
            name="descriptionInput"
            id="descriptionInput"
            :placeholder="advert.description"
          ></textarea>
        </div>

        <div class="interiorSquareMeterProperty input">
          <label for="inSurfaceInput">Surface Intérieure</label>
          <input
            class="styleInput"
            type="number"
            v-model="inSurface"
            name="inSurfaceInput"
            id="inSurfaceInput"
            :placeholder="advert.inSurface"
          />
        </div>

        <div class="exteriorSquareMeterProperty input">
          <label for="outSurfaceInput">Surface exterieure</label>
          <input
            class="styleInput"
            type="number"
            v-model="outSurface"
            name="outSurfaceInput"
            id="outSurfaceInput"
            :placeholder="advert.outSurface"
          />
        </div>

        <div class="priceProperty input">
          <label for="priceInput">Prix</label>
          <input
            class="styleInput"
            type="number"
            v-model="price"
            name="priceInput"
            id="priceInput"
          />
        </div>

        <div class="furnitureProperty input">
          <label for="isFurnishedTrueInput">Meublé</label>
          <input
            type="radio"
            :value="advert.isFurnished"
            v-model="isFurnished"
            name="isFurnishedInput"
            id="isFurnishedTrueInput"
            :placeholder="advert.isFurnished"
            :checked="advert.isFurnished"
          />
          <label for="isFurnishedFalseInput">Non meublé</label>
          <input
            type="radio"
            :value="!advert.isFurnished"
            v-model="isFurnished"
            name="isFurnishedInput"
            id="isFurnishedFalseInput"
            :checked="true"
          />
        </div>
        <FormulaireForEdit-component></FormulaireForEdit-component>
        <div class="sendHousePictures input">
          <label for="imageInput">Images</label>
          <input type="url" class="styleInput" v-model="image" id="imageInput" name=
          "image" :placeholder="advert.image" />
        </div>
        <button type="submit" class="submit">Valider</button>
        <p>{{dataToSend.price}}</p>
      </form>
    </div>
  </div>
</template>

<script>
import FormulaireForEditComponent from './formulaire.component.vue';

export default {
  components: {
    FormulaireForEditComponent,
  },
  data: () => ({
    title: '',
    type: '',
    description: '',
    inSurface: Number,
    outSurface: Number,
    price: Number,
    isFurnished: Boolean,
    bilan: '',
    image: '',
    dataToSend: [{
      description: '',
      image: '',
      inSurface: '',
      isFurnished: '',
      outSurface: '',
      price: '',
      title: '',
      type: '',
    }],
  }),
  mounted() {
    this.price = this.advert.price;
    this.title = this.advert.title;
    this.type = this.advert.type;
    this.description = this.advert.description;
    this.inSurface = this.advert.inSurface;
    this.outSurface = this.advert.outSurface;
    this.isFurnished = this.advert.isFurnished;
    this.bilan = this.advert.bilan;
    this.image = this.advert.image;
  },
  watch: {
    price() {
      this.dataToSend.price = this.price;
    },
  },
  props: {
    advert: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPrice() {
      return this.advert.price;
    },
    emptyDataForEdit() {
      const itemToEdit = [];
      this.$emit('edit', itemToEdit);
      console.log(itemToEdit);
    },
  },
};

</script>

<style>
.cache{
    display: block;
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(32, 32, 32, 0.514);
    z-index: 2;
}
.formulaireEditProperty{
    z-index: 2;
    position: absolute;
    left: 25%;
    background-color: rgb(255, 254, 254);
    width: 50%;
    margin: 0 auto;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.styleInput {
  border: 0px;
  border: solid 1px black;
  border-radius: 4px;
  outline: none;
  padding: 5px;
  font-size: 20px;
}
.styleInput:focus {
  box-shadow: 0px 0px 2px #1c89ff;
}
.submit {
  width: 25%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 18px;
  background-color: #1c89ff;
  border: solid 1px transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.1s ease-in-out;
}
.submit:hover {
  background-color: transparent;
  border-color: rgb(0, 0, 0);
  color: #000;
  transition: all 0.1s ease-in-out;
}
.descriptionPoperty textarea {
  resize: none;
}
</style>
