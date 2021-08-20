<template>
  <div class="form-element">
    <label :for="name">
      <span>{{ label }}</span>
      <slot />
    </label>
    <bf-help-error>
      <slot name="help-error" />
    </bf-help-error>
    <bf-help-text>
      <slot name="help-text" />
    </bf-help-text>
  </div>
</template>

<script>
import bfHelpText from './bf-help-text.vue';
import bfHelpError from './bf-help-error.vue';
export default {
  components: { bfHelpText, bfHelpError },
  name: 'bf-input-wrapper',
  data: () => ({}),
  props: {
    label: { type: String, required: true },
    name: { type: String, required: false }
  }
};
</script>
