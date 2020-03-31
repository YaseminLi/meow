<template>
    <div class="goods">
        <img src="../common/img/goods.png">
        <div class="left">
            <div class="name">
                <span class="kind">主粮</span>
                <span class="brand">渴望/</span>
                <span class="weight">5kg</span>
            </div>
            <div class="count">
                <span><i class="iconfont reduce"></i></span>
                <span class="num">1</span>
                <span><i class="iconfont add"></i></span>
            </div>
        </div>
        <div class="right">
            <div class="status">还剩</div>
            <div class="days">140<span class="small">天</span></div>
        </div>
        <div class="nextButton" @click="editStock"><i class="iconfont next"></i></div>
    </div>
</template>
<script>
export default {
    methods:{
        editStock(){
            this.$emit('editStock')
        }
    }
}
</script>
<style lang="stylus" scoped>
.goods
    background $color-white
    padding 10px 20px
    display flex
    align-items stretch
    height 90px
    box-sizing border-box
    border-bottom 1px $border-grey solid 
    img 
        height 70px
        width 70px
    .left
        flex 1
        text-align left
        margin 0 10px
        .name
            margin 10px 0
           .kind
               margin-right 10px 
        .count
            display inline-block
            border 1px $border-grey solid 
            border-radius 5px
            overflow hidden
            height 24px
            background $background-grey-heavy
            .iconfont
                padding 0 6px
                font-size $fontsize-small-s
            .num
                padding 2px 10px
                line-height 24px
                border-right 1px $border-grey solid
                border-left 1px $border-grey solid
                background $color-white
    .right
        text-align right
        margin-right 20px
        .status
            margin 10px 0
        .days
            font-size $fontsize-large-xxxx
            .small
                font-size $fontsize-medium
                margin 0 0 0 5px
    .nextButton
       display flex
       align-items center
           

</style>