<template>
    <div id="b2">
        <p>{{msg}}</p>
    </div>
</template>
<script>
import Bus from './../assets/Bus'

export default {
    data(){
        return {
            msg:'初始值'
        }
    },
    created(){
        let _this = this;
        Bus.$on('send', value => {
            _this.msg = value;
        })
    }

}
</script>