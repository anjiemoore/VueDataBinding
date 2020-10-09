const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmName = this.name
    }
  }
});

app.mount('#events');
