<template>
  <div class="flex flex-col min-h-screen bg-grey-lighter">
    <Nav />
    <main class="flex-1 container mx-auto max-w-xl px-2">
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default {
  components: {
    Nav,
    Footer
  },

  head() {
    return {
      title: `${this.$store.state.meta.name}`,
      meta: [{ hid: 'description', name: 'description', content: this.$store.state.meta.description }]
    }
  }
}
</script>
