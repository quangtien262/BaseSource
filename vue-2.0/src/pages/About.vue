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

    <form id="app" @submit="checkForm" method="post">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">New Product Name: </label>
        <input type="text" name="name" id="name" v-model="name">
        <label>{{ name }}</label>
        <p v-model="result">{{result}}</p>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import axios from 'axios';
  const apiUrl = 'http://localhost:270/api/test?name=';
  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        jobs: null,
        loading: true,
        errored: false,
        errors:[],
        name:'',
        result:''
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      //get API
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
    },
    methods:{
      //submit form 
      checkForm:function(e) {
        e.preventDefault();
        this.errors = [];
        if(this.name === '') {
          this.errors.push("Product name is required.");
        } else {
          axios.post(apiUrl, {
            name:this.name
          }).then(response => {
            console.log(response.data);
            this.result = response.data.name;
            // alert('Message sent!');
          }).catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
            }
          });
        }
      }
    }
  }
</script>
