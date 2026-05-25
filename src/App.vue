<template>
     <div v-if="!show_main">
     <Transition name="fade">
      <div  v-if="showlogo" :class="['center', { moved:show} ]">

        <div class="logo">
            <img src="@/assets/svg/logo_1.svg" alt="logo" />
        </div>

      <div :class="['divider',{active:show},]"></div>

      <div :class="['sign',{show:show && showi}]">

         <SignUp v-if= "screen==='signup'"
           @click_btn3="screen='signup_email'"
           @click_btn4="screen='signin'"/>

         <SignUp_email  v-if="screen==='signup_email'"
           @clk_back_arr="screen='signup'"
           @clk_submit="signUp"
           />
        

          <infoProfile v-if="screen==='profile'"
          @info_profile="create_Profile"/>

          <Sign_Wait v-if="screen==='sign_wait'"
          @done="GoToMain"
          />

          <SignIn v-if="screen==='signin'"
           @clk_back_to_signpup="screen='signup'"
           @clk_sign_in_with_email="screen='signin_email'"/>

          <SignIn_email v-if="screen==='signin_email'"
          @clk_back_arr_2="screen='signin'"
          @click_enter_email="signIn"
          />
        
         

        <div v-if="errorMessage" class="show_err">
             {{ errorMessage }}
        </div>
         
      </div>
      
      </div>
      


    </Transition>
    </div> 
      <router-view v-else />
   
    


</template>

<script setup>
import { ref, onMounted } from 'vue'

import { authApi } from './api/authApi.js'
import { authState } from './api/authState.js'
import infoProfile from './components/infoProfile.vue'

import SignUp from './components/SignUp.vue'
import SignUp_email from './components/SignUp_email.vue'

import Sign_Wait from './components/Sign_Wait.vue'

import SignIn from './components/SignIn.vue'
import SignIn_email from './components/SignIn_email.vue'

const show_main=ref(false)

const showlogo = ref(false)
const show = ref(false)
const showi = ref(false)


const errorMessage = ref('')
const screen = ref('signup') 



onMounted(() => {
  setTimeout(() => {
    showlogo.value = true          
    showi.value=true
    setTimeout(() => {
      show.value = true            
    }, 2000)

  }, 1000)                         
})


const signUp = async (payload) => {
  try {

    console.log('Сигн Ап работает')
    errorMessage.value = ''

    const user =  await authApi.signUp(payload)

    authState.users.push(user)
    authState.currentUser=user
    console.log('успешный вход:', user)

    screen.value = 'profile'
    
    
    
  } catch (err) {
    errorMessage.value = err.message
    screen.value = 'signup_email'
  }
}


const signIn = async (payload) => {
  try {

    errorMessage.value = ''
    screen.value = 'sign_wait'
    const user = await authApi.signIn(payload)

    authState.users.push(user)
    authState.currentUser = user

  } catch (err) {
    errorMessage.value = err.message
    screen.value = 'signin_email'
  }
}

const create_Profile = async (payload) => {
  try {
      errorMessage.value = ''
      screen.value = 'sign_wait'

    
      authState.currentUser.nickname = payload.nickname
      authState.currentUser.tag = payload.tag

      console.log('Профиль создан:', authState.currentUser)
    
  } catch (err) {
      errorMessage.value = err.message
      screen.value = 'profile'
  }
}

const GoToMain = () => {
  show.value = false
  setTimeout(() => {
      showlogo.value = false            
    }, 2000)
  
  setTimeout(() => {
      show_main.value=true         
    }, 3000)

}



  

  



</script>
 
<style>
@font-face {
  font-family:'Changa One';
  src: url('@/assets/fonts/Changa_One/ChangaOne-Regular.ttf') format('truetype');

  font-weight: normal;
  font-style: normal;
  font-display: swap; 

  



  }

   html, body {
     margin: 0;
     padding: 0;
     height: 100%;
  }
 
  img {
    display: block;
  }
</style>


<style scoped>

  .show_err {
    position: absolute;
     margin-top: 10px;
     color: red;
     font-size: 12px;
  }

  .btn_start_message{
   
    position:absolute;
    bottom: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 105px;
    height: 36px;

    cursor: pointer;

    border: 1px solid #A9A9A9;
    border-radius: 11px;
    background-color: #010101;
    color: #ffffff;
    
    font-size: 12px;
    font-weight: 400;
    font-family: 'Changa One';
    letter-spacing: 0.04em;
    line-height: normal;
  }

  
  .sign{
    position: absolute;
    opacity: 0;
    transition: opacity 1s linear;
    
  }

  
  .sign.show{

    transform: translateX(252px); 
    opacity: 1;

  }
  
  .center {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
    transition: transform 800ms ease-out;
    
  }

  /*тут состояния для палки */
  .divider {
    margin-right: 10px;

    width: 3px; 
    height: 108px;
    
    border-radius: 3px;
    background: black;

    transform: scaleY(0); 
    transform-origin: center; 
    transition: transform 800ms ease-out;
    
    animation-delay: 1s;
}
/*тут состояние 2е палку поставить */
  .divider.active{

    transform: scaleY(1);
  }

  .logo{
    overflow: visible;
    margin-right: 34px;
    width: 202px;
    height: 46px;
    
    
    
  }

  .center.moved{
    transform: translateX(-64px);
  }

  


  .fade-enter-active {
    transition: opacity 1s linear;
  }
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }

 .fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}



  

</style>


