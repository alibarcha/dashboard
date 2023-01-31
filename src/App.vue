
<template>
  <component :is="layout">
    <router-view></router-view>
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
