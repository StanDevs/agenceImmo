<template>
          <div id="displayPictureEnergyLabel" class="input">
            <label>Bilan énergétique</label>
            <div>
              <input type="radio" id="A" name="energyLabel" value="A" v-model="bilanEnergetique">
               <span>A</span>
              <input type="radio" id="B" name="energyLabel" value="B" v-model="bilanEnergetique">
              <span>B</span>
              <input type="radio" id="C" name="energyLabel" value="C" v-model="bilanEnergetique">
              <span>C</span>
              <input type="radio" id="D" name="energyLabel" value="D" v-model="bilanEnergetique">
              <span>D</span>
              <input type="radio" id="E" name="energyLabel" value="E" v-model="bilanEnergetique">
              <span>E</span>
              <input type="radio" id="F" name="energyLabel" value="F" v-model="bilanEnergetique">
              <span>F</span>
              <input type="hidden" name="PathPicturesForEnergyLabel" :value=
              "displayPicturesEnergyLabel('../pictures',false)">
            </div>
            <!-- <img src= "/pictures/ALight.png" alt="mm"> -->
            <img :src= "displayPicturesEnergyLabel('/pictures',false)" alt="mm">
          </div>
</template>
<script>
export default {
  name: 'Ad',
  pathPicturesEnergyLabel: 'ceci est un test',
  data: () => ({
    bilanEnergetique: 'A',
    pathPicturesEnergyLabel: '/pictures',
  }),
  props: {
    type: Object,
  },
  methods: {
    displayPicturesEnergyLabel(pathPicturesEnergyLabel, boolDarkOrLight) {
      const Tiers = this.bilanEnergetique;
      // Convention de nommage des images : ALight.png BLight.png ADark.png BDark.png
      const TiersList = ['A', 'B', 'C', 'D', 'E', 'F'];
      let color = '';

      if (TiersList.includes(Tiers)) {
        if (boolDarkOrLight === true) {
          color = 'Dark';
        } else {
          color = 'Light';
        }
        const pathPicturesEnergyLabell = `${pathPicturesEnergyLabel}/${Tiers}${color}.png`;
        return `${pathPicturesEnergyLabell}`;
      }
      if (Tiers === 'Inexistant') {
        return "<p>Il n'y a pas d'étiquette énergetique</p>";
      }
      return '<p class="error">Erreur une injection a été détecter, merci de prévenir votre administrateur </p>';
    },
  },
};
</script>
<style>
  article {
    border: 1px #42b983 solid;
  }
  #displayPictureEnergyLabel input[type='radio']{
    height:15px;
    width: 15px;
  }
  #displayPictureEnergyLabel span{
    font-size: 20px;
  }
</style>
