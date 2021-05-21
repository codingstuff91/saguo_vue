<template>
    <table class="table is-bordered is-striped is-fullwidth">
        <thead>
            <th class="has-background-info-dark has-text-white">ID UO</th>
            <th class="has-background-info-dark has-text-white">LIBELLE</th>
            <th class="has-background-info-dark has-text-white">QUANTITE</th>
            <th class="has-background-info-dark has-text-white">PRIX</th>
            <th class="has-background-info-dark has-text-white">SUPPRESSION</th>
        </thead>
        <tbody>
            <tr v-for="uo in listeUos" :key="uo.id" class="tableau">
                <td>{{ uo.uo_id }}</td>
                <td>{{ uo.name }}</td>
                <td contenteditable="true" class="has-background-success has-text-white quantite" @blur="refreshTotal">{{ uo.quantite }}</td>
                <td>{{ uo.prix }}</td>
                <td width="5">
                    <b-button type="is-danger" icon-pack="fa" icon-left="trash" @click="deleteUo(uo)">
                    </b-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from "vuex";

export default {
 
    data() {
        return {
            total : 0,
            uos : []
        };
    },
    computed: mapState({
        listeUos: (state) => state.mct.uosMct
    }),
    methods: {
        async deleteUo(uo) {
            this.$buefy.dialog.confirm({
                message: 'Etes vous sur de vouloir supprimer cette UO ?',
                onConfirm: () => this.$store.dispatch('mct/removeUo', uo)
            })
        },
        refreshTotal(){
            this.total = 0

            let tableau = document.querySelectorAll('.tableau')

            tableau.forEach((element)=>{
                this.total += element.children[2].innerHTML * element.children[3].innerHTML
            })

            this.$store.dispatch('mct/getTotalMct', this.total)
        }
    }
};
</script>
