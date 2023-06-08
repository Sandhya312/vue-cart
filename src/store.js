import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        itemObj: [
            {
                title: 'Alpinestars Chrome Motorcycle Shoes',
                image: 'https://th.bing.com/th?id=OPA.%2bWLWZtCSy5qm0w474C474&w=272&h=272&o=5&pid=21.1',
                ArticleNumber: 1234,
                Price: 2000,
                ItemTotalPrice: 20,
                Color:"black",
                Size: 48,
                quantity: 1
            },
            {
                title: 'ELLE Embellished Slim Heel Pumps',
                image: 'https://th.bing.com/th?id=OPA.h9yh0%2f6G%2b6bMFw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1',
                ArticleNumber: 1556,
                Price: 1000,
                ItemTotalPrice: 10,
                Color:"White",
                Size: 48,
                quantity: 1

            },


        ],
        Coupon: 0,
        Tax: 5.0,
        ShippingCost: 7.0,
        SubTotalPrice: 0,
        TotalPrice: 0
    },
    getters: {
        Sub_Total_price(state) {
            let total_sum = 0;
            state.itemObj.forEach(item => {
                item.ItemTotalPrice = item.Price*item.quantity;
                total_sum += item.ItemTotalPrice;
            })
            state.SubTotalPrice = total_sum;
            return total_sum.toFixed(3);
        },
        Total_Price(state) {
            if(state.SubTotalPrice == 0) {
                state.ShippingCost = 0;
                state.Tax = 0;
                state.TotalPrice = 0;
            }else {
                state.Tax = 5.0;
                state.ShippingCost = 7.0;
                state.TotalPrice = state.SubTotalPrice * (1 - state.Coupon / 100) + state.Tax + state.ShippingCost;
            }

            return state.TotalPrice.toFixed(3);
        },
        Coupon_price(state) {
            return state.Coupon;
        }

    },
    mutations: {
        INC_QUANT(state, item_id) {
            state.itemObj.forEach(e => {
                if (e.ArticleNumber == item_id) {
                    e.quantity++;
                    e.ItemTotalPrice *= e.quantity;
                }
            })
        },
        DEC_QUAN(state, item_id) {
            state.itemObj.forEach(e => {
                if (e.ArticleNumber == item_id && e.quantity > 0) {
                    e.quantity--;
                    e.ItemTotalPrice *= e.quantity;
                }
            })
        },
        COUPON_SELECT(state, coupon) {
            state.Coupon = coupon;
        }

    },
    actions: {
        incQuan({ commit }, item_id) {
            commit('INC_QUANT', item_id);

        },
        decQuan({ commit }, item_id) {
            commit('DEC_QUAN', item_id);
        },
        coupon_select({ commit }, coupon) {
            commit('COUPON_SELECT', coupon);
        }

    }
})