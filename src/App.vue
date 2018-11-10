<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" absolute
      temporary>
      <v-list>
      <v-spacer></v-spacer>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="teal">
      <v-toolbar-side-icon
      @click="sideNav = !sideNav"
      class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link
          to="/"
          tag="button" style="cursor: pointer">
          Foundations Manager
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      sideNav: false
    }
  },
  computed: {
      menuItems(){
        return this.$store.getters.menuItems
      }
  }
}
</script>
