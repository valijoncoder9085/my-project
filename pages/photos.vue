<template>
  <div
    class="rounded-lg ma-3 pa-3"
    style="border: 1px solid wheat; overflow: hidden !important;"
  >
    {{text}}
    <div v-for="(item, idx) in photos"
         :key="idx"
    >
      {{ item }}
    </div>
    <v-card
      class="rounded-lg ma-3"
      style="border: 1px solid wheat; overflow: hidden !important;"
    >
      {{ text }}
      <div>
        <v-img
        ></v-img>
      </div>
      <v-card-title class="text-capitalize">
        <v-spacer/>
        <v-spacer/>
      </v-card-title>
      <v-card-text class="px-0">
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data(){
    return{
      text: "Photos",
    }
  },
  computed:{
    ...mapGetters({
      photos: "users/photos",
    })
  },
  created() {
    // this.$store.dispatch("users/getPhotos");
  }
}
</script>

<style lang="sass" scoped>

</style>
