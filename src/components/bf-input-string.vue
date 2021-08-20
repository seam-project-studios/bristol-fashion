<template>
  <bf-input-wrapper
    :label="label"
  >
    <input
      ref="input"
      :type="type"
      :name="name"
      :value="value"
      @input="onInput"
      @blur="setTouched"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
    <template #help-text>
      <slot name="help-text" />
    </template>
    <template #help-error v-if="touched && error">
      {{ error }}
    </template>
  </bf-input-wrapper>
</template>

<script>
import bfInputWrapper from './bf-input-wrapper.vue';
import feMixin from '@/mixins/form-element';

export default {
  components: { bfInputWrapper },
  name: 'bf-input-string',
  mixins: [feMixin],
  data: () => ({ }),
  props: {
    type: { validator: (type) => ['email', 'password', 'search', 'text', 'tel', 'url'].includes(type), default: () => 'text' },
    placeholder: { type: String, required: false },
    mask: { type: String, required: false },
    clearable: { type: Boolean, default: () => false }
  }
};

export const vString = (minLength = 0, maxLength = 255) => (value) => window.validateReturn(
  typeof value !== 'string' || value.length < minLength || value.length > maxLength,
  'validate.string',
  { minLength, maxLength, value }
);
</script>
