<template>

<div class="autorization">
    <div class="top_button">
    <button class="btn" @click="clk_btn1"><img src="@/assets/svg/logo_google.svg" alt="Google" class="icon"/> Sign up with Google </button>
    <button class="btn" @click="clk_btn2"><img src="@/assets/svg/logo_VK.svg" alt="VK" class="icon"/>Sign up with VK </button>
    <button class="btn" @click="clk_btn3"><img src="@/assets/svg/logo_email.svg" alt="Email" class="icon"/>Sign up with Email</button>
    </div>

    <div class="baton_4">
        <span class="have_account">Already have an account?</span>
        <button class="btn_sign" @click="clk_btn4">Sign in</button>
    </div>
</div>


  
</template>

<script setup>

  const emit= defineEmits(['click_btn3','click_btn4'])
  const clk_btn4=()=>{
    emit('click_btn4')
  }
  const clk_btn3=()=>{
    emit('click_btn3')
  }


</script>



<style scoped>
    .top_button{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .baton_4{
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        align-items: center; 

    }

    .autorization{
        display: flex;
        flex-direction: column;
        width: 242px;
        height: 153px;

        
        justify-content: center;
        margin-bottom: 8px;
        gap: 8px;
        justify-content: space-between;

        
        
    }

    .btn{
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center; 
        align-items: center; 
        
        cursor: pointer;

        font-size: 16px;
        font-weight: 500;
        font-family: 'Changa One';
        letter-spacing: 0.02em;
        line-height: normal;

        width: 242px;
        height: 43px;
        

        background-color: #FFFFFF;
        border: 1px solid #A9A9A9;
        border-radius: 10px;
        box-sizing: border-box;

    }
    
    .icon {
         position: absolute;
         left: 16px; 
         pointer-events: none;
    }

    .btn:hover{

        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.50);

    }
    .btn_sign{
        display: flex;
        justify-content: center; 
        align-items: center; 

        cursor: pointer;
        
        font-size: 14px;
        font-weight: 400;
        font-family: 'Changa One';
        letter-spacing: 0.04em;
        line-height: normal;

        width: 104px;
        height: 38px;
        
        color: #ffffff;
        background-color: #000000;
        border: 1px solid #A9A9A9;
        border-radius: 10px;
        box-sizing: border-box;


    } 
     .have_account{
        font-size: 14px;
        font-weight: 500;
        font-family: 'Changa One';
        letter-spacing: 0.02em;
        line-height: normal;
        color:#A9A9A9;
    }


</style>
