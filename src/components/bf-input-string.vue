<template>
  <bf-input-wrapper
    :label="label"
    :class="{ error: showError }"
    :name="name"
  >
    <input
      ref="input"
      :type="type"
      :id="id"
      :name="name"
      :value="value"
      @input="onInput"
      @blur="setTouched"
      @invalid="setTouched"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :form="form"
      :list="list"
      :maxlength="maxlength"
      :min="min"
      :pattern="pattern"
      :disabled="disabled"
      :readonly="readonly"
      :aria-label="name"
      :aria-describedby="`${componentId}-${name}`"
    />
    <template #help-error v-if="showError">
      <div role="alert">
        {{ injectedError || error }}
      </div>
    </template>
    <template #help-text>
      <div :id="`${componentId}-${name}`">
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
  name: 'bf-input-string',
  mixins: [feMixin],
  data: () => ({
    componentId: null
  }),
  props: {
    value: { validator: (value) => value === null || typeof value === 'string', required: true },
    type: { validator: (type) => ['email', 'password', 'search', 'text', 'tel', 'url'].includes(type), default: () => 'text' },
    placeholder: { type: String, required: false },
    mask: { type: String, required: false },
    clearable: { type: Boolean, default: () => false },
    maxlength: { type: Number, required: false },
    min: { type: Number, required: false },
    id: { type: String, required: false },
    form: { type: String, required: false },
    list: { type: String, required: false },
    pattern: { type: String, required: false }
  },
  mounted () {
    this.componentId = this._uid;
  }
};

export const vString = (minLength = 0, maxLength = 255) => (value) => window.validateReturn(
  typeof value !== 'string' || value.length < minLength || value.length > maxLength,
  'validate.string',
  { minLength, maxLength, value }
);
</script>
