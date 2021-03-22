<template>
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
    <!-- Deperdition de chaleur (graphique ) Depsne énetgetique DPE KW*H   iNDICE GAZ EFFET DE SERRE  -->
    
    <!-- étiquette énergétique -->
    
    <input type="radio" id="A" name="energyLabel" value="A" v-model="bilanEnergetique">
    <input type="radio" id="B" name="energyLabel" value="B" v-model="bilanEnergetique">
    <input type="radio" id="C" name="energyLabel" value="C" v-model="bilanEnergetique">
    <input type="radio" id="D" name="energyLabel" value="D" v-model="bilanEnergetique">
    <input type="radio" id="E" name="energyLabel" value="E" v-model="bilanEnergetique">
    <input type="radio" id="F" name="energyLabel" value="F" v-model="bilanEnergetique">
    <input type="radio" id="none" name="energyLabel" value="Inexistant">

    <input type="hidden" name="PathPicturesForEnergyLabel" :value="displayPicturesEnergyLabel()">
    <div id="displayPictureEnergyLabel"></div>
    
     <!-- Configuration de l'état de du bien -->

    <!-- <input type="radio" id="badTiers" name="stateTiers" value="Mauvaise état">
    <label for="male">Male</label><br>
    <input type="radio" id="mediumTiers" name="stateTiers" value="état correcte">
    <label for="female">Female</label><br>
    <input type="radio" id="goodTiers" name="stateTiers" value="Bonne état">
    <label for="other">Other</label>  -->

    <!-- Configuration du nombre de pièce -->
    <input type="number" name="room" id="room">
    <input type="checkbox" name="garage" id="garage">
    


    <h2>{{ ad.title }}</h2>
    <p>{{ ad.description }}</p>
    <strong>{{ affichePrix(ad.price) }}</strong>
  </form>
</template>

<script>
export default {
  name: 'Ad',
  data: () => {
      return {bilanEnergetique: 'A'}
  },
  props: {
    ad: Object,
  },
  methods: {
    displayPicturesEnergyLabel(pathPicturesEnergyLabel,boolDarkOrLight) {
         let Tiers = this.bilanEnergetique
        //Convention de nommage des images : ALight.png BLight.png ADark.png BDark.png
        TiersList = ["A","B","C","D","E","F"]
        let color ="";

        if(TiersList.includes(Tiers)){
            if(boolDarkOrLight == true){
                color = "Dark";
            }
            else{
                color = "Light";
            }
            pathPicturesEnergyLabel = pathPicturesEnergyLabel+"/"+Tiers+color+".png";
              
             return "<img src=\""+pathPicturesEnergyLabel+"\" alt=\"Etiquette énergétique qui affiche l'indice "+Tiers+"\">";
        }
        else{
            if(Tiers ==="Inexistant"){
                return "<p>Il n'y a pas d'étiquette énergetique<\/p>"
            }
            else{
                return "<p class=\"error\">Erreur une injection a été détecter, merci de prévenir votre administrateur <\/p>"
            }   
        }
    },
  },
};
</script>

<style>
  article {
    border: 1px #42b983 solid;
  }
</style>
