import mctService from '@/services/mctService.js';

export const namespaced = true

export const state = {
    uosMct : [],
    prix_total_mct : 0
}

export const mutations = {
    ADD_UO(state, uo){
        state.uosMct.push(uo)
        state.prix_total_mct += parseInt(uo.quantite) * uo.prix
    },
    REMOVE_UO(state, uo){
        state.prix_total_mct -= (uo.prix * parseInt(uo.quantite))
        state.uosMct = state.uosMct.filter((element) => element.uo_id != uo.uo_id)
    },
    SET_MCT_PRICE(state, total){
        state.prix_total_mct = total
    }
}

export const actions = {
    addUoMct({ commit }, uo){
        console.log("UO ajouté", uo)
        commit('ADD_UO', uo)
    },
    removeUo({ commit }, uo){
        commit('REMOVE_UO', uo)
    },
    getTotalMct({ commit }, total){
        commit('SET_MCT_PRICE', total)
    }
}