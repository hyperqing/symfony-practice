<template>
    <div class="content">
        <el-button @click="dialogVisible = true">
            显示对话框
        </el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <span>{{ msg }}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AddRuleDialog",
        data() {
            return {
                msg: "添加规则对话框",
                dialogVisible: false
            }
        }
    }
</script>

<style scoped>
    .content {
        color: red;
    }
</style>