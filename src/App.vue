<script xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  export default {
    data: () => ({
      items: ['One', 'Two', 'Three', 'Four']
    })
  }
</script>

<template>
 <v-app>
  <v-container>
    <v-layout>
      <v-flex xs4 class="ml-5">
        <v-select
                :items="items"
                label="Click me"
        ></v-select>
      </v-flex>
      <v-flex xs5 class="ml-5">
        <v-select
          :items="items"
          box
          label="Open me"
        ></v-select>
      </v-flex>
      <v-flex class="ml-5">
        <div>
          <v-btn color="blue">Save me</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>

   <v-container grid-list-md>
     <v-loyaut>
       <v-data-iterator
               :items="items"
               :rows-per-page-items="rowsPerPageItems"
               :pagination.sync="pagination"
               content-tag="v-layout"
               hide-actions
               row
               wrap
       >
         <template v-slot:header>
           <v-toolbar
                   class="mb-3"
                   color="indigo darken-5"
                   dark
                   flat
           >
             <v-toolbar-title>Header</v-toolbar-title>
           </v-toolbar>
         </template>
         <template v-slot:item="props">
           <v-flex
                   lg3
                   md4
                   sm6
                   xs12
           >
             <v-card>
               <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>
               <v-divider></v-divider>

               <v-list dense>
                 <v-list-tile>
                   <v-list-tile-content>Fat: 1</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                 </v-list-tile>

                 <v-list-tile>
                   <v-list-tile-content>Carbs: 2</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                 </v-list-tile>

                 <v-list-tile>
                   <v-list-tile-content>Protein: 3</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                 </v-list-tile>

                 <v-list-tile>
                   <v-list-tile-content>Sodium: 4</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                 </v-list-tile>

                 <v-list-tile>
                   <v-list-tile-content>Calcium: 5</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                 </v-list-tile>

                 <v-list-tile>
                   <v-list-tile-content>Iron: 6</v-list-tile-content>
                   <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                 </v-list-tile>
               </v-list>
             </v-card>
           </v-flex>
         </template>
         <template v-slot:footer>
           <v-toolbar
                   class="mt-3"
                   color="indigo darken-2"it
                   dark
                   dense
                   flat
           >
             <v-toolbar-title>Footer</v-toolbar-title>
           </v-toolbar>
         </template>
       </v-data-iterator>
     </v-loyaut>
   </v-container>
 </v-app>
</template>

<style>

</style>

