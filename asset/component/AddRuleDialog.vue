<template>
    <div class="content">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name: "AddRuleDialog",
        data() {
            return {
                msg: "添加规则对话框"
            }
        }
    }
</script>

<style scoped>
    .content {
        color: red;
    }
</style>