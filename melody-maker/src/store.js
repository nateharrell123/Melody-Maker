import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assignment: {
      key: "",
      keyMode: "",
      measures: 0,
      bpm: 0,
      writer: "",
    }
  },
  getters: {
    getFormValidationSectionOne: (state) => state.assignment.sectionOne,
  },
  mutations: {
    setAssignment: (state, data) => {
      state.assignment = data;
    }
  },
  // actions: {
  //   createMelody: ({state}) => 
  //   new Promise((resolve, reject) => {
  //     console.log(state.assignment)
  //     axios
  //     .put(`https://localhost:5001/Melody/CreateMelody`, state.assignment)
  //         .then((response) => {
  //           if (response.data) {
  //             console.log(`data is ${response.data}`)
  //             resolve(response.status)
  //           }
  //           else {
  //             reject()
  //           }
  //         })
  //         .catch(() => {
  //           reject()
  //         })
  //     }),
  //   }
});