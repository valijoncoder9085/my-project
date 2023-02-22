<template>
  <div>
    <v-card
      class="rounded-lg ma-3"
      style="border: 1px solid wheat; overflow: hidden !important;"
    >
      <v-card-title class="text-capitalize">
        <v-spacer/>
        {{ text }}
        <v-spacer/>
      </v-card-title>
      <v-card-text class="px-0">
        <v-data-table
          :headers="headers"
          :items="albums"
          :footer-props="{ itemsPerPageOptions:[ 10, 20, 50 ] }"
        >
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data(){
    return{
      text: "Alybums",
      headers: [
        {text: "Title", value: "title",sortable: false},
        {text: "User Id", value: "userId",sortable: false},
      ],
    }
  },
  computed:{
    ...mapGetters({
      albums: "users/albums",
    })
  },
  created() {
    this.$store.dispatch("users/getAlbums");
  }
}
</script>

<style lang="sass" scoped>

</style>
