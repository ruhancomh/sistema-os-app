<template>
  <v-text-field
    v-if="ready"
    ref='field'
    v-model.lazy="numberValue"
    v-money="money"
    v-bind="$attrs"
  />

</template>

<script>
import { VMoney } from 'v-money'
export default {
  directives: { money: VMoney },
  props: {
    value: null,
    inputPrefix: {
      type: String,
      default:''
    },
    inputSuffix: {
      type: String,
      default:''
    },
    thousands: {
      type: String,
      default: '.'
    },
    decimal: {
      type: String,
      default: ','
    },
    precision: {
      type: Number,
      default: 2
    },
    returnMask: {
      type: Boolean,
      default: false
    },
    returnPrefix: {
      type: Boolean,
      default: false
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
      ready: false,
    }
  },
  computed: {
    money() {
      return {
        prefix: this.inputPrefix,
        suffix: this.inputSuffix,
        decimal: this.decimal,
        thousands: this.thousands,
        precision: this.precision,
        masked: false
      }
    }
  },
  methods: {
    umask (v) {
      if(this.returnMask || this.inputPrefix || this.inputSuffix) {
        return v
      } else {
        if (typeof v == 'string') {
          return parseFloat(v.replace('.', '').replace(',', '.'))
        }else if(Number.isInteger(v)){
          return v.toFixed(this.precision)
        } else {
          return v
        }
      }
    },

    mask(v) {
      if(Number.isInteger(v)){
        window.console.log('inteiro',v.toFixed(this.precision))
        return v.toFixed(this.precision)
      } else {
        return v
      }
    }
  },
  watch: {
    numberValue (v) {
      this.$emit('input', this.umask(v))
    },
    value (nv, ov) {
      if (this.umask(this.numberValue) != nv) {
        this.numberValue = this.mask(nv)
      }

      if (nv !== undefined) {
        this.ready = true
      }
      
    }
  },
  created () {
    this.numberValue = this.mask(this.value)
    if(this.value !== undefined){
      this.ready = true
    }
  }
}
</script>