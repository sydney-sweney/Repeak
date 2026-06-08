<template>
    <div class="auth_win_email">

     <img src="@/assets/svg/logo_email.svg" alt="Email"   class="icon"/>

     <form class="hui" @submit.prevent="click_submit">
     <div class="input">
      <input v-model="nickname" placeholder="nickname" required />
     </div>

     <div class="input">
      <input v-model="tag" placeholder="@tag" required />
     </div> 

     <div class="input-c">
      <input type="submit" value="Continue" />
        
     </div>
     </form>

    </div>
     
  
</template>

<script setup>
    import { ref } from 'vue'
    const nickname=ref('')
    const tag=ref('')

    const emit= defineEmits(['info_profile'])
    const click_submit=()=>{
        console.log('Работает ура хапинес')
        emit('info_profile',{
            nickname: nickname.value,
            tag: tag.value
        })

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
