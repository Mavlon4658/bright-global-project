<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  }
}
</script>


<template>
  <div class="wrapper">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>