<template>
    
<div class="autorization">
    <div class="header_text">
        
        <span class="welcome_back"> Welcome back!!!</span>
        
    </div>
    
    
    <div class="top_button">
        <button class="btn"> <img src="@/assets/svg/logo_google.svg" alt="Google" class="icon"/> Sign in with Google </button>
        <button class="btn"> <img src="@/assets/svg/logo_VK.svg" alt="VK" class="icon"/>Sign in with VK </button>
        <button class="btn" @click="clk_btn_signin_email"> <img src="@/assets/svg/logo_email.svg" alt="Email" class="icon"/>Sign in with Email</button>
    </div>
    
    <div>
        <button class="btn_signup" @click="clk_sign_up">Sign up</button>
    </div>
    
</div>


  
</template>

<script setup>

  const emit= defineEmits(['clk_back_to_signpup','clk_sign_in_with_email'])
  const clk_sign_up=()=>{
    emit ('clk_back_to_signpup')

  }
  const clk_btn_signin_email=()=>{
    emit ('clk_sign_in_with_email')

  }
  

</script>



<style scoped>

    
    .header_text{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;


        width: 100%;


    }
    .welcome_back{

        white-space: nowrap;
        height: 20px;


        margin-left: 5px;
        margin-right: 5px;

        font-size: 16px;
        font-weight: 400;
        font-family: 'Changa One';
        letter-spacing: 0.04em;
        line-height: normal;


    }


    .btn_signup{
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
    .top_button{
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 12px;
    }

    
    .autorization{
        display: flex;
        flex-direction: column;

        width: 242px;
        height: auto;
        
        justify-content: center;
        align-items: center;
        gap: 12px;

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

    
    


</style>
