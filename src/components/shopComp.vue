<template>

      <div id="shop">
       <div id="itemList">
        <div class="item" v-for="item in this.$store.state.itemObj" :key="item.ArticleNumber">
             <img :src="item.image" :alt="item.image" >
             <div class="itemDetails" :id="item.ArticleNumber">
                <h4  class="mb-5 font-1-5">{{ item.title }}</h4>
               <p class="mb-5">Article Number: {{ item.ArticleNumber }}</p>
                <p class="mb-5">Price per item: ${{ item.Price }}</p>
                <div class="colorSize">
                    <p>Color: {{ item.Color }}</p>
                <p>Size: {{ item.Size }}</p>
                </div>
                 <div class="itemfooter">
                    <div class="quantityDiv">
                    <button class="quantityBtn" @click="decQuan(item.ArticleNumber)"><h4>-</h4></button>
                <p>{{ item.quantity }}</p>
                <button class="quantityBtn" @click="incQuan(item.ArticleNumber)"> <h4>+</h4> </button>
            </div>
            <div>
                <p> ${{ item.ItemTotalPrice }}</p>
            </div>
                 </div>

             </div>
        </div>
       </div>
       <div id="shipping">
        <h3 class="font-1-5">Shipping</h3>
        <div class="location m-10 d-flex">
            <h4 class="icon">📍</h4>
            <div class="d-flex address">
                <h4>Anna Marla</h4>
            <small>196 Spring lremoslk station  St. Soho, Uttar Pradesh, India</small>
            </div>
        </div>
        <div class="phone m-10 d-flex">
            <h4 class="icon">📱</h4>
            <h4>+919023456789</h4>
        </div>
        <div class="delivery m-10 d-flex">
            <h4 class="icon">🚚</h4>
            <h4>Delivery on Tuesday, May 25.</h4>
        </div>
       </div>
      </div>
 
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name:'shopComp',
   data(){
    return {
       id:'',
    }
   },
   methods:{
    ...mapActions({
        incQuan:'incQuan',
        decQuan:'decQuan',
        
    })
   },
   

}
</script>



<style scoped>
#shop{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;

}
#itemList{
    height: 70%;
}

.item{
    padding: 10px;
    height: 10rem;
    display: flex;
}
.itemDetails{
    padding: 15px;
    width: 100%;
    height: 10rem;
    text-align: left;
}
.mb-5{
    margin-bottom: 5px;
}
.m-10{
    margin:10px;
}
.font-1-5{
    font-size: 1.2rem;
}
.item img{
    width: 25%;
}
.colorSize{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.quantityBtn{
    cursor: pointer;
    height: 30px;
    width: 93px;
    background: transparent;
    border: none;
    outline: none;
    text-align: center;
    display: flex;
    /* background: red; */
    align-items: center;
    justify-content: center;
}
.quantityBtn h4{
    font-size: 30px;
}
.itemfooter{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
.quantityDiv{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 5px 0;
    text-align: center;
    width: 7rem;
}
.d-flex{
    display: flex;
    align-items: center;

}
#shipping{
    padding: 10px;
    text-align: start;
    height: 30%;
}
.address{
    flex-direction: column;
    align-items: flex-start;
}
.icon{
    font-size: 20px;
}
</style>