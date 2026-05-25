<template>
<div class="add_to_friend">
    <div class="search_line">
        <img src="@/assets/svg/main_page/search_for line.svg" alt="logo" class="search_mini" />
        <div>Search name or username</div>
    </div>
    <div class="ex_user"></div>
    

</div>

</template>

<script setup>

 

</script>
 


<style scoped>
    @font-face {
        font-family:'Changa One';
        src: url('@/assets/fonts/Changa_One/ChangaOne-Regular.ttf') format('truetype');

        font-weight: normal;
        font-style: normal;
        font-display: swap; 

        font-family:'Inter-Regular';
        src: url('@/assets/fonts/inter/Inter-Regular') format('truetype');

        font-weight: normal;
        font-style: normal;
        font-display: swap; 

        font-family:'Inter-Medium';
        src: url('@/assets/fonts/inter/Inter-Medium') format('truetype');

        font-weight: normal;
        font-style: normal;
        font-display: swap; 

       
        }

  
    .add_to_friend{

        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        
        width: 479px;
        height:572px;

        background-color: black;



    }
    .search_line{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 42px;
        padding-left:24px;
        gap: 17px;

        box-sizing: border-box;

        width: 432px;
        height: 48px;

        background-color: #D9D9D9;
        border-color: #A9A9A9;
        border-radius: 13px;

         font-family: 'Inter-Regular';
         font-size: 14px;
         font-weight: 400;
         letter-spacing: 0.02em;
         line-height: normal;
         color: #010101;
         opacity: 1; 

    }

    .ex_user{
        

        width: 413px;
        height: 38px;


    }

</style>

