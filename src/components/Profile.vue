<template>
<div class="minePage">
    <div class="header">
        <div class="back_arr"><img src="@/assets/svg/back-arrow.svg" alt="back-arrow" @click="clk_back_arr"/></div>
        <span class="name1"> {{ authState.currentUser.nickname }}</span>
    </div>
    <div class="cover">
        <div class="foto_ava"></div>
    </div>

    <div class="person">

         <div class="data_person">
            <span class="name1"> {{ authState.currentUser.nickname }}</span>
            <span class="name2"> {{ "@" + authState.currentUser.tag }}</span>
         </div>

         <button class="edit_profile" @click="openModal">Edit profile</button>

    </div>

    <div class="bio">
        <div class="bio_data">
             <span>about me</span>
        </div>
    </div>

<div v-if="show_modal" class="modal_overlay" @click.self="show_modal = false">

    <div class="error_modal" v-if="show_error_modal">
        <span>{{ modal_error }}</span>
    </div>

    <div class="modal_window" >

        <div class="header_modal">
             <div class="zero"> 
                <div class="uper">
                     <div class="back_krest"><img src="@/assets/svg/main_page/crestik.svg" @click.self="show_modal = false"/></div>
                     <span> Edit Profile</span>
                </div>
            
                    <div class="btn_save" @click="saveData">Save</div>
            </div>  
        </div>


        <div class="cover_modal">
            <div class="foto_ava_modal"></div>
        </div>
        
        <div class="body_modal">
            <input class="first" placeholder="Name" v-model="data_name"/>
            <input class="second" placeholder="Tag" v-model="data_tag"/>    
            <textarea class="third" placeholder="About me" v-model="data_bio"></textarea>
        </div>
    </div>
</div>
</div>



</template>

<script setup>
    import { authState } from '@/api/authState.js'
    import { ref } from 'vue'

    const show_modal = ref(false)
    const show_error_modal = ref(false)
    const modal_error = ref('')

    const data_name = ref('')
    const data_tag = ref('')   
    const data_bio = ref('')

    const saveData = () => {

    if (!data_name.value.trim() || !data_tag.value.trim()) {
        modal_error.value = 'Name and tag cannot be empty'
        show_error_modal.value = true
         return
     }

        // проверка на уникальность тега
         const isTaken = authState.users.some(
         u => u.tag === data_tag.value && u.id !== authState.currentUser.id
        )

         if (isTaken) {
         modal_error.value = 'Tag already exists'
         show_error_modal.value = true
         return
        }

        // сохраняем
        authState.currentUser.nickname = data_name.value
        authState.currentUser.tag = data_tag.value
        authState.currentUser.bio = data_bio.value

        show_modal.value = false
    }
    const openModal = () => {
        data_name.value = authState.currentUser.nickname || ''
        data_tag.value = authState.currentUser.tag || ''
        data_bio.value = authState.currentUser.bio || ''

        show_modal.value = true
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
@font-face {
    font-family: 'Inter';
    src: url('@/assets/fonts/inter/Inter-Bold.otf');
    font-weight: 700;
}

    .minePage{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        /* background-color: rgb(255, 0, 0); */


    }
    .header{
        display:flex;
        flex-direction: row;
        align-items: center;     
        justify-content: flex-start; 
        gap: 10px;

        width: 100%;
        height: 54px;
        /* background-color: rgb(255, 251, 0); */

        font-size: 14px;
        font-weight: 700;
        font-family: 'Inter';
        letter-spacing: 0.04em;
        line-height: normal;

    }
    .back_arr{
        margin-left: 10px;


    }

   

    
    










    .cover {
        position: relative;
        height: 202px;
        background-image: url('@/assets/svg/main_page/Ha.jpg');
        background-size: cover;
        background-position: center;
    }

    
    .person{
        position: relative;
        height: 136px;
        width: 100%;
        /* background-color: rgb(0, 195, 255); */

    }
    .bio{
        width: 100%;
        /* background-color: rgb(47, 0, 255); */

    }

    .bio_data{
        
        display: flex;
        justify-content: center;

        height: 164px;
        width: 237px;

        background-color: rgb(0, 0, 0);
        

        border-radius: 22px;
        margin-left: 32px;

        
        color:#ffffff;
    }

    
    


    .edit_profile{
        position: absolute;
        top: 50px;
        right: 28px;

        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        height: 36px;
        width: 114px;
        border-radius: 18px;
        background-color: rgb(0, 0, 0);
        /* border: 1px solid #A9A9A9; */

        font-family: 'Inter';
        font-size: 15px;
        font-weight: 700;

        line-height: normal;
        color: #ffffff;
        opacity: 1; 

        cursor: pointer;
        transition: background 0.2s ease;

    }
  

    .data_person{
        position: absolute;
        left: 52px;
        top: 75px;

        display: flex;
        flex-direction: column;



    }

    .foto_ava{
        position: absolute;

        height: 118px;
        width: 118px;
        background-image: url('@/assets/svg/main_page/Ha.jpg');
        border-radius: 60px;

        left: 52px;
        top: 143px;

    }

    .modal_window{
        height: 590px;
        width: 536px;

        background-color: rgb(0, 0, 0);
        border-radius: 12px;
        animation: modalShow 0.2s ease;

    }
    .modal_overlay {
         position: fixed; /* ВАЖНО */
         top: 0;
         left: 0;
         width: 100vw;
         height: 100vh;

         display: flex;
         justify-content: center;
         align-items: center;

         background: rgba(0, 0, 0, 0.5); /* затемнение */
         backdrop-filter: blur(1px); /* БЛЮР */

         z-index: 9999; /* чтобы поверх всего */
    }
    .error_modal {
        position: absolute; /* или fixed */
    
        top: 20px;
        left: 50%;
        transform: translateX(-50%);

        padding: 10px 20px;
        border-radius: 8px;

        background: #ff4d4f;
        color: white;

        z-index: 10000; /* ВАЖНО: выше чем modal_window */
    }

    .header_modal{

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 29px;
    
            
        height: 44px;
        width: 100%;
        color:#ffffff;
    }
    .zero{

        display: flex;
        align-items: center;
    
        height: 22px;
        width: 513px;
        color:#ffffff;


    }
    .uper{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;


    }

    .btn_save{

        display: flex;
        justify-content: center;
        align-items: center;

        margin-left:auto;
        

        height: 22px;
        width: 56px;

        background-color: rgb(255, 255, 255);
        border: 1px solid #A9A9A9;
        color:black;

        border-radius: 12px;
    }

    .cover_modal{
        position: relative;
        height: 162px;
        background-image: url('@/assets/svg/main_page/Ha.jpg');
        background-size: cover;
        background-position: center;
    }
    .foto_ava_modal{
        position: absolute;

        height: 101px;
        width: 101px;
        background-image: url('@/assets/svg/main_page/Ha.jpg');
        border-radius: 50px;

        left: 23px;
        top: 130px;

    }

    .body_modal{
        display: flex;
        flex-direction: column;
        gap: 22px;

        margin-top: 84px;
        margin-left: auto;
        margin-right: auto;
        width: 446px;
        
        color:black;


    }
    .first,
    .second,
    .third {
        background: transparent;  
         color: white;              
         outline: none;             
    }
    .first::placeholder,
    .second::placeholder,
    .third::placeholder {
            color: rgba(255,255,255,0.5);
    }


    .first{

        height: 50px;
        width: 446px;

        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.5);
    }

    .second{
        height: 50px;
        width: 446px;

        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.5);
    }
    .third{
        height: 112px;
        width: 446px;

        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.5);
    }

    



</style>

