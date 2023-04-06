
<template>
  <component :is="layout">
       <transition
          name="fade"
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        >
    <router-view></router-view>
       </transition>
  </component>
</template>

<script>

const defaultLayout = 'DefaultLayout'
export default {
  name: "App",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>
