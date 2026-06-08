<template>

<div class="main">
   
    <div class="icon-panel">
        <img src="@/assets/svg/main_page/logo_1_mini.svg" alt="logo" class="logo_mini" @click="go('/')" />

        <div class="icons">

            <div class="icon_item">
                <img src="@/assets/svg/main_page/notification.svg" /> 
                <div @click="go('/notification')">Notification</div>
            </div>

            <div class="icon_item">
                 <img src="@/assets/svg/main_page/chat.svg">
                 <div @click="go('/chat')">Chat</div>
            </div>


            <div class="icon_item">
                <img src="@/assets/svg/main_page/add-user.svg"/>
                <div @click="go('/addfriend')">Add to friend</div>
            </div>

             <div class="icon_item">
                <img src="@/assets/svg/main_page/friends.svg"/>
                <div @click="go('/friends')">Friends</div>
             </div>

        </div>

    
        <div class="profile">
            <div @click="go('/profile')"
                alt="logo" class="avatar" :style="{ backgroundImage: `url(${authState.currentUser.avatar})` }" />
            <div class="mini_data">
                 <span @click="go('/profile')" class="span_nick">
                    {{ authState.currentUser.nickname }}
                 </span>
                 <span @click="go('/profile')" class="span_tag">
                    {{'@'+ authState.currentUser.tag }}
                 </span>

            </div>
            <img src="@/assets/svg/main_page/settings.svg" alt="logo" class="icon_setting" />
        </div>
    </div>

    <div class="open_space">
        <router-view />
    </div>
    

</div>

</template>

<script setup>

    import { useRouter } from 'vue-router'
    import { authState } from '@/api/authState.js'

    const router = useRouter()
    const go = (path) => {
    router.push(path)
}
    

</script>
 


<style scoped>
    @font-face {
    font-family: 'Changa One';
    src: url('@/assets/fonts/Changa_One/ChangaOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@/assets/fonts/inter/Inter-Regular.otf');
    font-weight: 400;
}

@font-face {
    font-family: 'Inter';
    src: url('@/assets/fonts/inter/Inter-Medium.otf');
    font-weight: 500;
}


    .open_space{
        display: flex;
        justify-content: center;
        align-items: center;

        border-right: 1px solid #A9A9A9;


    }


  .main{
  width: 966px;
  min-height: 100vh;
  margin: 0 279px auto;

  display: grid;
  grid-template-columns: 291px 1fr;

  /* background-color: blue; */
  
}

.logo_mini{
    width:155px;
    height:55px;

    margin-top: 39px;
    cursor: pointer;

}
 
.icon-panel{

  display: flex;
  flex-direction: column;
  border-right: 1px solid #A9A9A9;
  height: 100vh;
  /* background-color: bisque; */
    font-size: 14px;
    font-weight: 700;
    font-family: 'Inter';
    letter-spacing: 0.04em;
    line-height: normal;


}
.icons{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 28px;

    gap: 6px;

}
.icon_item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 28px;

    gap: 5px;   
    cursor: pointer;
    transition: background 0.2s ease;

    

}

.icon_item:hover::before{
    
   background: rgba(29, 155, 240, 0.1);
    
}
.profile:hover{
    
   background: rgba(29, 155, 240, 0.1);
   border-radius: 999px;
}



.icon_item::before {
    content: '';
    position: absolute;

    left: -4px;
    right: -4px;

    top: 50%;
    transform: translateY(-50%);

    height: 36px;

    border-radius: 999px;

    background: transparent;
    z-index: -1;

    transition: background 0.2s ease;
}





.icon_text{
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    height: 106px;

    /* padding-top: 5px; */
    gap: 10px; 

    cursor: pointer;
    
    
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;

    line-height: normal;
    color: #000000;
    opacity: 1; 

}

.open_space{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap:11px;

   
}

.profile{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;


    
    margin-top: auto;
    margin-right: 20px ;
    margin-bottom: 20px;

    
}

.profile span {
    max-width: 150px;       
    white-space: nowrap;     
    overflow: hidden;        
    text-overflow: ellipsis; 
}

.avatar{
    border-radius: 30px ;
    height: 56px;
    width: 56px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
}

.mini_data{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;
}

.icon_setting{
    margin-left: auto;
}

.span_nick{
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;

    line-height: normal;
    color: #000000;
    opacity: 1; 

    cursor: pointer;

}

.span_tag{
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;

    line-height: normal;
    color: #000000;
    opacity: 1; 

    cursor: pointer;
}
</style>


