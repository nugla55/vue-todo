
require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('App', require('./components/app.vue').default);

const app = new Vue({
    el: '#app',
});
