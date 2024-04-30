<template>
  <template v-for="link in links" :key="link.title">
    <q-item clickable tag="a" target="_self" :href="link.path">
      <q-item-section v-if="link.icon" avatar>
        <q-icon :name="link.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </template>

</template>

<script setup>
defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  links: {
    type: Array,
    required: false
  }
})
</script>
