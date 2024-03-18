// <template>
//   <v-card  >
//     <v-layout>
//       <v-navigation-drawer v-model="drawer" :rail="rail" rail-width="120" permanent @click="rail = false">
//         <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
//           <template v-slot:append>
//             <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
//           </template>
//         </v-list-item>

//         <v-divider></v-divider>

//         <v-list density="compact" nav>
//           <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" @click="$router.push('/mainpageView')" >
//           </v-list-item>
//           <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
//           <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
//         </v-list>
//       </v-navigation-drawer>
//       <v-main>
//       <RouterView></RouterView>
      
//       </v-main>
//     </v-layout>
//   </v-card>
// </template>
// <script>


// export default {

//   name: 'HomeView',
 

//   data() {
//     return {
//       drawer: true,
//       rail: false,
//     }
//   },
//   methods: {
//     navigateTo(){

//     }
//   }
// }
// </script>
