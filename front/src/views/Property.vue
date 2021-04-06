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
                    <label>Nom de la ville</label>
                    <input class="styleInput" type="text" name="city" id="city">
                </div>
                <div class="priceProperty input">
                    <label>Prix</label>
                    <input class="styleInput"  type="number" name="price" id="price">
                </div>
                    <!-- Type  apartement immeuble etc.. -->
                <div class="typeProperty input">
                    <label>Type de propriété</label>
                    <select class="styleInput" name="type">
                        <option value="Maison">Maison</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Parking/box">Parking/box</option>
                        <option value="Loft/Atelier">Loft/Atelier</option>
                        <option value="Chateau">Château</option>
                        <option value="Hotel">Hôtel particulier</option>
                        <option value="Batiment">Bâtiment</option>
                        <option value="Immeuble">Immeuble</option>
                        <option value="Peniche">Péniche</option>
                        <option value="Divers">Divers</option>
                    </select>
                    <!-- <input class="styleInput" type="text" name="type" id="type"> -->
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
                  <button type="submit" class="submit">Valider</button>
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
.submit{
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
    transition: all .1s ease-in-out;
}
.submit:hover{
    background-color: transparent;
    border-color: rgb(0, 0, 0);
    color: #000;
    transition: all .1s ease-in-out;
}
.formulaireAddProperty form{
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    width: 40%;
    margin: 0 auto;
    border-radius:4px;
    box-shadow: 0px 0px 12px rgb(124, 124, 124);
}
.formulaireAddProperty form input[type='checkbox'] {
    border-radius:4px;
    height:20px;
    width: 20px;
}
.input{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:10px;
}
.styleInput{
    border: 0px;
    border: solid 1px black;
    border-radius:4px;
    outline: none;
    padding: 5px;
    font-size: 20px;
  }
.styleInput:focus{
     box-shadow: 0px 0px 2px #1c89ff;
}
@media screen and (max-width: 800px){
    .formulaireAddProperty form{
        width: 100%;
        box-shadow: 0px 0px 0px rgb(124, 124, 124);
    }
}
</style>
