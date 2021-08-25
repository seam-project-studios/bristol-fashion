import { nextId } from '@/utils/generateId';

export default {
  data: () => ({
    touched: false,
    error: undefined,
    injectedError: false
  }),
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    validate: { type: Function, required: false },
    disabled: { type: Boolean, default: () => false },
    readonly: { type: Boolean, default: () => false },
    mini: { type: Boolean, default: () => false },
    floatLabel: { type: Boolean, default: () => true },
    autocomplete: { type: Boolean, default: () => false },
    autofocus: { type: Boolean, default: () => false },
    inputId: { type: String, default: () => nextId(), required: false }
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
      this.injectedError = false;
    },
    setTouched () {
      this.touched = true;
    },
    injectError (i18nPath, payload) {
      this.injectedError = this.$t(i18nPath, payload);
      this.$refs.input.setCustomValidity(this.injectedError);
    },
    clearError () {
      this.injectedError = false;
      this.touched = false;
      this.runValidation();
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
