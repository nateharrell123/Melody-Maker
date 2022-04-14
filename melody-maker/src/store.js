import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assignment: {
      key: "",
      keyMode: "",
      measures: 0,
      bpm: 0,
      writer: "",
    },
    creatingMelody: false,
    createdMelody: false
  },
  getters: {
    getCreatingMelody: (state) => state.creatingMelody,
    getCreatedMelody: (state) => state.createdMelody,
  },
  mutations: {
    setAssignment: (state, data) => {
      state.assignment = data;
    },
    setCreatingMelody: (state, data) => {
      state.creatingMelody = data
    }
  },
  actions: {
    createMelody: ({state}) => 
    new Promise((resolve, reject) => {
      state.creatingMelody = true
      axios
      .post(`https://localhost:5001/Melody/CreateMelody`, state.assignment)
          // .then((response) => {
          //   if (response.data) {
          //     console.log("Accepted")
          //     resolve(response.status)
          //     state.creatingMelody = false
          //     state.createdMelody = true
          //   }
          //   else {
          //     console.log("No data")
          //     reject()
          //   }
          // })
          .then(() => {
            state.creatingMelody = false
            state.createdMelody = true
            resolve()
          })
          .catch(() => {
            console.log("Rejected")
            reject()
            // error handling goes here
          })
      }),
    }
});