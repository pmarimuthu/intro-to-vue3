
const app = Vue.createApp({
    data() {
        return {
            clock: 0,
            cart: 0,
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            console.log("Cart: " + id)
            this.cart += 1
        }
    },
    mounted() {
        setInterval(
            () => { this.clock = new Date().toTimeString().slice(0,8) }, 
            1000
        )
      },      
})
