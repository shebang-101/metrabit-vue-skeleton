<template>
  <v-footer :app="app" color="secondary" dark class="caption" min-height="32">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" sm="auto" class="text-center">
        {{ fecha.format(new Date(), 'YYYY') }},
        <a href="https://metrabit.com" class="white--text" target="_blank">
          MetraBit Skeleton
        </a>, v0.1.0
      </v-col>
      <v-col cols="12" sm="auto" class="text-center">
        powered_by
        <a href="https://metrabit.com" class="white--text" target="_blank">
          MetraBit
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import fecha from 'fecha'

export default {
  name: 'FooterSlot',
  props: {
    app: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fecha: fecha
    }
  }
}
</script>
