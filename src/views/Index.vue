<template>
  <section>
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
    <hr />
    <form @submit.prevent>
      <bf-input-number
        ref="myNumber"
        v-model.number="inputNumber"
        label="My input number"
        name="my-number"
        :validate="vNumber(1, 3)"
      >
        <template #help-text>
          1 to 3
        </template>
      </bf-input-number>

      <button type="button" @click="$refs.myNumber.injectError('app.test-error')">.injectError()</button>
      <button type="button" @click="$refs.myNumber.clearError()">.clearError()</button>
      <button type="submit">Go</button>
    </form>
    <hr />
    <BfButton
      name="myButton"
      type="submit"
      value="somevalue"
    >
      Click my button
    </BfButton>
  </section>
</template>

<script>
import BfButton from '@/components/bf-button.vue';
import BfInputString, { vString } from '@/components/bf-input-string.vue';
import BfInputNumber, { vNumber } from '@/components/bf-input-number.vue';
export default {
  name: 'Index',
  components: {
    BfInputString,
    BfInputNumber,
    BfButton
  },
  data: () => ({
    inputString: null,
    inputNumber: null,
    vString,
    vNumber
  })
};
</script>
