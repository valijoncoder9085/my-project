<template>
  <div
    class="rounded-lg ma-3 pa-3"
    style="border: 1px solid wheat; overflow: hidden !important;"
  >
    <v-data-table
      :headers="headers"
      :items="photos"
    >
      <template #item.actions="{ item }">
        <div class="d-flex">
          <v-btn icon color="green">
            <v-icon small>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn icon color="red">
            <v-icon small>
              mdi-trash-can-outline
            </v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  data(){
    return{
      title: "Photos",
      headers: [
        {
          text: "ID",
          value: "id",
          sortable: false,
        },
        {
          text: "Album Id",
          value: "albumId",
          sortable: false
        },
        {
          text: "Title",
          value: "title",
          sortable: false
        },
        {
          text: "URL",
          value: "url",
          sortable: false
        },
        {
          text: "Thumbnail Url",
          value: "thumbnailUrl",
          sortable: false
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false
        }
      ]
    }
  },
  computed:{
    ...mapGetters({
      photos: "users/photos",
    })
  },
  async created() {
    await this.getPhotos();
  },
  methods: {
    ...mapActions({
      getPhotos: "users/getPhotos",
    }),
  },
}
</script>

<style lang="sass" scoped>

</style>
