export default {
  data: () => ({
    touched: false,
    error: undefined
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
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value);
      this.setTouched();
    },
    setTouched () {
      this.touched = true;
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
