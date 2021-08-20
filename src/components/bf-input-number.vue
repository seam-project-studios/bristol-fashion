<template>
  <bf-input-wrapper
    :label="label"
    :class="{ error: showError }"
    :name="name"
  >
    <input
      ref="input"
      type="number"
      :name="name"
      :id="name"
      :value="value"
      @input="onInput"
      @blur="setTouched"
      @invalid="setTouched"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :readonly="readonly"
      step="any"
      :aria-label="name"
      :aria-describedby="`help-text-${name}`"
    />
    <template #help-error v-if="showError">
      <div role="alert">
        {{ injectedError || error }}
      </div>
    </template>
    <template #help-text>
      <div :id="`help-text-${name}`">
        <slot name="help-text" />
      </div>
    </template>
  </bf-input-wrapper>
</template>

<script>
import bfInputWrapper from './bf-input-wrapper.vue';
import feMixin from '@/mixins/form-element';

export default {
  components: { bfInputWrapper },
  name: 'bf-input-number',
  mixins: [feMixin],
  data: () => ({ }),
  props: {
    value: { validator: (value) => value === null || typeof value === 'number', required: true },
    placeholder: { type: String, required: false },
    clearable: { type: Boolean, default: () => false }
  },
  methods: {
    onWheel (e) {
      e.preventDefault();
    }
  },
  mounted () {
    this.$refs.input.addEventListener('wheel', this.onWheel);
  },
  beforeDestroy () {
    this.$refs.input.removeEventListener('wheel', this.onWheel);
  }
};

export const vNumber = (min = 0, max = Number.MAX_SAFE_INTEGER) => (value) => window.validateReturn(
  typeof value !== 'number' || value < min || value > max,
  'validate.number',
  { min, max, value }
);
</script>

<style scoped>
input {
  -moz-appearance: textfield;
}
</style>
