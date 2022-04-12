import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);
const config = { headers: {'Content-Type': 'application/json'} };

export default new Vuex.Store({
  state: {
    formValidation: {
      sectionOne: false,
      sectionTwo: false,
      sectionThree: false,
    }
  },
  getters: {
    getFormValidationSectionOne: (state) => state.formValidation.sectionOne,
  },
  mutations: {
    setFormValidationSectionOne: (state, data) => {
      state.formValidation.sectionOne = data;
    }
  },
  actions: {
    createMelody: ( { assignment } ) => 
    new Promise((resolve, reject) => {
      axios
      .put(`https://localhost:5001/Melody/CreateMelody`, assignment, config)
          .then((response) => {
            console.log(`model is ${assignment}`)

            if (response.data) {
              console.log(`data is ${response.data}`)
              resolve(response.status)
            }
            else {
              reject()
            }
          })
          .catch(() => {
            reject()
          })
      }),
    }
});