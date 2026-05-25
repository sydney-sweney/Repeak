<template>
    <div :class="['auth_win_email_wait', {auth_win_email_wait_hide:hide_wait}]"
    @animationend="onEnd">

    <img src="@/assets/svg/logo_email.svg" alt="Email" class="icon"/>
    <label class="waiting">
        Waiting for a bit...
    </label>

    <div class="spinner">
     <img src="@/assets/ex_animation/spinner/1spin.svg" class="spin"/>
    </div>

     <img src="@/assets/svg/postamat_mail.svg" class="postamat"/>
     
    </div>


  
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue'
const hide_wait= ref(false)
const emit= defineEmits(['done'])

    onMounted(() => {
        setTimeout(() => {
         hide_wait.value=true
        }, 2000) 
    })
   const onEnd = () => {
     if (hide_wait.value) {
         console.log('Обратная анимация функци пошла')
         emit('done') // только после анимации
  }
}

</script>



<style scoped>
    
    .auth_win_email_wait_hide {
        animation: hide_wait 1s ease forwards; /* пока что пусть такая будет*/
    }

    @keyframes hide_wait {
        from {
         transform: translateY(0);
            opacity: 1;
    }
        to {
         transform: translateY(-100%);
            opacity: 0;
 }
}



    .auth_win_email_wait{
        
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 11px 12px;
        margin-left: 46px;

        width: 265px;
        height: 275px;

        background-color: rgba(246, 137, 190, 0.4);
        border: 1px solid #A9A9A9;
        border-radius: 28px;
        
    }




    .waiting
     {
        margin-bottom: 14px;

        font-size: 12px;
        font-weight: 500;
        font-family: 'Changa One';
        letter-spacing: 0.02em;
        line-height: normal;
        color: #BBBEC1;
        opacity: 1;
    } 

    .icon {
        margin-top: 43px;
        margin-bottom: 14px;
    }

    .spinner{
        margin-bottom: 12px;

        width: 22px;
        height: 22px;

        animation: spin 1s linear 10 forwards;
    }
   
    @keyframes spin{
        from {
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
       

    
    

   

    

</style>
