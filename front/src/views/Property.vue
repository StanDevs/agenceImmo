<template>
    <div class="Property">
        <div class="formulaireAddProperty">
            <form>
                <!-- Information basique -->
                <div class="nameProperty input">
                    <label>Nom</label>
                    <input class="styleInput" type="text" name="propertyName" id="propertyName">
                </div>
                <div class="descriptionPoperty input">
                    <label>Description</label>
                    <input class="styleInput" type="text" name="description" id="description">
                </div>
                <div class="cityPorperty input">
                    <label>nom de la ville</label>
                    <input class="styleInput" type="text" name="city" id="city">
                </div>
                <div class="priceProperty input">
                    <label>Prix</label>
                    <input class="styleInput"  type="number" name="price" id="price">
                </div>
                    <!-- Type  apartement immeuble etc.. -->
                <div class="typeProperty input">
                    <label>Type de propriété</label>
                    <input class="styleInput" type="text" name="type" id="type">
                </div>
                    <!-- Meuble non meublé -->
                <div class="furnitureProperty input">
                    <label>Meublé</label>
                    <input type="checkbox" name="furniture" id="furniture">
                </div>
                <div class="interiorSquareMeterProperty input">
                    <label>Surface Intérieur</label>
                    <input class="styleInput" type="number" name=
                    "InteriorAreaInSquareMeter" id="AreInSquareMeter">
                </div>
                <div class="exteriorSquareMeterProperty input">
                    <label>Surface exterieur</label>
                    <input class="styleInput" type="number" name="ExteriorAreaInSquareMeter" id=
                    "ExteriorAreaInSquareMeter">
                </div>
                    <!-- étiquette énergétique -->
                    <formulaire-component ></formulaire-component>
                    <!-- Configuration du nombre de pièce -->
                    <div class="numberOfRoomProperty input">
                        <label>Nombre de chambre</label>
                    <input class="styleInput" type="number" name="room" id="room">
                    </div>
                    <div class="garageProperty input">
                        <label>Garage</label>
                    <input class="styleInput" type="checkbox" name="garage" id="garage">
                    </div>
                  <button type="submit">Valider</button>
            </form>
        </div>
    </div>
</template>

<script>
import FormulaireComponent from '../components/formulaire.component.vue';

export default {
  components: {
    FormulaireComponent,
  },
};
</script>

<style>
.Property{
  text-align: center;
  padding-top: 2em;
}

.formulaireAddProperty form{
  display: flex;
  flex-direction: column;
  background-color: rgb(212, 212, 212);
  width: 50%;
  margin: 0 auto;
   border-radius:4px;
}
.input{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:10px;
}
.styleInput{
  border: 0px;
  border-radius:4px;
  outline: none;
  }
</style>
