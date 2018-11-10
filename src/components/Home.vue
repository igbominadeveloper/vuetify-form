<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn class="teal" dark large to="/Foundations">
          Explore Foundations
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn class="teal" dark large to="/Foundations/new">
          Organize Foundation
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="Foundation in Foundations"
            :src="Foundation.imageUrl"
            :key="Foundation.id">
            <div class="sm6 title text-xs-center">
              {{ Foundation.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
      <p>Register for an Foundation now!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods:{
      showFoundation(id) {
        this.$router.push('/Foundations/' + id);
      }
    },
    computed:{
      Foundations () {
        return this.$store.getters.feauturedFoundations
      }
    }
  }
</script>

<style scoped>
  .title{
    position: absolute;
    bottom: 50px;
    padding: 20px;
    color: white;
    background-color: rgb(0,0,0,0.5);
    font-size: 2em;
  }
  .v-carousel:hover{
    cursor: pointer;
  }
</style>