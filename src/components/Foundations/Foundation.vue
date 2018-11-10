<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="teal--text" v-text="Foundation.title"></h4>
          </v-card-title>
          <v-card-media :src="Foundation.imageUrl" height="400px"></v-card-media>
        </v-card>
        <v-card-text>
          <div class="info--text">{{ Foundation.time | date }}</div>
          <div>{{ Foundation.location }}</div><br>
          <div>{{ Foundation.description }}</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="teal" dark>
            <v-icon>arrow_forward</v-icon>
            Register
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props:['id'],
  computed:{
    Foundation () {
      return this.$store.getters.Foundation(this.id);
    }
  }
}
</script>
