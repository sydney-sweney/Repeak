<template>
<div class="minePage">
    
    <div class="header">
        <div class="back_arr"><img src="@/assets/svg/back-arrow.svg" alt="back-arrow" @click="clk_back_arr"/></div>
        <span class="name1"> {{ authState.currentUser.nickname }}</span>
    </div>
    
    <div class="cover" :style="{ backgroundImage: `url(${imageCoverAccept})` }"> </div>
    
    
    <div class="person">
         <div class="foto_ava" :style="{ backgroundImage: `url(${imageAvatarAccept})` }"></div>
         <div class="data_person">
            <span class="name1"> {{ authState.currentUser.nickname }}</span>
            <span class="name2"> {{ "@" + authState.currentUser.tag }}</span>
         </div>

         <button class="edit_profile" @click="openModal">Edit profile</button>

    </div>

    <div class="bio">
        <div class="bio_data">
             <span>about me:</span>
             <div class="bio_text">{{ authState.currentUser.bio }}</div>
        </div>
    </div>

<div v-if="show_modal" class="modal_overlay">

    <div class="error_modal" v-if="show_error_modal">
        <span>{{ modal_error }}</span>
    </div>

    <div class="modal_window" >

        <div class="header_modal">
             <div class="zero"> 
                <div class="uper">
                     <div class="back_krest"><img src="@/assets/svg/main_page/crestik.svg" @click="closeModal"/></div>
                     <span> Edit Profile</span>
                </div>
            
                    <div class="btn_save" @click="saveData">Save</div>
            </div>  
        </div>


        <div class="cover_modal" @click="selectImage1" :style="{ backgroundImage: `url(${imageCover})` }">
            <div class="foto_ava_modal" @click.stop="selectImage2" :style="{ backgroundImage: `url(${imageAvatar})` }"></div>
        </div>

            <input type="file" ref="fileInput1" @change="onFileChange" hidden/>
            <input type="file" ref="fileInput2" @change="onFileChange2" hidden/>
        
        <div class="body_modal">
            <div class="name_input">
                 <input class="first"  v-model="data_name"/>
                 <label class="label" >Name</label>
            </div>

            <div class="tag_input">
                <input class="second"  v-model="data_tag"/>  
                <label class="label">Tag</label>
            </div>

            <div class="bio_input">
                <textarea class="third" v-model="data_bio"></textarea>
                <label class="label">About me</label>
            </div>


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

    const imageCover = ref(authState.currentUser.cover || '')
    const imageAvatar = ref(authState.currentUser.avatar || '')
    const imageCoverAccept = ref(authState.currentUser.cover || '')
    const imageAvatarAccept = ref(authState.currentUser.avatar || '')
    
    const fileInput1 = ref(null)
    const fileInput2 = ref(null)
    const selectImage1=(e)=>{
        e.stopPropagation()
        fileInput1.value.click()
    }
    const onFileChange=(e)=>{
        const file = e.target.files[0]
        if (!file) return
        imageCover.value= URL.createObjectURL(file)
        
        console.log(authState.currentUser)

    }
    const selectImage2=(e)=>{
        e.stopPropagation()
        fileInput2.value.click()
    }
     const onFileChange2=(e)=>{
        const file = e.target.files[0]
        if (!file) return
        imageAvatar.value= URL.createObjectURL(file)
       
        console.log(authState.currentUser)

    }



    const saveData = () => {

    if (!data_name.value.trim() || !data_tag.value.trim()) {
        modal_error.value = 'Name and tag cannot be empty'
        show_error_modal.value = true
         return
     }

       
         const isTaken = authState.users.some(
         u => u.tag === data_tag.value && u.id !== authState.currentUser.id
        )

         if (isTaken) {
         modal_error.value = 'Tag already exists'
         show_error_modal.value = true
         return
        }
        if (data_bio.value.length > 120) {
        modal_error.value = 'Bio too long (max 120 bitch)'
        show_error_modal.value = true
        return
        }
        
        imageAvatarAccept.value = imageAvatar.value
        imageCoverAccept.value = imageCover.value

        authState.currentUser.nickname = data_name.value
        authState.currentUser.tag = data_tag.value
        authState.currentUser.bio = data_bio.value
        authState.currentUser.avatar = imageAvatarAccept.value   
        authState.currentUser.cover = imageCoverAccept.value     

        show_modal.value = false
        
    }
    const openModal = () => {
        data_name.value = authState.currentUser.nickname || ''
        data_tag.value = authState.currentUser.tag || ''
        data_bio.value = authState.currentUser.bio || ''

        show_modal.value = true
        show_error_modal.value = false
        modal_error.value=''
        
    }

    const closeModal=()=>{
        show_modal.value=false

        imageAvatar.value=authState.currentUser.avatar || ''
        imageCover.value=authState.currentUser.cover || ''
        modal_error.value=''
        show_error_modal.value = false

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
        height: 202px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        border-bottom: 1px solid rgb(0, 0, 0, 0.5);
        border-top: 1px solid rgb(0, 0, 0, 0.5);
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
        flex-direction: column;
        align-items: center;

        height: 164px;
        width: 237px;
        gap: 5px;
        background-color: rgb(0, 0, 0);
        

        border-radius: 22px;
        margin-left: 32px;

        
        color:#ffffff;
    }

    .bio_data span{
        margin-top: 5px;
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.04em;
        line-height: normal;
    }
    .bio_text{
        width: 200px;
        height: 116px;

        white-space: pre-wrap;      
        word-break: break-word;     
        overflow-wrap: anywhere;

        font-family: 'Inter';
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.04em;
        line-height: normal;
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
    .edit_profile:hover{
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        border: 1px solid rgb(29, 156, 240);
    }

    .data_person{
        position: absolute;
        left: 52px;
        top: 75px;

        display: flex;
        flex-direction: column;

        font-size: 16px;
        font-weight: 400;
        font-family: 'Inter';
        letter-spacing: 0.04em;
        line-height: normal;


    }
    .name2{
        font-size: 12px;
        font-weight: 400;
        font-family: 'Inter';
        letter-spacing: 0.04em;
        line-height: normal;


    }

    .foto_ava{
        position: absolute;

        height: 118px;
        width: 118px;
        background-image: url('@/assets/svg/main_page/Ha.jpg');
        border-radius: 60px;
        border: 2px solid rgb(29, 156, 240);
        background-size: cover;
        background-position: center;
        z-index: 3;
        left: 52px;
        top: -59px;

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
         position: fixed; /* ВАЖНО */
         top: 20px;
         left: 50%;
         transform: translateX(-50%);

        padding: 10px 20px;
        border-radius: 8px;

        background: #ff4d4f;
        color: white;

        z-index: 10000; /* ВАЖНО: выше чем modal_window */
    }

   
    
    .label{
        position: absolute;
        top: 5px;
        left: 10px;

        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
    }
    
    .name_input, 
    .tag_input,
    .bio_input{
        position: relative;
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

        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;

        line-height: normal;
        color: #ffffff;
        opacity: 1; 

    }

    .btn_save{
        all: unset;     
        display: flex;
        justify-content: center;
        align-items: center;

        margin-left:auto;
        cursor: pointer;

        height: 22px;
        width: 56px;

        background-color: rgb(255, 255, 255);
        /* border: 1px solid #A9A9A9; */
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;

        line-height: normal;
        color: #000000;
        opacity: 1; 
    
        border-radius: 12px;


    }
    .btn_save:hover{
        border: 1px solid rgb(29, 156, 240);
        color: rgb(29, 156, 240);
    }

    .back_krest{
        cursor: pointer;
    }



    .cover_modal{
        position: relative;
        height: 162px;
       
        background-size: cover;
        background-position: center;
    }
    .foto_ava_modal{
        position: absolute;

        height: 101px;
        width: 101px;
        border: 2px solid rgb(29, 156, 240);
        border-radius: 50px;
        background-size: cover;
        background-position: center;
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



    
    .first,
    .second{
        box-sizing: border-box;
        height: 50px;
        width: 446px;
        padding-left: 10px;
        padding-top: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
        color: rgb(255, 255, 255);
    }

    .first:focus,
    .second:focus,
    .third:focus {
         border: 1px solid rgb(29, 156, 240);
    }

    .first:focus + .label,
    .second:focus + .label,
    .third:focus + .label {
        color: rgb(29, 156, 240);
    }

    .third{
        box-sizing: border-box;
        padding-left: 10px;
        padding-top: 18px;
        height: 112px;
        width: 446px;

        resize: none;

        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
        color: rgb(255, 255, 255);
    }

    



</style>

