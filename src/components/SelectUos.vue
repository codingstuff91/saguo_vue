<template>
    <div class="pb-4 notification is-link" style="border : 2px solid indigo; border-radius : 15px;">
        <h2 class="title mt-4 mb-0 is-size-4">Ajouter une UO</h2>
        <h3 class="mt-0 mb-4 subtitle"><span class="has-text-danger">U</span>nité d'<span class="has-text-danger">O</span>euvre</h3>

        <b-field label="Famille UO" custom-class="has-text-white">
            <b-select v-model="famille" placeholder="Choisir une famille d'UO">
                <option
                    v-for="famille in listeFamilles"
                    :value="famille.name"
                    :key="famille.id"
                    >{{ famille.name }}</option
                >
            </b-select>
        </b-field>

        <b-field label="Liste des UOs" custom-class="has-text-white">
            <b-select v-model="uo" placeholder="Choisir un UO">
                <option v-for="uo in listeUos" :value="uo.name" :key="uo.id">{{
                    uo.name
                }}</option>
            </b-select>
        </b-field>

        <input type="hidden" v-model="uo_id" />

        <b-field label="Prix" custom-class="has-text-white">
            <b-input class="px-6" v-model="prix"  disabled></b-input>
        </b-field>

        <b-field label="Quantité" custom-class="has-text-white">
            <b-input rounded class="px-6" v-model="quantite"></b-input>
        </b-field>

        <b-field label="Date livraison" custom-class="has-text-white">
            <b-datepicker
                class="px-6"
                rounded
                v-model="date_livraison"
                :show-week-number="showWeekNumber"
                :locale="locale"
                placeholder="Click to select..."
                trap-focus
                :unselectable-days-of-week="ForbiddenDays">
            </b-datepicker>
        </b-field>

        <b-button rounded 
            custom-class="has-text-white"
            type="is-success" 
            class="mt-4" 
            icon-pack="fa" 
            icon-left="plus" @click="addUo">
            Ajouter cet UO
        </b-button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            famille: null,
            quantite: null,
            uo: null,
            uo_id: null,
            prix: null,
            date_livraison : null,
            showWeekNumber : false,
            locale : "fr-CA",
            ForbiddenDays : [0,6]
        };
    },
    computed: mapState({
        listeFamilles: (state) => state.uo.listeFamilles,
        listeUos: (state) => state.uo.listeUos,
    }),
    watch: {
        famille(newValue, oldValue) {
            this.$store.dispatch("uo/getListeUos", newValue);
        },
        uo(newValue, oldValue) {
            const uo_to_search = this.listeUos.find(
                (element) => element.name === this.uo
            );
            this.prix = uo_to_search.prix;
            this.uo_id = uo_to_search.id;
        },
    },
    methods: {
        addUo() {
            if (!this.uo || !this.quantite || !this.date_livraison) {
                this.$buefy.dialog.alert({
                    title: 'ERREUR',
                    message: 'Veuillez choisir une UO, une quantité et une <b>date de livraison</b>',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'exclamation-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true,
                    size : 'is-medium'
                })
                return false;
            }else{

                let uo_to_add = {
                    uo_id: this.uo_id,
                    name: this.uo,
                    quantite: this.quantite,
                    prix: this.prix,
                    date_livraison : this.date_livraison
                };
    
                this.$store.dispatch("mct/addUoMct", uo_to_add);
            }
        },
    },
};
</script>
