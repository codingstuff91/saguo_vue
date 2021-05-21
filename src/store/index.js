import Vue from 'vue'
import Vuex from 'vuex'

import * as commande from '@/store/modules/commande.js';
import * as uo from '@/store/modules/uo.js';
import * as mct from '@/store/modules/mct.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    uo,
    mct,
    commande
  }
})
