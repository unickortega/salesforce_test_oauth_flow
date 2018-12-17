<template lang="html">
  <div class="chart-container-fluid">
    <h4>User / Project</h4>
    <canvas id="data_graph" height="70%"></canvas>
    <hr>
    <div class="container-fluid">
      <div class="table-responsive" style="height:180px;">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Information</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style="width: 15%">2018/10/1</th>
            <td style="width: 70%">Some dumb text</td>
            <td style="width: 15%">Checked</td>
          </tr>
          <tr>
            <th style="width: 15%">2018/10/2</th>
            <td style="width: 70%">Some dumb text 2</td>
            <td style="width: 15%">Checked</td>
          </tr>
          <tr>
            <th style="width: 15%">2018/10/3  </th>
            <td style="width: 70%">Some dumb text 3</td>
            <td style="width: 15%">Checked</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    <br>
    <div class="d-flex flex-row-reverse">
      <div class="p-2">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import Chart from 'chart.js';
import geechsChartData from './data_of_chart.js';

export default {
  data(){
    return {
      geechsChartData,
    }
  },
  methods: {
    createChart(chartID, chartData){
      const ctx = document.getElementById(chartID).getContext("2d");
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted(){
    this.createChart('data_graph', this.geechsChartData);
  }
}
</script>

<style scoped>
</style>
