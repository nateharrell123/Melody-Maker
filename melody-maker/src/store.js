import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_BASE_API_URL;

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
    createdMelody: false,
    melodyError: false,
    hasVisited: false,
    assignedWriter: "",
  },
  getters: {
    getCreatingMelody: (state) => state.creatingMelody,
    getCreatedMelody: (state) => state.createdMelody,
    getAssignmentResponse: (state) => state.assignmentResponse,
    getAssignedWriter: (state) => state.assignedWriter,
    getMelodyError: (state) => state.melodyError,
    getHasVisited: (state) => state.hasVisited
  },
  mutations: {
    setAssignment: (state, data) => {
      state.assignment = data;
    },
    setCreatingMelody: (state, data) => {
      state.creatingMelody = data
    },
    setCreatedMelody: (state, data) => {
      state.createdMelody = data;
    },
    setAssignmentResponse: (state, data) => {
      state.assignmentResponse = data
    },
    setAssignedWriter: (state, data) => {
      state.assignedWriter = data
    },
    setHasVisited: (state, data) => {
      state.hasVisited = data;
    }
  },
  actions: {
    createMelody: ({state, commit}) => 
    new Promise((resolve, reject) => {
      state.creatingMelody = true
      console.log(API_URL)
      axios
      .post(`${API_URL}/Melody/CreateMelody`, state.assignment)
          .then((response) => {
            if (response.data) {
              resolve(response.status)
              commit('setAssignmentResponse', response.data)
              commit('setAssignedWriter', response.data.writer)

              state.creatingMelody = false
              state.createdMelody = true
              state.melodyError = false
            }
            else {
              reject()
              state.creatingMelody = false
              state.createdMelody = false
              state.melodyError = true
            }
          })
          // .then(() => {
          //   state.creatingMelody = false
          //   state.createdMelody = true
          //   resolve()
          // })
          .catch(() => {
            reject()
            state.creatingMelody = false
            state.createdMelody = false
            state.melodyError = true
            // error handling goes here
          })
      }),
    }
});