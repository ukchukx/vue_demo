<template>
  <!-- eslint-disable -->
  <div>
    <custom-header :logo="logo" />
    <main class="container" role="main">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Page',
  components: {
    'custom-header': Header
  },
  props: {
    logo: {
      type: String,
      required: true
    }
  }
};
</script>
