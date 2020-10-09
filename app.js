const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Moore';
      } 
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // setName(event, lastName) {
    //   this.name = event.target.value + ' ' + lastName;
    // },
    // submitForm() {
    //   alert('Submitted!');
    // },
    confirmInput() {
      this.confirmName = this.name
    },
    resetInput() {
      this.name = '';
    },
    // outputFullName() {
    //   if (this.name === '') {
    //     return '';
    //   } else {
    //     return this.name + ' ' + 'Moore';
    //   }
    // }
  }
});

app.mount('#events');
