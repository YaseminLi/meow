<template>
        <div class="title border-bottom-1px">
            <i class="iconfont back" @click="back"></i>
            <span>{{title}}</span>
        </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    methods:{
        back(){
            this.$emit('back')
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.title
    height 45px
    display flex
    align-items center
    font-size $fontsize-large-x
    padding 0 10px
    border-bottom-1px($border-grey)
    background $color-yellow
    i 
        padding-right 10px
</style>