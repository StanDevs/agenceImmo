<template>
    <div id="edit">
        <div class="cache" @click="emptyDataForEdit()">
        </div>
    <div class="formulaireEditProperty">
      <i class="far fa-times-circle exit" @click="emptyDataForEdit()"></i>
      <div class="preview">
        <ad-component  :key="dataToSend.id" :ad="dataToSend"></ad-component>
      </div>
      <div class="content">
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
              value = "true"
              v-model="isFurnished"
              name="isFurnishedInput"
              id="isFurnishedTrueInput"
            />
            <label for="isFurnishedFalseInput">Non meublé</label>
            <input
              type="radio"
              name="isFurnishedInput"
              id="isFurnishedFalseInput"
              v-model="isFurnished"
              value = "false"
            />
          </div>
          <FormulaireForEdit-component :key="this.advert._id"  :advert=
        "advert" @editenrj="processToChargeVarForAddBilan"></FormulaireForEdit-component>
          <div class="sendHousePictures input">
            <label for="imageInput">Images</label>
            <input type="url" class="styleInput" v-model="image" id="imageInput" name=
            "image" :placeholder="advert.image" />
          </div>
          <button type="submit" class="submit">Valider</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormulaireForEditComponent from './formulaire.component.vue';
import AdComponent from './Ad.component.vue';

export default {
  components: {
    FormulaireForEditComponent,
    AdComponent,
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
    this.dataToSend = { ...this.advert };
  },
  watch: {
    price() {
      this.dataToSend.price = this.price;
    },
    title() {
      this.dataToSend.title = this.title;
    },
    type() {
      this.dataToSend.type = this.type;
    },
    description() {
      this.dataToSend.description = this.description;
    },
    inSurface() {
      this.dataToSend.inSurface = this.inSurface;
    },
    outSurface() {
      this.dataToSend.outSurface = this.outSurface;
    },
    isFurnished() {
      this.dataToSend.isFurnished = this.isFurnished;
    },
    bilan() {
      this.dataToSend.bilan = this.bilan;
    },
    image() {
      this.dataToSend.image = this.image;
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
      if (this.price !== this.advert.price || this.title !== this.advert.title
      || this.type !== this.advert.type || this.description !== this.advert.description
      || this.inSurface !== this.advert.inSurface || this.outSurface !== this.advert.outSurface
      || this.isFurnished !== this.advert.isFurnished || this.bilan !== this.advert.bilan
      || this.image !== this.advert.image) {
        const reponse = window.confirm('êtes vous sur de ne pas vouloir enregistrer ?');
        if (reponse) {
          this.$emit('edit', itemToEdit);
        }
      } else {
        this.$emit('edit', itemToEdit);
      }
    },
    processToChargeVarForAddBilan(value) {
      this.dataToSend.bilan = value;
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
  display: flex;
    z-index: 2;
    position: absolute;
    left: 20%;
    background-color: rgb(255, 254, 254);
    width: 60%;
    margin: 0 auto;
}
.preview{
  margin: auto 0 ;
  width: 45%;
  padding-left: 5em;
}
.content{
  width: 55%;
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
  width: 35%;
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
.exit{
  position: absolute;
  right: 0;
  padding: 5px;
  color: rgb(255, 0, 0);
  font-size: 25px;
}
</style>
