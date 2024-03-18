<template>
    
    <div class="maindiv mx-3 "  >
        <v-row> <v-col></v-col></v-row>
        <v-row>

            <v-col cols="3">
                <h2 class="ml-10" style="color: #2B3674;">Pending Task</h2>
            </v-col>
            <v-col></v-col>
            <v-col >
                
            </v-col>
        </v-row>

        <div maindiv>
       
    <div style="background-color: #F4F7FE; " class="mt-6">
      <div class="mx-10" style="background-color: #F4F7FE; " >
      <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="name"
      @update:options="loadItems"
    ></v-data-table-server>
    </div>
    </div>
    </div>

        

        


        
        <v-row class="pa-10">
        <v-col></v-col>
        </v-row>
    </div>
    
   
   
    
  </template>
  
  <script>
     const desserts = [
      {
        name: 'Mobile Ui Design',
        calories: '17.5%',
        fat: 6.0,
        carbs: '24.Jan.2021',
       
      },
      {
        name: 'Web Page Design',
        calories: '10.8%',
        fat: 0.0,
        carbs: '12.Jun.2021',
       
      },
      {
        name: 'Dashboard Design',
        calories: '21.3%',
        fat: 26.0,
        carbs: '5.Jan.2021',
       
      },
      {
        name: 'E-commerce Design',
        calories: '31.5%',
        fat: 16.0,
        carbs: '7.Mar.2021',
      
      },
      {
        name: 'Gingerbread',
        calories: '12.2%',
        fat: 16.0,
        carbs: '17.Dec.2021',
      
      },
      {
        name: 'Ice cream sandwich',
        calories: '17.5%',
        fat: 9.0,
        carbs: '24.Jan.2021',
       
      },
      {
        name: 'Lollipop',
        calories: '17.5%',
        fat: 0.2,
        carbs: '24.Jan.2021',
   
      },
      {
        name: 'Cupcake',
        calories: '17.5%',
        fat: 3.7,
        carbs: '24.Jan.2021',
   
      },
      {
        name: 'Honeycomb',
        calories: '17.5%',
        fat: 3.2,
        carbs: '24.Jan.2021',
  
      },
      {
        name: 'Donut',
        calories: '17.5%',
        fat: 25.0,
        carbs: '24.Jan.2021',
     
      },
    ]
  
    const FakeAPI = {
      async fetch({ page, itemsPerPage, sortBy }) {
        return new Promise(resolve => {
          setTimeout(() => {
            const start = (page - 1) * itemsPerPage
            const end = start + itemsPerPage
            const items = desserts.slice()
  
            if (sortBy.length) {
              const sortKey = sortBy[0].key
              const sortOrder = sortBy[0].order
              items.sort((a, b) => {
                const aValue = a[sortKey]
                const bValue = b[sortKey]
                return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
              })
            }
  
            const paginated = items.slice(start, end)
  
            resolve({ items: paginated, total: items.length })
          }, 500)
        })
      },
    }
  
    export default {
      name: 'MainTabl',
      data: () => ({
        itemsPerPage: 10,
        headers: [
          {
            title: 'NAME',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'PROGRESS', key: 'calories', align: 'start' },
          { title: 'QUANTITY', key: 'fat', align: 'end' },
          { title: 'DATE', key: 'carbs', align: 'end' },
         
        ],
        search: '',
        serverItems: [],
        loading: true,
        totalItems: 0,
      }),
      methods: {
        loadItems({ page, itemsPerPage, sortBy }) {
          this.loading = true
          FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(
            ({ items, total }) => {
              this.serverItems = items
              this.totalItems = total
              this.loading = false
            }
          )
        },
      },
    }
  </script>

  <style scoped>
  .maindiv {
    background-color: #F4F7FE;
    height: 100%;
}
  </style>