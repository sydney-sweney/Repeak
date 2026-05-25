<template>
<div class="chatting">

     
            <div class="icon_item">
                <img src="@/assets/svg/main_page/notification.svg" @click="go('/notification')"/> 
                <img src="@/assets/svg/main_page/chat.svg" @click="go('/chat')" />
                <img src="@/assets/svg/main_page/add-user.svg" @click="go('/addfriend')"/>
                <img src="@/assets/svg/main_page/friends.svg" @click="go('/friends')"/>
            </div>
      

    <div class="massage">
      <div class="shapka_chat">
        <div class="chat_all"> Chat </div>
        <div class="search_line"> <img src="@/assets/svg/main_page/search_for line.svg" alt="friend" class=""/> Search </div>
      </div>

      <div class="people_chat">
      <div class="chat_person"></div>
      
      </div>


    </div>
    <div class="chat"></div>

</div>



</template>

<script setup>
   import { useRouter } from 'vue-router'
 

    const router = useRouter()

    const go = (path) => {
    router.push(path)
}
    


</script>
 



<style scoped>
@font-face {
  font-family:'Inter-Regular';
  src: url('@/assets/fonts/inter/Inter-Regular.otf') format('truetype');

  font-weight: normal;
  font-style: normal;
  font-display: swap; 
}


.chatting{
  width: 66%;
  min-height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 64px 1fr 2fr;
  
}



.panel{
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  gap: 5px;   
   

  background-color: bisque;

}
.massage{
  border-left: 1px solid #A9A9A9;
  border-right: 1px solid #A9A9A9;

  display:grid;
  grid-template-rows: 97px auto;


}
.shapka_chat{
  width: 387px;
  margin: 15px 17px 0px 17px;
  background-color: #e10af567;

  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  gap: 19px;

}
.chat_all{
      font-size: 20px;
      font-weight: 400;
      font-family: 'Changa One';
      letter-spacing: 0.02em;
      line-height: normal;
      color: #000000;
      opacity: 1;

}
.search_line{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;

  
  width: 100%;
  height: 42px;
  border-radius: 21px;
  background-color: #D9D9D9;
  border-color: 1px solid #A9A9A9;

  font-size: 14px;
  font-weight: 400;
  font-family: 'Inter-Regular';
  letter-spacing: 0.02em;
  line-height: normal;

}






.people_chat{
  margin-top: 36px;
  background-color: #00fa4b6c;
  

}






.chat{
  border-right: 1px solid #A9A9A9;
}


.icon_item{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 122px;
    gap: 5px;   
   
    cursor: pointer;

}

</style>


