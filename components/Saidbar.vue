<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-title class="pt-6">
        <v-text-field
          outlined
          label="Search"
          dense
        ></v-text-field>
      </v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "SaidbarPages",
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [
        {
          icon: 'mdi-home-analytics',
          title: 'Analytic',
          to: '/'
        },
        {
          icon: 'mdi-account-outline',
          title: 'Users',
          to: '/users'
        },
        {
          icon: 'mdi-account-multiple-plus',
          title: 'User-Post',
          to: '/user-post'
        },
        {
          icon: 'mdi-comment-text-multiple',
          title: 'Comments',
          to: '/comments'
        },
        {
          icon: 'mdi-check-circle',
          title: 'Todos',
          to: '/todos'
        },
        {
          icon: 'mdi-image-multiple',
          title: 'Photos',
          to: '/photos'
        },
        {
          icon: 'mdi-image-album',
          title: 'Albums',
          to: '/albums'
        },
      ],
      miniVariant: false,
      title: 'Valijon Mizrofov'
    }
  },
}
</script>

<style lang="sass" scoped>

</style>
