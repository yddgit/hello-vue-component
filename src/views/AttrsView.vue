<script setup>
import { ref } from 'vue'
import AttrsA from '@/components/AttrsA.vue'
import AttrsB from '@/components/AttrsB.vue'
import AttrsC from '@/components/AttrsC.vue'
import AttrsD from '@/components/AttrsD.vue'
import AttrsE from '@/components/AttrsE.vue'
const count = ref(0)
const op = (e) => {
    console.log(e.target.innerHTML + ' clicked')
}

</script>
<template>
    <div>
        <AttrsA class="large" style="border-color:#ffcc00;padding:10px;margin-bottom:10px" @click="count++" title="AA" /> {{ count }}<br/>
        <AttrsB class="small" style="border-color:#ccff00;padding:5px;margin-bottom:5px" @click="count--" title="BA" /> {{ count }}<br/>
        <AttrsC class="huge" style="font-size:20px;font-weight:700;color:#df2310" title="CA" op-name="Do Something" @op="op" /><br/>
        <AttrsD class="danger" style="font-size:20px;" @click="op"/>
        <AttrsE class="content" style="color:red" />
    </div>
</template>