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
    assignmentResponse: {},
    creatingMelody: false,
    createdMelody: false
  },
  getters: {
    getCreatingMelody: (state) => state.creatingMelody,
    getCreatedMelody: (state) => state.createdMelody,
    getAssignmentResponse: (state) => state.assignmentResponse
  },
  mutations: {
    setAssignment: (state, data) => {
      state.assignment = data;
    },
    setCreatingMelody: (state, data) => {
      state.creatingMelody = data
    },
    setAssignmentResponse: (state, data) => {
      state.assignmentResponse = data
    }
  },
  actions: {
    createMelody: ({state, commit}) => 
    new Promise((resolve, reject) => {
      state.creatingMelody = true
      axios
      .post(`https://localhost:5001/Melody/CreateMelody`, state.assignment)
          .then((response) => {
            if (response.data) {
              resolve(response.status)
              commit('setAssignmentResponse', response.data)

              state.creatingMelody = false
              state.createdMelody = true
            }
            else {
              reject()
            }
          })
          // .then(() => {
          //   state.creatingMelody = false
          //   state.createdMelody = true
          //   resolve()
          // })
          .catch(() => {
            console.log("Rejected")
            reject()
            // error handling goes here
          })
      }),
    }
});