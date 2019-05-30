<template>
    <div id="bigChild">
        <p>{{`大子数据${bigcount}`}}</p>
        <p>
            <input id="username" type="text" placeholder="请输入用户名" :value="count">    
        </p>
        <button @click="show"> 大子调用父方法</button>
        <button @click="alert2">大子调用小子方法</button>
        <small-child @subcount="subSmallChild" ref="smallchild"></small-child>
    </div>
</template>
<script>
import SmallChild from './SmallChild'
export default {
    data(){
        return {
            password:'qwe010203',
            count:'默认值'
        }
    },
    components:{
        SmallChild,
    },

    /** 
     * 父传子
     * 第一种方式 父组件的方法用 “:” 绑定 子元素变量和方法都写在 props 里面 
     * 第二种方式 父组件的方法用 “@” 或 “v-on:” 绑定 子元素变量写在props里， 方法写在 methods里 用 $emit()调用
     * */

    props:['bigcount'],

    methods: {
        show(){
            this.$emit('show','');
        },
        subSmallChild(smallcount){
            this.count = smallcount;
        },
        alert2(){
            this.$refs.smallchild.alert1()
        }

    },
}
</script>