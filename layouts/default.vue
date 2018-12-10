<template>
  <div class="flex flex-col min-h-screen">
    <Nav />
    <main class="flex-1 container mx-auto max-w-xl px-3">
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
  }
}
</script>
