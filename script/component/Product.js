
app.component('product', {
    props: {         
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div>
            <h4> {{ title }} </h4>
                
            <table>
                <tr>
                    <td> 
                        <img v-bind:src="image" width=115 height=108> </td>
                    <td> 
                        <div
                            v-for="(variant, index) in variants" 
                            :key="variant.id" 
                            @mouseover="updateVariant(index)"
                            class="color-circle"
                            :style="{ backgroundColor: variant.color }" > 
                    </div> 
                    </td>
                </tr>
            </table>
            
            <p v-if="inStock">In Stock {{ sale }}</p>
            <p v-else>Out of Stock</p>
            <p> Shipping: {{ shipping }} </p>

            <button 
                :class="{ disabledButton: !inStock}"
                :disabled='!inStock' 
                @click="addToCart()">
                'Add to card' 
            </button>

        </div>`,

        data() {
            return {
                brand: 'Learn-Self',
                product: 'Socks',
                description: 'Cotton Socks',
                selectedVariant: 0,
                inventory: 10,
                onSale: true,
                variants: [
                    {
                        id: 101,
                        color: '#3399ff',
                        image: './assets/images/scooter_blue.jpeg',
                        quantity: 5
                    },
                    { 
                        id: 102, 
                        color: '#ff3399',
                        image: './assets/images/scooter_pink.jpg',
                        quantity: 2
                    },
                ]
    
            }
        },
        methods: {
            addToCart() {
                console.log('emiting to partent todo add-to-cart: ' + 
                    this.variants[this.selectedVariant].id)

                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
                -- this.variants[this.selectedVariant].quantity
            },
            updateVariant(index) {
                this.selectedVariant = index;
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].image;
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            sale() {
                if(this.inStock) {
                    return this.brand + ' ' + this.product + ' On SALE!!'; 
                }
                return '';
            },
            shipping() {
                if(this.premium)
                    return 'Free';
                else
                    return 2.50;
            }
        },


})