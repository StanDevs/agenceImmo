<template>
    <div class="Property">
        <div class="formulaireAddProperty">
            <form>
                <!-- Information basique -->
                <div class="nameProperty">
                    <label>Nom</label>
                    <input type="text" name="propertyName" id="propertyName">
                </div>
                <div class="descriptionPoperty">
                    <label>Description</label>
                    <input type="text" name="description" id="description">
                </div>
                <div class="cityPorperty">
                    <label>nom de la ville</label>
                    <input type="text" name="city" id="city">
                </div>
                <div class="priceProperty">
                    <label>Prix</label>
                    <input type="number" name="price" id="price">
                </div>
                    <!-- Type  apartement immeuble etc.. -->
                <div class="typeProperty">
                    <label>Type de propriété</label>
                    <input type="text" name="type" id="type">
                </div>
                    <!-- Meuble non meublé -->
                <div class="furnitureProperty">
                    <label>Meublé</label>
                    <input type="checkbox" name="furniture" id="furniture">
                </div>
                <div class="interiorSquareMeterProperty">
                    <label>Surface Intérieur</label>
                    <input type="number" name="InteriorAreaInSquareMeter" id="AreInSquareMeter">
                </div>
                <div class="exteriorSquareMeterProperty">
                    <label>Surface exterieur</label>
                    <input type="number" name="ExteriorAreaInSquareMeter" id=
                    "ExteriorAreaInSquareMeter">
                </div>
                    <!-- étiquette énergétique -->
                    <formulaire-component ></formulaire-component>
                    <!-- Configuration du nombre de pièce -->
                    <div class="numberOfRoomProperty">
                        <label>Nombre de chambre</label>
                    <input type="number" name="room" id="room">
                    </div>
                    <div class="garageProperty">
                        <label>Garage</label>
                    <input type="checkbox" name="garage" id="garage">
                    </div>
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

</style>
