<template>
    <div class="Property">
        <div class="formulaire">
        <form>
            <!-- Information basique -->
            <input type="text" name="propertyName" id="propertyName">
            <input type="text" name="description" id="description">
            <input type="text" name="city" id="city">
            <input type="number" name="price" id="price">
            <!-- Type  apartement immeuble etc.. -->
            <input type="text" name="type" id="type">
            <!-- Meuble non meublé -->
            <input type="checkbox" name="furniture" id="furniture">
            <input type="number" name="InteriorAreaInSquareMeter" id="AreInSquareMeter">
            <input type="number" name="ExteriorAreaInSquareMeter" id="ExteriorAreaInSquareMeter">
            <input type="date" name="constructYears" id="constructYears">
            <!-- étiquette énergétique -->
            <formulaire-component ></formulaire-component>
            <!-- Configuration du nombre de pièce -->
            <input type="number" name="room" id="room">
            <input type="checkbox" name="garage" id="garage">
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