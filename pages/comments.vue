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
          :items="comments"
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
      text: "Comments",
      headers: [
        {text: "Body", value: "body",sortable: false},
        {text: "Email", value: "email",sortable: false},
        {text: "Name", value: "name",sortable: false},
        {text: "Post Id", value: "postId",sortable: false, width: 100},

      ],
    }
  },
  computed:{
    ...mapGetters({
      comments: "users/comments",
    })
  },
  created() {
    this.$store.dispatch("users/getComments");
  }
}
</script>

<style lang="sass" scoped>

</style>
