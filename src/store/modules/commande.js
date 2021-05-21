import commandeService from '@/services/commandeService.js';

export const namespaced = true

export const state = {
    listeCommandes : [],
    listeProgrammes : [],
    listePrestataires : [],
    commande : {},
    listeTaskcodes : [],
    prestataire : null
}

export const mutations = {
    SET_COMMANDES(state, commandes){
        state.listeCommandes = commandes
    },
    SET_PROGRAMMES(state, programmes){
        state.listeProgrammes = programmes
    },
    SET_PRESTATAIRES(state, prestataires){
        state.listePrestataires = prestataires
    },
    SET_PRESTATAIRE(state,prestataire){
        state.prestataire = prestataire
    },
    SET_TASKCODES(state, taskcodes){
        state.listeTaskcodes = taskcodes
    }
}

export const actions = {
    getCommandes({ commit }){
        commandeService.getCommandes()
        .then((response)=>{
            commit('SET_COMMANDES', response.data)
        })
    },
    getListeProgrammes({commit}, attache){
        commandeService.getProgrammes(attache)
        .then((response)=>{
            commit('SET_PROGRAMMES', response.data)
        })
    },
    getListePrestataires({commit}, programme){
        commandeService.getPrestataires(programme)
        .then((response)=>{
            commit('SET_PRESTATAIRES', response.data)
        })
    },
    getListeTaskcodes({commit}, payload){        
        commandeService.getTaskcodes(payload)
        .then((response)=>{
            console.log("prestataire envoyé au store", payload.prestataire);
            commit('SET_PRESTATAIRE',payload.prestataire)
            commit('SET_TASKCODES', response.data)
        })
        .catch((error) => console.log(error.message))
    }
}