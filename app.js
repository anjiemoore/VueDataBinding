const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
      // fullName: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
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
