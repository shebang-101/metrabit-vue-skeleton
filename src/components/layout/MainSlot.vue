<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <v-btn icon @click="signOut">
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <is-footer></is-footer>
  </v-app>
</template>

<script>
export default {
  name: 'MainSlot',
  components: {},
  data() {
    return {
      drawer: true,
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss">
</style>