<template>

    <div class="maindiv mx-3 ">
        <v-row> <v-col></v-col></v-row>
        <v-row>

            <v-col cols="3">
                <h2 class="ml-10" style="color: #2B3674;">Total Earning</h2>
            </v-col>
            <v-col></v-col>
            <v-col>

            </v-col>
        </v-row>

        <v-row>
            <v-col >
                <div maindiv class="mx-10">

                    <div class="justify-center" style="background-color: #FFFFFF;">
                        <apexchart type="line" :options="options" :series="series"></apexchart>
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


export default {
    name: 'totalEarning',
    components: {
        apexchart: VueApexCharts,
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
                data: [333, 499, 268, 581, 422, 909, 300]
            }, {
                name: 'Spend',
                data: [131, 332, 455, 372, 394, 592, 441]
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