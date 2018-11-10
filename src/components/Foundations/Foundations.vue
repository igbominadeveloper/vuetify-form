<template>
  <div>
    <v-layout row wrap>
    <v-flex md8 sm10 xs12 offset-md2 offset-sm1 mt-5 mb-5>
    <v-toolbar flat color="white">
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>

      <v-layout row wrap>
        <v-flex md6 sm6 xs12>
            <v-text-field
            max-width="50px"
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer> 
     
        <v-dialog v-model="dialog" max-width="700px">
        <v-btn 
        slot="activator" 
        color="teal" 
        dark class="mb-2"
        >New Foundation</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                  color="teal"  v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                
                <v-flex xs12 sm6 md6>
                  <v-text-field
                  color="teal"  v-model="editedItem.phone" label="Mobile"></v-text-field>
                </v-flex>
                
                <v-flex xs12 sm6 md6>
                  <v-text-field
                  color="teal"  v-model="editedItem.email" label="Email"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md6>
                    <v-select
                    color="teal"
                    v-model="editedItem.state"
                    :items="states"
                    :rules="[v => !!v || 'Item is required']"
                    label="State"
                    required
                  ></v-select>
                </v-flex>

               
                <v-flex xs12 sm6 md4>
                  <v-text-field
                  color="teal" 
                    v-model="editedItem.youngest" 
                    label="Youngest Child">
                    </v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                  color="teal" 
                    v-model="editedItem.eldest" 
                    label="Eldest Child">
                    </v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                  color="teal" 
                     
                    v-model="editedItem.population" 
                    label="Total Population">
                    </v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-radio-group v-model="editedItem.medicalBox" :mandatory="true" label="Medical Box">
                    <v-radio color="teal" label="Yes" value="Yes"></v-radio>
                    <v-radio color="teal" label="No" value="No"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-radio-group v-model="editedItem.medicalPersonnel" :mandatory="true" label="Medical Personnel">
                    <v-radio color="teal" label="Yes" value="Yes"></v-radio>
                    <v-radio color="teal" label="No" value="No"></v-radio>
                  </v-radio-group>
                </v-flex>


                <v-flex xs12 sm6 md3>
                  <v-radio-group v-model="editedItem.affiliatedClinic" :mandatory="true" label="Affiliated Clinic">
                    <v-radio color="teal" label="Yes" value="Yes"></v-radio>
                    <v-radio color="teal" label="No" value="No"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-radio-group v-model="editedItem.thermometer" :mandatory="true" label="Thermometer">
                    <v-radio color="teal" label="Yes" value="Yes"></v-radio>
                    <v-radio color="teal" label="No" value="No"></v-radio>
                  </v-radio-group>
                </v-flex>
              
              <v-container fluid grid-list-md>
                  <v-textarea
                    box
                    color="teal"
                    label="Comments"
                    v-model="editedItem.comments"
                    auto-grow
                  ></v-textarea>
                </v-container>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" flat class="v-btn teal--light teal--text text--darken-1" @click.native="close">Cancel</v-btn>

            <v-btn color="teal" flat class="v-btn teal--light teal--text text--darken-1" :disabled="validate" @click.native="save">Save</v-btn>
          </v-card-actions>
            <v-spacer></v-spacer>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-alert
      :value="success"
      type="success"
      transition="slide-y-transition"
    >
      {{ successMessage }}
    </v-alert> 

        <v-alert
          :value="failure"
          transition="slide-y-transition"
          type="error"
        >
          {{ errorMessage }}
        </v-alert>
    <v-data-table
      :headers="headers"
      :items="foundations"
      :search="search"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.state }}</td>
        <td class="text-xs-left">{{ props.item.medicalBox }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
      <template slot="no-data">
        <v-btn color="teal" dark @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    </v-flex>
    </v-layout>

  <!--   <v-layout row justify-center>
        <v-dialog
          v-model="isActive"
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline text-center">Delete Record?</v-card-title>
            <v-card-text>
              Are you sure? You cannot recover this foundation's record anymore
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="warning darken-1"
                flat="flat"
                @click="cancel"
              >
                Cancel
              </v-btn>

              <v-btn
                color="teal darken-1"
                flat="flat"
                @click="agree"
              >
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout> -->
  </div>
</template>

<script>
  import { apiDomain } from '../../config.js';
  export default {
    data: () => ({
      isActive: false,
      successMessage:'',
      errorMessage:'',
      success: false,
      failure: false,
      dialog: false,
      search:'',
      foundations: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: 0,
        email: '',
        state: '',
        medicalBox: '',
        population:0,
        youngest:'',
        eldest:'',
        thermometer:'',
        affiliatedClinic:'',
        medicalPersonnel:'',
        comments:'',
      },
      defaultItem: {
        name: '',
        phone: 0,
        email: '',
        state: '',
        medicalBox: '',
        population:0,
        youngest:'',
        eldest:'',
        thermometer:'',
        affiliatedClinic:'',
        medicalPersonnel:'',
        comments:'',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Foundation' : 'Edit '+this.foundations[this.editedIndex].name
      },
      states(){
        return this.$store.getters.states
      },
      headers(){
        return this.$store.getters.headers
      },
      validate(){
        let keys = Object.keys(this.editedItem);
        let empty = 0;
        keys.forEach(key =>{
          if(this.editedItem[key] == '')
            empty++;
        });
        if(empty <= 0)
          return false;
        else
          return true;
      }
    },

    watch: {
      dialog (val = this.close()) {
        val
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get(apiDomain+'/foundations.json')
        .then(response => {
         let foundations = response.data;         
         Object.keys(foundations).forEach(key => {
          foundations[key].id = key;
          this.foundations.push(foundations[key]);          
         });
        })
        .catch(error => console.log(error))
      },

      editItem (item) {
        this.editedIndex = this.foundations.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      deleteItem (item) {
        const index = this.foundations.indexOf(item)
        confirm("Are you sure you want to delete this item?")&& 
        this.foundations.splice(index, 1);
        axios.delete(apiDomain+'/foundations/'+item.id+'.json', item.id)
        .then(response => console.log(response))
        .catch(error => console.log(error))    
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.foundations[this.editedIndex], this.editedItem);
          let id = this.editedItem.id;
          delete this.editedItem.id;
          let url = apiDomain+'/foundations/'+id+'.json';
          axios.put(url, this.editedItem)
          .then(response => {
            this.success = true;
            setTimeout(() =>{
              this.success = false;
              this.successMessage = 'Data saved'
            },3000);
              this.successMessage = ''
          })
          .catch(error => {
            this.failure = true;
            setTimeout(() =>{
              this.failure = false;
              this.errorMessage = 'Operation failed'
            },3000);
              this.errorMessage = ''
          })
        } else {
          let payload = this.editedItem;
          axios.post(apiDomain+'/foundations.json', payload)
          .then(response => {
            this.$set(payload, 'id', response.data.name);
          this.foundations.push(payload)
            this.success = true;
            this.successMessage = 'Data saved';
            setTimeout(() =>{
              this.success = false;
              this.successMessage = '';
            },3000);
          })
          .catch(errors => {
            this.failure = true;
            console.log(errors);
            setTimeout(() =>{
              this.failure = false;
              this.errorMessage = 'Operation failed'
            },3000);
              this.errorMessage = ''
          })
        }
        this.close()
      }
    }
  }
</script>