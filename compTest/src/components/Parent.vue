<template>
    <div class="hello">
        <p>{{`父数据${count}`}}</p>
        <button @click="add" >父->大子数据</button>
        <button @click="show">父-》大子方法</button>
        <big-child :bigcount="count" @show="show"></big-child>
        <br>
        <br>
        <br>
        <br>
        <router-link to="/newParent" >
            <button>兄弟间传值</button> 
        </router-link>
    </div>
</template>

<script>
import BigChild from './BigChild'
export default {
  name: 'HelloWorld',
  components:{
      BigChild
  },
  data () {
    return {
      count:1,
    }
  },
  methods: {
    add(){
        this.count++;
    },
    show(){
        alert('hahaha~')
    }

  },
}
</script>

