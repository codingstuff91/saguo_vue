<template>
    <div class="container is-fullhd">
        <h1 class="title mb-4 py-2 is-3 is-uppercase">Creation de MCT</h1>
        <div class="columns">
            <div class="column">
                <SelectCommande />
            </div>
            <div class="column">
                <h2>Saisie informations MCT</h2>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <SelectUos />
            </div>
            <div class="column">
                <h2 class="title mt-4 is-4">Synthese des UOs</h2>
                <TableauRecapUos />
                <h3 class="title is-3">Prix total</h3>
                <h4 class="title is-3">{{ prix_total_mct }} {{ prestataire == "SMARTEC" ? "$" : "€" }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import SelectCommande from "@/components/SelectCommande.vue";
import SelectUos from "@/components/SelectUos.vue";
import TableauRecapUos from '@/components/TableauRecapUos.vue';

import { mapState } from "vuex";

export default {
    data() {
        return {
            columns: [
                {
                    field: "uo_id",
                    label: "ID UO",
                    width: "10",
                    numeric: true
                },
                {
                    field: "uo",
                    label: "Libellé UO",
                    centered: true,
                },
                {
                    field: "quantite",
                    label: "Quantité",
                    width: 10,
                    centered: true,
                },
                {
                    field: "prix",
                    label: "Prix",
                    width: 2,
                    centered: true,
                },
            ],
        };
    },
    components: {
        SelectCommande,
        SelectUos,
        TableauRecapUos
    },
    computed: mapState({
        uosMct: (state) => state.mct.uosMct,
        prix_total_mct: (state) => state.mct.prix_total_mct,
        prestataire : (state) => state.commande.prestataire
    }),
};
</script>
