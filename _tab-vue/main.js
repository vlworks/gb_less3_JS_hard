new Vue({
    el: '#app',
    data: {
      currentTab: 'one',
      tabs: ['one', 'two', 'three']
    },
    computed: {
        currentComp() {
            return `comp-${this.currentTab}`;
        }
    }
});