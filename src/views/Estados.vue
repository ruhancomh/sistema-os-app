<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <v-flex shrink>
                <v-card color="white">
                    <v-card-title>
                        <v-btn color="primary"  large>
                            <v-icon dark>add</v-icon>
                            Adicionar estado
                        </v-btn>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                        <v-data-table
                            :headers="tableHeaders"
                            :items="tableItems"
                            class="elevation-1"
                        >
                            <template slot="items" slot-scope="props">
                                <td>{{ props.item.nome }}</td>
                                <td>{{ props.item.uf }}</td>
                                <td class="justify-center layout px-0">
                                    <v-icon
                                        small
                                        class="mr-2"
                                    >
                                        edit
                                    </v-icon>
                                    <v-icon
                                        small
                                    >
                                        delete
                                    </v-icon>
                                </td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            tableHeaders:['Nome','UF',''],
            tableItems: [
                {
                    nome: 'Espirito Santo',
                    uf: 'ES',
                }
            ]
        }
    }
}
</script>