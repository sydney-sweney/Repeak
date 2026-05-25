<template>
<div class="notification">
    <div class="header">
        <span>Notification</span>
    </div>
    <div class="downer">
        Nothing to see here- yet
    </div>

    

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

    .notification{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;

    }
    .header{
        position: relative;
        width: 100%;
        height: 90px;
        /* background-color: aquamarine; */

        font-family: 'Inter-Regular';
        font-size: 24px;
        font-weight: 700;

        line-height: normal;
        letter-spacing: 0.02em;
        color: #000000;
        opacity: 1; 

        border-bottom: 1px solid #A9A9A9;

    }
   


    .downer{
        display: flex;

        margin-top: 138px;
        justify-content: center;
        align-items: center;

        font-family: 'Inter-Regular';
        font-size: 36px;
        font-weight: 400;

        line-height: normal;
        color: #000000;
        opacity: 1; 

    }


 


</style>

