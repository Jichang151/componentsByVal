<template>
    <div id="b1">
        <p>{{a}}</p>
        <button @click="sendMsg">向组件传值</button>
    </div>
</template>
<script>
import Bus from './../assets/Bus'
export default {
    data(){
        return {
            a:1,
        }
    },
    methods: {
        sendMsg(){
            Bus.$emit('send',++this.a);
        }
    }
}
</script>