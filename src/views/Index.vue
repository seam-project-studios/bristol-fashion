<template>
  <form @submit.prevent>
    <bf-input-string
      ref="myString"
      v-model="inputString"
      label="My input string"
      name="my-string"
      type="text"
      :validate="vString(1, 3)"
    >
      <template #help-text>
        1 to 3 chars
      </template>
    </bf-input-string>

    <button type="button" @click="$refs.myString.injectError('app.test-error')">.injectError()</button>
    <button type="button" @click="$refs.myString.clearError()">.clearError()</button>
    <button type="submit">Go</button>
  </form>
</template>

<script>
import BfInputString, { vString } from '@/components/bf-input-string.vue';
export default {
  name: 'Index',
  components: { BfInputString },
  data: () => ({
    inputString: '',
    vString
  })
};
</script>
