import Vue from 'vue'

// var someDiv = document.createElement('div');
// document.getElementsByTagName('body')[0].appendChild(someDiv);

// export default ({ store }, inject) => {
//   window._someVM = new Vue(_.extend({}, someComponent, {
//     el: someDiv,
//     store,
//   }))
// }

// var mainContent = document.createElement('div');

var mainContent = new Vue({
  el: '#main_content',
  data: {
    body: 'asdf'
  }
})

var about = new Vue({
  el: '#about',
  methods: {
    changeData: function (event) {
      main_content.body = 'about';
    }
  }
})
