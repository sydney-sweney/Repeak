<template>
    <div class="auth_win_email">

     <img src="@/assets/svg/back-arrow.svg" alt="back-arrow" class="back-arrow" @click="clk_back_arr"/>
     <img src="@/assets/svg/logo_email.svg" alt="Email"   class="icon"/>

        
    <form class="hui" @submit.prevent="click_submit">

        <div class="input">
            <input type="email" id="email" v-model="email" placeholder="Email" required />
        </div>

         <div class="input">
            <input type="password" id="password" v-model="password" placeholder="Password" required />
         </div> 

         <div class="input-c">
            <input type="submit" value="Create account"/>
        </div>

     </form>

    </div>
     

  
</template>

<script setup>
    import { ref } from 'vue'

    const email = ref('')
    const password = ref('')
    
    const emit= defineEmits(['clk_back_arr','clk_submit'])

    const click_submit = () => {
        console.log('сабмит работает')
        if (!email.value || !password.value) return
         emit('clk_submit', {
            email: email.value,
            password: password.value
    
         })
          email.value = ''
          password.value = ''
         
    }
    const clk_back_arr=()=>{
        emit('clk_back_arr')
    }

  


  
    </script>



<style scoped>

    .hui{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
   
    .auth_win_email{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-left: 46px;

        padding: 11px 12px;

        width: 265px;
        height: 275px;

        background-color: rgba(246, 137, 190, 0.4);
        border: 1px solid #A9A9A9;
        border-radius: 28px;
        
    }
    .back-arrow{
        position: absolute;
        left: 15px;
        top: 15px;

        cursor: pointer;

    }


        input[type="email"],
        input[type="password"]
       
    {
        font-size: 12px;
        font-weight: 500;
        /* font-family: 'Changa One'; */
        letter-spacing: 0.02em;
        line-height: normal;
        color: #000000;
        opacity: 1;
    } 
     input[type="submit"] 
    {
        font-size: 12px;
        font-weight: 400;
        font-family: 'Changa One';
        letter-spacing: 0.02em;
        line-height: normal;
        color: #ffffffd5;
        opacity: 1;
    } 
   
    .input {
        width: 242px;
        height: 43px;
        
    }

    .input-c {
        width: 105px;
        height: 36px;
        
    }

    .input-c input {
        text-align: center;

        width: 100%;
        height: 100%;
        
        background-color: #000000;
        border: 1px solid #A9A9A9;
        border-radius: 10px;
        box-sizing: border-box;

        cursor: pointer;
        
    }



    .input input {
        text-align: center;

        width: 100%;
        height: 100%;
        
        background-color: #FFFFFF;
        border: 1px solid #A9A9A9;
        border-radius: 10px;
        box-sizing: border-box;
        

    }
    .icon {
        margin-top: 43px;
        margin-bottom: 14px;
    }

    .input {
        margin-bottom: 14px;
    }

    .input:last-of-type {
         margin-bottom: 20px;
    }


    

</style>
