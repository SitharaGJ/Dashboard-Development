<template>
  <nav>
    <v-card  >
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" rail-width="85" permanent @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
          <template v-slot:append>
            <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" @click="$router.push('/mainpageView')" >
          </v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Pending Task" value="account" @click="$router.push('/main_tabl')"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Total Earning" value="users" @click="$router.push('/total_earning')"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
      <RouterView/>
        <!-- <mainpageView></mainpageView> -->
      </v-main>
    </v-layout>
  </v-card>
  </nav>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: true,
      rail: false,
  }),
}
</script>

<style>

</style>
