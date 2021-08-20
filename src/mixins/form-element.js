export default {
  data: () => ({
    touched: false,
    error: undefined,
    injectedError: false
  }),
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    validate: { type: Function, required: false },
    disabled: { type: Boolean, default: () => false },
    readonly: { type: Boolean, default: () => false },
    mini: { type: Boolean, default: () => false },
    floatLabel: { type: Boolean, default: () => true }
  },
  computed: {
    showError () {
      return this.injectedError || (this.touched && this.error);
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value);
      this.setTouched();
    },
    setTouched () {
      this.touched = true;
    },
    injectError (i18nPath, payload) {
      this.injectedError = this.$t(i18nPath, payload);
    },
    clearError () {
      this.injectedError = undefined;
      this.touched = false;
    },
    runValidation () {
      if (this.validate) {
        this.error = this.validate(this.value);
        if (this.error) {
          this.$emit('valid', { name: this.name, valid: false });
          this.$refs.input.setCustomValidity(this.error);
        } else {
          this.$emit('valid', { name: this.name, valid: true });
          this.$refs.input.setCustomValidity('');
        }
      }
    }
  },
  mounted () {
    // synchronous script loading means window.app is not defined
    this.$nextTick(() => {
      this.runValidation();
    });
  },
  watch: {
    value () {
      this.runValidation();
    }
  }
};
