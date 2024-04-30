<template>
  <div class="row  q-ma-md">
    <template v-for="data in headerData" :key="data.title">
      <div class="col-md-3 col-xs-12 q-my-xs">
        <div class="flex q-py-md bg-white shadow-4 justify-around" style="width: 95%;">
          <q-icon class="bg-blue" name="pie_chart" color="white" size="25px"
            style="border-radius: 5px; padding: 10px;" />
          <div class="">
            <p class="text-weight-bold q-my-none" style="font-size: 18px;">{{ data.title }}</p>
            <p class="text-weight-bold q-my-none text-blue" style="font-size: 18px;">{{ data.precentage }}%</p>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div class="row q-ma-md justify-between">
    <div class="col-md-7 col-xs-12 q-my-xs ">
      <q-card class="my-card q-pa-md" style="width: 98%;">
        <q-card-sectio>
          <p class="text-weight-bold text-h6">Customer Vs Lead </p>
        </q-card-sectio>
        <q-card-section>
          <lineBarchart />
        </q-card-section>
      </q-card>

    </div>
    <div class="col-md-5 col-xs-12 q-my-xs">
      <q-card class="my-card my-card-pie q-pa-md">
        <q-card-sectio>
          <p class="text-weight-bold text-h6">Project Status </p>
        </q-card-sectio>
        <q-card-section>
          <pieChart />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-12 q-my-md">
      <div class="row">
        <template v-for="data in headerData" :key="data.title">
          <div class="col-md-3 col-xs-12 q-my-xs">
            <div class="flex q-py-md bg-white shadow-4 justify-around" style="width: 95%;">
              <q-icon class="bg-blue" name="pie_chart" color="white" size="25px"
                style="border-radius: 5px; padding: 10px;" />
              <div class="">
                <p class="text-weight-bold q-my-none" style="font-size: 18px;">{{ data.title }}</p>
                <p class="text-weight-bold q-my-none text-blue" style="font-size: 18px;">{{ data.precentage }}%
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col-12 ">
      <div class="">
        <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
      </div>
    </div>


  </div>
  <div class="q-ma-md row justify-around text-center">
    <div class="col-md-6 q-py-md">
      <q-date v-model="date" today-btn />
    </div>
    <div class="col-md-6 q-py-md">
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import lineBarchart from './charts/lineBarchart.vue';
import pieChart from './charts/pieChart.vue';


const date = ref('2019/02/01');
const model = ref('2019-02-22 21:02')
const headerData = ref([{
  title: 'Leads Converteds',
  precentage: 80
},
{
  title: 'Invoice Payments',
  precentage: 80
},
{
  title: 'Project In Progress',
  precentage: 80
}, {
  title: 'Task Not Finished',
  precentage: 80
}
])

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

</script>

<style scoped>
@media screen and (min-width: 600px) {
  .my-card {
    width: 100%;
    height: 80vh !important;
  }

}
</style>
