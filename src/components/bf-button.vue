<template>
  <button
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :form="form"
    :formaction="formaction"
    :formenctype="formenctype"
    :formmethod="formmethod"
    :formnovalidate="formnovalidate"
    :formtarget="formtarget"
    :name="name"
    :type="type"
    :value="value"
    :loading="loading"
    :ariaPressed="ariaPressed"
    :ariaExpanded="ariaExpanded"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'bf-button',
  data: () => ({ }),
  props: {
    autofocus: { type: Boolean, required: false },
    autocomplete: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    form: { type: String, required: false },
    formaction: { type: String, required: false },
    formenctype: { type: String, required: false },
    formmethod: { type: String, required: false },
    formnovalidate: { type: String, required: false },
    formtarget: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    value: { type: String, required: false },
    loading: { type: Boolean, required: false },
    ariaPressed: { type: Boolean, required: false },
    ariaExpanded: { type: Boolean, required: false }
  }
};
</script>
