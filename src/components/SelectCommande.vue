<template>
    <div>
        <h2 class="mb-4 is-size-4">Sélection du budget</h2>
        <div class="columns">
            <div class="column">
                <b-field label="Attache">
                    <b-select v-model="attache" placeholder="Choisir une attache">
                        <option value="IHENE">IHENE</option>
                        <option value="IHENR">IHENR</option>
                        <option value="IHETD">IHETD</option>
                        <option value="IHETS">IHETS</option>
                    </b-select>
                </b-field>
            </div>
            <div class="column">
                <b-field label="Programme">
                    <b-select v-model="programme" placeholder="Select a name">
                        <option v-for="programme in listeProgrammes" :key="programme.id" :value="programme.name">{{programme.name}}</option>
                    </b-select>
                </b-field>
            </div>
            <div class="column">
                <b-field label="Prestataire">
                    <b-select v-model="prestataire" placeholder="Choisir un prestataire">
                        <option v-for="prestataire in listePrestataires" :key="prestataire.id" :value="prestataire.name">{{ prestataire.name }}</option>
                    </b-select>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <b-field label="Choix Taskcode (code EOTP)">
                    <b-select v-model="taskcode" placeholder="Choisir un taskcode" expanded>
                    </b-select>
                </b-field>                
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <b-field label="Budget concerné">
                    <b-input class="mt-2" v-model="budget"></b-input>
                </b-field>
            </div>
            <div class="column is-one-quarter">
                <b-field label="Montant restant">
                    <b-input class="mt-2" v-model="budgetRestant"></b-input>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data() {
            return {
                prestataires : [],
                prestataire : null,
                programme : null,
                attache : null,
                taskcode : null,
                budget : null,
                budgetRestant : null
            }
        },
        watch: {
            attache(newValue, oldValue) {
                this.$store.dispatch('commande/getListeProgrammes',newValue)
            },
            async programme(newValue, oldValue) {
                await this.$store.dispatch('commande/getListePrestataires', newValue)
            },
            async prestataire(newValue, oldValue) {
                await this.$store.dispatch('uo/getFamillesUos', newValue)
                await this.$store.dispatch('commande/getListeTaskcodes', {
                    prestataire : newValue, 
                    programme : this.programme
                })
            }
        },
        computed : mapState({
            listeProgrammes: state => state.commande.listeProgrammes,
            listePrestataires : state => state.commande.listePrestataires
        })
    }
</script>

<style lang="scss" scoped>

</style>