<template>
    <div id="newParent">
        <div class="test">
            <b1></b1>
            <b2></b2>
        </div>
    </div>
</template>
<script>
import b1 from './b1'
import b2 from './b2'
export default {
    data(){
        return {

        }
    },
    components:{
        b1,
        b2,
    }
}
</script>