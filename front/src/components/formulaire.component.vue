<template>
          <div id="displayPictureEnergyLabel">
            <input type="radio" id="A" name="energyLabel" value="A" v-model="bilanEnergetique">
            <input type="radio" id="B" name="energyLabel" value="B" v-model="bilanEnergetique">
            <input type="radio" id="C" name="energyLabel" value="C" v-model="bilanEnergetique">
            <input type="radio" id="D" name="energyLabel" value="D" v-model="bilanEnergetique">
            <input type="radio" id="E" name="energyLabel" value="E" v-model="bilanEnergetique">
            <input type="radio" id="F" name="energyLabel" value="F" v-model="bilanEnergetique">
            <input type="hidden" name="PathPicturesForEnergyLabel" :value=
            "displayPicturesEnergyLabel('../pictures',false)">
            <img :src="{pathPicturesEnergyLabel}" alt="">
            </div>
</template>
<script>
export default {
  name: 'Ad',
  data: () => ({ bilanEnergetique: 'A' }),
  props: {
    ad: Object,
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
        return `<img src="${pathPicturesEnergyLabell}" alt="Etiquette énergétique qui affiche l'indice ${Tiers}">`;
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
</style>
