import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sectionOne: false,
        sectionTwo: false,
        sectionThree: false
    },
    getters: {
        getFormValidationSectionOne: (state) => state.formValidation.sectionOne
    },
    mutations: {
        setFormValidationSectionOne: (state, data) => {
            state.formValidation.sectionOne = data
        }
    }
});