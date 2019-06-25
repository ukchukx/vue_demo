<template>
  <!-- eslint-disable -->
  <header>
    <section class="container">
      <nav role="navigation">
        <ul>
          <li><a href="https://hexdocs.pm/phoenix/overview.html">Get Started</a></li>
        </ul>
      </nav>
      <a href="http://phoenixframework.org/" class="phx-logo">
        <img :src="logo" alt="Phoenix Framework Logo"/>
      </a>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logo: {
      type: String,
      required: true
    }
  }
};
</script>
