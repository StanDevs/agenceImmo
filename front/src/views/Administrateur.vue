<template>
  <div class="administrateur">
    <div class="adminNavBar">
      <a href="/administrateur">Administrateur</a>
      <a href="/property" class="addProperty">Ajouter un bien</a>
    </div>
    <div v-if="SendToForm._id != undefined">
      <editComponent
        :key="SendToForm._id"
        :advert="SendToForm"
        @edit="processToChargeVarForedit"
      ></editComponent>
    </div>
    <adminadvert-component
      v-for="type in adverttab"
      :key="type.id"
      :advert="type"
      @edit="processToChargeVarForAdd"
      @remove="removeAdvert"
    ></adminadvert-component>
  </div>
</template>

<script>
import axios from 'axios';
import AdminadvertComponent from '../components/Adminadvert.component.vue';
import editComponent from '../components/edit.component.vue';

export default {
  name: 'Administrateur',
  components: {
    AdminadvertComponent,
    editComponent,
  },
  methods: {
    processToChargeVarForAdd(value) {
      this.SendToForm = value;
    },
    processToChargeVarForedit(value) {
      this.SendToForm = value;
    },
    removeAdvert(advert) {
      console.log(advert._id);
      this.adverttab = this.adverttab.filter((ad) => ad._id !== advert._id);
    },
  },
  data: () => ({
    adverttab: [
      {
        id: 1,
        title: 'maison 1',
        type: 'Maison',
        price: 20,
      },
      {
        id: 2,
        title: 'maison 2',
        type: 'Appartement',
        price: 40,
      },
    ],
    SendToForm: [],
    SendToEdit: [],
  }),
  mounted() {
    console.log('test');
    axios.get('http://localhost:3000/properties').then((response) => {
      console.log(response.data);
      this.adverttab = response.data;
    });
  },
};
</script>

<style>
.adminNavBar {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #42b983;
  padding: 15px;
  margin-bottom: 2%;
}

.adminNavBar a {
  color: #fff;
  padding: 5px;
  margin-right: 5px;
  margin-left: 5px;
  text-decoration: none;
}
.adminNavBar a:hover {
  transition: 0.3s;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.144);
}
</style>
