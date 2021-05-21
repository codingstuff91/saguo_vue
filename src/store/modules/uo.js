import uoService from '@/services/uoService.js';

export const namespaced = true

export const state = {
    listeFamilles : [],
    listeUos : [],
    prixUo : null
}

export const mutations = {
    SET_FAMILLES(state, familles){
        state.listeFamilles = familles
    },
    SET_UOS(state, uos){
        state.listeUos = uos
    }
}

export const actions = {
    getFamillesUos({ commit }) {
        uoService.getFamilles()
        .then((response)=>{
            commit('SET_FAMILLES', response.data)
        })
    },
    getListeUos({ commit }, famille) {
        uoService.getListeUos(famille)
        .then((response)=>{
            commit('SET_UOS', response.data)
        })
    }
}