<template>
    <div id="smallChild">
        <p>{{`小子数据${smallcount}`}}</p>
        <button @click="sub">小子传大子数据</button>
        <button @click="alert1">小子-》大子方法</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            smallcount:10,
        }
    },
    methods:{
        sub(){
            this.$emit('subcount', --this.smallcount)
        },
        alert1(){
            alert('xixixixi~')
        }
    }
}
</script>