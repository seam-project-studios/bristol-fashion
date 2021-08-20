<template>
  <bf-input-string
    v-model="inputString"
    label="My input string"
    name="my-string"
    type="text"
  />
</template>

<script>
import BfInputString from '@/components/bf-input-string.vue';
export default {
  name: 'Index',
  components: { BfInputString },
  data: () => ({
    inputString: ''
  })
};
</script>
