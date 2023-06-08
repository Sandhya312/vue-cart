<template>
    <div id="payment">
        <h2>SUMMARY</h2>
        <div class="coupon">
            <small>Apply your promo code</small>
            <select name="Coupon" id="CouponId" @change="coupon_select($event)">
              <option value="0"></option>
              <option value="10">SHOE10</option>
              <option value="20">NEW20</option>
              <option value="50">FEST50</option>
              <option value="60">RODIES60</option>
              <option value="80">VILLA80</option>
            </select>
        </div>
        <div class="priceDetail">
            <div class="subtotal">
                <h4>Subtotal</h4>
                <h4>${{ Sub_Total_price }}</h4>
            </div>
            <div class="Coupon">
                <h4>Coupon</h4>
                <h4>- $ {{Coupon_price }}%</h4>
            </div>
            <div class="shippintCost">
                <h4>Shipping Cost</h4>
                <h4>$ {{ this.$store.state.ShippingCost }}</h4>
            </div>
            <div class="Tax">
                <h4>Tax</h4>
                <h4>$ {{ this.$store.state.Tax }}</h4>
            </div>
            <div class="total">
                <h2>TOTAL</h2>
                <h2>${{ Total_Price }}</h2>
            </div>
            <button>CHECKOUT</button>
        </div>
    </div>
  </template>
  
  <script>
import { mapGetters } from 'vuex'
  export default {
     name:'paymentComp',
     computed:{
      ...mapGetters({
        Sub_Total_price:'Sub_Total_price',
        Coupon_price:'Coupon_price',
        Total_Price:'Total_Price',
      })
     },
     methods:{
    
      coupon_select(event) {
      const coupon = event.target.value;
      this.$store.dispatch('coupon_select',coupon)
    }
     }
  }
  </script>
  
  <style scoped>
  #payment{
    padding: 30px 10px;
    width: 40%;
    background: #f1f1f1;
    height: 100%;
  }
  .coupon{
    display: flex;
    height: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .coupon small {
    font-size: 20px;
    margin: 10px;
  }
  .coupon #CouponId{
    background: transparent;
    border: 2px solid #00000056;
    width:10rem;
  }
  .coupon #couponId option{
    background: #686262;
  }
  .priceDetail{
    padding: 30px;
    height: 77%;
  }
  .priceDetail div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    padding: 10px;
  }
  
  </style>