<template>
  <div id="app">
    <router-link :to="{ name: 'Overviews' }">Overviews</router-link>
    <router-link :to="{ name: 'ModelList' }">ModelList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
