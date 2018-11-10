import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    sideNav: false,
    states: ["Abia","Adamawa","Akwa-Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"
    ],
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Mobile', value: 'phone' },
      { text: 'Email', value: 'email' },
      { text: 'State', value: 'state' },
      { text: 'Medical Box', value: 'medicalBox' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
  },
  mutations:{} ,
  actions:{} ,
  getters:{
    states (state) {
      return state.states;
    } ,

    headers (state) {
      return state.headers;
    } ,
    foundations (state) {
      return state.Foundations;
    },
    }
});
