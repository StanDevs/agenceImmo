<template>
  <div class="Property">
    <div class="formulaireAddProperty">
      <form @submit.prevent="addAdvert">
        <div class="nameProperty input">
          <label for="nameInput">Nom</label>
          <input class="styleInput" v-model="title" type="text" name="nameInput" id="nameInput" />
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
          />
        </div>

        <div class="priceProperty input">
          <label for="priceInput">Prix</label>
          <input
            class="styleInput"
            v-model="price"
            type="number"
            name="priceInput"
            id="priceInput"
          />
        </div>

        <div class="furnitureProperty input">
          <label for="isFurnishedTrueInput">Meublé</label>
          <input
            type="radio"
            value="true"
            v-model="isFurnished"
            name="isFurnishedInput"
            id="isFurnishedTrueInput"
          />
          <label for="isFurnishedFalseInput">Non meublé</label>
          <input
            type="radio"
            value="false"
            v-model="isFurnished"
            name="isFurnishedInput"
            id="isFurnishedFalseInput"
          />
        </div>

        <formulaire-component></formulaire-component>

        <div class="sendHousePictures input">
          <label for="imageInput">Images</label>
          <input type="url" class="styleInput" v-model="image" id="imageInput" name="image" />
        </div>

        <button type="submit" class="submit">Valider</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FormulaireComponent from '../components/formulaire.component.vue';

export default {
  components: {
    FormulaireComponent,
  },
  data: () => ({
    title: '',
    type: '',
    description: '',
    inSurface: Number,
    outSurface: Number,
    price: Number,
    isFurnished: false,
    bilan: '',
    image: '',
  }),
  methods: {
    addAdvert(e) {
      const model = {
        title: this.title,
        type: this.type,
        description: this.description,
        inSurface: this.inSurface,
        outSurface: this.outSurface,
        price: this.price,
        isFurnished: this.isFurnished,
        bilan: this.bilan,
        image: this.image,
      };
      console.log(model);
      axios
        .post('http://localhost:3000/properties', model)
        .then((modelSaved) => {
          console.log(modelSaved);
        })
        .catch((err) => {
          // Erreur avec mongo
          console.log(err);
        });
      window.alert('Votre bien a été ajouté');
    },
  },
};
</script>

<style>
.Property {
  text-align: center;
  padding-top: 2em;
}
.descriptionPoperty textarea {
  resize: none;
}
.submit {
  width: 40%;
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
.formulaireAddProperty form {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  width: 40%;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgb(124, 124, 124);
}
.formulaireAddProperty form input[type='checkbox'] {
  border-radius: 4px;
  height: 20px;
  width: 20px;
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
@media screen and (max-width: 800px) {
  .formulaireAddProperty form {
    width: 100%;
    box-shadow: 0px 0px 0px rgb(124, 124, 124);
  }
}
</style>
