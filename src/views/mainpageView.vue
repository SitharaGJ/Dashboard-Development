<template>

    <div class="maindiv mx-3 "  >
        <v-row> <v-col></v-col></v-row>
        <v-row>

            <v-col cols="3">
                <h2 class="ml-10" style="color: #2B3674;">Main Dashboard</h2>
            </v-col>
            <v-col></v-col>
            <v-col cols="4" class="d-flex  justify-space-between mx-10"
                style="background-color: #FFFFFF; border-radius: 100px; height: 61px">
                <div class="d-flex  align-center ">
                    <div style="background-color: #F4F7FE; height: 41px; width: 312px; border-radius: 100px"
                        class="d-flex  ">
                        <v-input type="text">
                            <v-icon icon="mdi-magnify" size="small" color="#2B3674" class="ml-5 mt-2"></v-icon>

                            <p class="ml-3 align-center mt-2" style="color: #8F9BBA;">Search</p>
                        </v-input>
                    </div>
                </div>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" style="height: 41px; border-radius: 100px"
                    class="justify-end">
                <div>

                </div>
            </v-col>
        </v-row>

        <v-row class="mx-5">
            <v-col class="justify-center">
                <div class="d-flex  align-center justify-center px-2"
                    style="height: 97px ;  background-color: #FFFFFF; border-radius: 10px">
                    <img src="../assets/img/a.png" style="height: 56px;">
                    <div class="ml-3 " style="text-align: start;">
                        <p  class= "align-start" style="color: #A3AED0;">Earning</p>
                        <h2   class= "align-start">$350.4</h2>
                    </div>
                </div>
            </v-col>

            <v-col class="justify-center">
                <div class="d-flex  align-center px-2 justify-center"
                    style="height: 97px ;  background-color: #FFFFFF; border-radius: 10px">
                    <img src="../assets/img/b.png" style="height: 56px;">
                    <div class="ml-3" style="text-align: start;">
                        <p style="color: #A3AED0;">Spend</p>
                        <h2>$642.39</h2>
                    </div>
                </div>
            </v-col>
            <v-col class="justify-center">
                <div class="d-flex  align-center px-2 justify-center"
                    style="height: 97px ;  background-color: #FFFFFF; border-radius: 10px">
                    <img src="../assets/img/b.png" style="height: 56px;">
                    <div class="ml-3" style="text-align: start;">
                        <p style="color: #A3AED0;">Sales</p>
                        <h2>$574.34</h2>
                        <p><span style="color: #05CD99;">+23%</span>last month</p>
                    </div>
                </div>
            </v-col>
            <v-col class="justify-center">
                <div class="d-flex  align-center px-2 justify-center"
                    style="height: 97px ;  background-color: #FFFFFF; border-radius: 10px">

                    <div style="text-align: start;">
                        <p style="color: #A3AED0;">Balance</p>
                        <h2>$1,000</h2>
                    </div>
                    <img src="../assets/img/d.png" style="height: 45px;" class="ml-3">
                </div>
            </v-col>
            <v-col>
                <div class="d-flex  align-center px-2 justify-center"
                    style="height: 97px ;  background-color: #FFFFFF; border-radius: 10px">
                    <img src="../assets/img/3.png" style="height: 56px;">
                    <div class="ml-3 justify-start" style="text-align: start;">
                        <p style="color: #A3AED0;">Total Projects</p>
                        <h2>2935</h2>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mx-5 mt-5">
            <v-col class="mx-3" style="height: 360px ;  background-color: #FFFFFF; border-radius: 10px">
                <div class="mt-3">
                    <div class=" justyfy-center mx-auto">
                        <v-row class="mx-5 ">
                            <h3>Total Earning</h3>
                        </v-row>
                        <div class="justify-center">
                            <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
                        </div>
                    </div>

                </div>
            </v-col>
            <v-col class="mx-3" style="height: 360px ;  background-color: #FFFFFF; border-radius: 10px">
                <div class="mt-3">
                    <div class=" justyfy-center mx-auto">
                        <v-row class="mx-5 ">
                            <h3>Weekly Revenue</h3>
                        </v-row>
                        <div class="justify-center">
                            <WeeklyRevenue></WeeklyRevenue>
                        </div>
                    </div>

                </div>
            </v-col>

        </v-row>


        <v-row class="mx-5 mt-10">
            <v-col  class="mx-3" style="height: 450px ;  background-color: #FFFFFF; border-radius: 10px" >
                <div class="mt-3">
                    <div class=" justyfy-center mx-auto">
                        <v-row class="mx-5 ">
                            <h3>Check Table</h3>
                        </v-row>
                        <div class="justify-center">
                          <CheckTable></CheckTable>
                        </div>
                    </div>

                </div>
            </v-col>
            <v-col  class="mx-3" style="height: 450px ;  background-color: #FFFFFF; border-radius: 10px">
                <div class="mt-3">
                    <div class=" justyfy-center mx-auto">
                        <v-row class="mx-5 ">
                            <h3>Overall Traffic </h3>
                        </v-row>
                        <div class="justify-center">
                          <DailyTrafficChart></DailyTrafficChart>
                        </div>
                    </div>

                </div>
            </v-col>
            

        </v-row>
        <v-row class="pa-10">
        <v-col></v-col>
        </v-row>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import WeeklyRevenue from './WeeklyRevenue.vue';
import CheckTable from './CheckTable.vue';
import DailyTrafficChart from './DailyTrafficChart.vue';

export default {
    name: 'mainpageView',
    components: {
        apexchart: VueApexCharts,
        WeeklyRevenue,
        CheckTable,
        DailyTrafficChart,
    },
    data() {
        return {

            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },
            series: [{
                name: 'Earning',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Spend',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],



        }

    }
}


</script>

<style scoped>
.maindiv {
    background-color: #F4F7FE;
    height: 100%;
}
</style>