
 <template>  
     <img src="@/assets/svg/main_page/smska_start.svg" />
     <span class="first_text">Start conversation</span>
     <span class="second_text">Choose from your exiting conversations, or start a new one.</span>
     <div class="btn_new_chat">New chat</div>
</template>
<script setup>

</script>
<style scoped>
.first_text{
    font-family: 'Changa One';
    font-size: 24px;
    font-weight: 400;

    letter-spacing: 0.02em;
    line-height: normal;
    color: #000000;
    opacity: 1;   

}
.second_text{
    font-family: 'Inter-Regular';

    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: normal;
    color: #000000;
    opacity: 1;  

}

.btn_new_chat{

    font-family: 'Changa One';

    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: normal;
    color: #BBBEC1;
    opacity: 1;  

    width: 104px;
    height: 39px;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    border-radius: 21px;
    border-color: #A9A9A9;
    background-color: #000000;

}
</style>