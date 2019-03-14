<template>
    <div class="v-light-form">
        <v-dialog
            v-model="dialogActive"
            max-width="290"
            :lazy="true"
        >
        <template v-slot:activator="{on}">
            <v-btn
                small
                fab
                flat
                dark
                color="primary"
                v-on="on"
            >
                <v-icon dark>mdi-library-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline" v-if="title">{{ title }}</v-card-title>
            <v-card-text>
                <v-form
                    v-model="formValid"
                    @submit.prevent=""
                    ref="form"
                >
                    <v-layout
                        row
                        wrap
                    >
                        <slot
                            name="form"
                            v-bind:fields="formFields"
                            v-bind:rules="rules"
                        ></slot>
                    </v-layout>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    flat="flat"
                    @click="closeDialog()"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="primary"
                    flat="flat"
                    @click="submit()"
                >
                    Confirmar
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: ''
        },
        fields: {
            type: Object,
            default: () => {}
        },
        rules: {
            type: Object,
            default: () => {}
        },
        clearOnClose: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            dialogActive: false,
            formValid: false,
            formFields: {}
        }
    },
    
    methods: {
        showDialog() {
            this.dialogActive = true
        },

        closeDialog() {
            this.dialogActive = false

            if(this.clearOnClose)
                this.formFields = {}
        },

        submit () {
            if (this.$refs.form.validate()) {
                this.$emit('confirm',this)
                this.closeDialog()
            }
        }
    }
}
</script>