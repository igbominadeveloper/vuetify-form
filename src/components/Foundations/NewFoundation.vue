<template>
 <v-container>
 <v-flex md4 offset-md4>
 </v-flex>
   <v-layout row wrap>
     <v-flex xs12 md8 sm8 offset-md2 offset-sm2>
        <v-form ref="form" lazy-validation>
          <v-layout row wrap>
          <v-flex xs12 md4 sm6 lg6>  
           <v-text-field
             v-model="foundation.name"
             :counter="50"
             label="Name"
             required
           ></v-text-field>
          </v-flex>

          <v-flex xs12 md4 sm5 lg5 offset-md1 offset-lg1 offset-sm1>
             <v-select
             v-model="foundation.state"
             :items="states"
             :rules="[v => !!v || 'Item is required']"
             label="State"
             required
           ></v-select>
           </v-flex>

          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 md4 sm6 lg6>
             <v-text-field
               v-model="foundation.email"
               label="E-mail"
               required
             ></v-text-field>
              </v-flex>
            
            <v-flex xs12 md4 sm5 lg5 offset-md1 offset-sm1> 
             <v-text-field
               v-model="foundation.phone"
               label="Phone Number"
               required
             ></v-text-field>
            </v-flex>

          </v-layout>
          
          <v-layout row wrap>
           <v-flex md3 xs12 sm3>
            <v-text-field
               v-model="foundation.population"
               label="Total population"
               required
             ></v-text-field>
           </v-flex>

            <v-flex md3 sm4 xs12 offset-md1 offset-sm1>
              <v-text-field
                v-model="foundation.youngest"
                label="Youngest child"
                required
              ></v-text-field>
            </v-flex>

            <v-flex md4 sm3 xs12 offset-md1 offset-sm1>
              <v-text-field
                v-model="foundation.eldest"
                label="Eldest child"
                required
              ></v-text-field>
            </v-flex>
            
          </v-layout>
          
          <v-layout row wrap>
            <v-flex md3 xs6 sm3>
            <v-radio-group v-model="foundation.medicalBox" :mandatory="true" label="Medical Box">
              <v-radio label="Yes" value="Yes"></v-radio>
              <v-radio label="No" value="No"></v-radio>
            </v-radio-group>
            </v-flex>

            <v-flex md3 xs6 sm3>
            <v-radio-group v-model="foundation.thermometer" :mandatory="true" label="Thermometer">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
            </v-flex>

            <v-flex md3 xs6 sm3>
            <v-radio-group v-model="foundation.affiliatedClinic" :mandatory="true" label="Affiliated Clinic">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
            </v-flex>

            <v-flex md3 xs6 sm3>
            <v-radio-group v-model="foundation.medicalPersonnel" :mandatory="true" label="Medical Personnel">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>

            </v-flex>

          </v-layout>
          <v-container fluid grid-list-md>
              <v-textarea
                box
                label="Comments"
                v-model="foundation.comments"
                auto-grow
              ></v-textarea>
            </v-container>

           <v-checkbox
             v-model="foundation.confirmed"
             :rules="[v => !!v || 'You must confirm to continue!']"
             label="Save foundation profile?"
             required
           ></v-checkbox>
           <v-btn
           @click="submit"
           :disabled ="validate"
           >
             submit
           </v-btn>
           <v-btn @click="clear">clear</v-btn>
         </v-form>
     </v-flex> 
   </v-layout>
 </v-container>
</template>

<script>
  import {apiDomain}  from '@/config.js';
  export default {
    data(){
      return {
        states: ["Abia","Adamawa","Akwa-Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"
        ],
        disabled:true,
        foundation: {
          medicalBox:'',
          name:'',
          phone:'',
          email:'',
          population:'',
          youngest:'',
          eldest:'',
          state:'',
          thermometer:'',
          affiliatedClinic:'',
          medicalPersonnel:'',
          comments:'',
          confirmed:''
        }
      } 
    },
    methods:{
      clear(){
        let keys = Object.keys(this.foundation);
        keys.forEach(key => {
          this.foundation[key] = '';
        });
      },
      submit(){
        delete this.foundation.confirmed;
        axios.post(apiDomain+'/foundations.json',this.foundation)
        .then(response => {
          console.log(response);
          this.$router.push('/foundations')
        })
        .catch(errors => console.log(errors))
      }
    },
    computed:{
      validate(){
        let keys = Object.keys(this.foundation);
        let empty = 0;
        keys.forEach(key =>{
          if(this.foundation[key] == '')
            empty++;
        });
        if(empty <= 0)
          return false;
        else
          return true;
      }
    }
}
</script>

