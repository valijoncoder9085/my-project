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
          :items="user"
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
      text: "Users",
      headers:[
        {text: "Id", value: "id",sortable: false,},
        {text: "User Name", value: "username",sortable: false,},
        {text: "Name", value: "name",sortable: false,},
        {text: "Email", value: "email",sortable: false,},
        {text: "City", value: "address.city",sortable: false,},
        {text: "Lat", value: "address.geo.lat",sortable: false,},
        {text: "Lng", value: "address.geo.lng",sortable: false,},
        {text: "Street", value: "address.street",sortable: false,},
        {text: "Suite", value: "address.suite",sortable: false, width: "100px"},
        {text: "Zip Code", value: "address.zipcode",sortable: false, width: "120px"},
        {text: "Company", value: "company.name",sortable: false,},
        {text: "Phone", value: "phone",sortable: false,},
        {text: "Web site", value: "website",sortable: false,},
      ]
    }
  },
  computed:{
    ...mapGetters({
      user: "users/user"
    })
  },
  created() {
    this.$store.dispatch("users/getUserData");
    this.$store.dispatch("users/postUser");
  },
  mounted() {
  }
}
</script>

<style lang="sass" scoped>

</style>
