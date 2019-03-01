<template>
  <v-text-field
    ref='field'
    :prefix='prefix'
    v-model.lazy="numberValue"
    :error-messages="errorMessages"
    v-money="config"
    v-bind="$attrs"
  />
  
</template>

<script>
import {VMoney} from 'v-money'
export default {
directives: {money: VMoney},
  props: {
    value: null,
    'error-messages': null,
    allowNegative: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String
    },
    thousandsSeparator: {
      type: String,
      default: '.'
    },
    decimalSeparator: {
      type: String,
      default: ','
    },
    languageCode: {
      type: String,
      default: 'pt-BR'
    }
  },
  data () {
    return {
      numberValue: null,
      inputValue: 0,
      isMasked: true,
      config: {
          decimal: ',',
          thousands: '.',
          masked: false,
          precision: 2
        }
    }
  },
  methods: {
      umask(v) {
          if(typeof v == 'string'){
              return parseFloat(v.replace('.','').replace(',','.'))
          } else {
              return v
          }
      }
  },
  watch: {
    numberValue (v) {
      this.$emit('input', this.umask(v))
    },
    value (nv,ov) {
        if(this.umask(this.numberValue) != nv){
            this.numberValue = nv
        }
    }
  },
  created () {
  }
}
</script>