<template>
  <bf-input-wrapper
    :label="label"
  >
    <input
      :type="type"
      :name="name"
      :value="value"
      @input="e => $emit('input', e.target.value)"
    />
    <template #help-text>
      <slot name="help-text" />
    </template>
    <template #help-error v-if="error">
      {{ error }}
    </template>
  </bf-input-wrapper>
</template>

<script>
import bfInputWrapper from './bf-input-wrapper.vue';
export default {
  components: { bfInputWrapper },
  name: 'bf-input-string',
  data: () => ({
    error: false
  }),
  props: {
    name: { type: String, required: true },
    type: { validator: (type) => ['email', 'password', 'search', 'text', 'tel', 'url'].includes(type), default: () => 'text' },
    label: { type: String, required: true },
    placeholder: { type: String, required: false },
    value: { type: String, required: true },
    mask: { type: String, required: false },
    disabled: { type: Boolean, default: () => false },
    readonly: { type: Boolean, default: () => false },
    clearable: { type: Boolean, defualt: () => false },
    validate: { type: Function, required: false }
  }
};
</script>
