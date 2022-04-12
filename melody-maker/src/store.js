import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

const API_URL = process.env.VUE_APP_BASE_API_URL

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formValidation: {
      sectionOne: false,
      sectionTwo: false,
      sectionThree: false,
    },
  },
  getters: {
    getFormValidationSectionOne: (state) => state.formValidation.sectionOne,
  },
  mutations: {
    setFormValidationSectionOne: (state, data) => {
      state.formValidation.sectionOne = data;
    },
    actions: {
      createMelody: ( { model } ) => {
        new Promise((resolve, reject) => {
          axios
            .get(`${API_URL}/CreateMelody`, model)
            .then((response) => {
              if (response.data) {
                resolve(response.status)
              }
              else {
                reject()
              }
            })
            .catch(() => {
              reject()
            })
        })
      }
    }
  },
});
