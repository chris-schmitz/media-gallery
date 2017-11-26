<template lang="pug">
  div#app
    v-app(dark app)
        v-toolbar(app)
          v-toolbar-title Media Gallery

        router-view
</template>

<script>
export default {
    name: "image-gallery",
    data: () => ({})
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
/* Global CSS */
</style>
