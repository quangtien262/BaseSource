<template>
  <main-layout>
    <h1 style="color:red">About </h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
      <div
        v-else
        v-for="job in jobs.operatingCalendar.trainServiceInformationList"
        class="currency"
      >
        <h3>{{job.trainServiceId}}</h3>
      </div>

    </section>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import axios from 'axios';
  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        jobs: null,
        loading: true,
        errored: false
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios
        .get('https://f1ftj7jcri.execute-api.ap-southeast-1.amazonaws.com/dev/search/train/calendar')
        .then(response => {
          this.jobs = response.data;
          console.log(this.jobs);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => this.loading = false)
    }
  }
</script>
