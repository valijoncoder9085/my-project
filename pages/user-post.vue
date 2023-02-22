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
          :items="user_post"
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
  data() {
    return {
      text: "Users Post",
      headers: [
        {text: "Id", value: "id",sortable: false},
        {text: "Body", value: "body",sortable: false},
        {text: "Title", value: "title",sortable: false},
      ],
    }
  },
  computed: {
    ...mapGetters({
      user_post: "users/user_post",
    })
  },
  created() {
    this.$store.dispatch("users/postUser")
  }
}
</script>

<style lang="sass" scoped>

</style>
