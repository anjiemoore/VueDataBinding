const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
      this.name = event.target.value;
    },
    // submitForm() {
    //   alert('Submitted!');
    // },
    confirmInput() {
      this.confirmName = this.name
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
