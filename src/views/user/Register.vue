<template>
  <div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="usename"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, register)" type="text"
                     size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="6"
      :total="total"
      @current-change="page">
    </el-pagination>
    <!--      <tr>-->
    <!--        <td>no</td>-->
    <!--        <td>username</td>-->
    <!--        <td>password</td>-->
    <!--      </tr>-->
    <!--      <tr v-for="item in register">-->
    <!--        <td>{{item.id}}</td>-->
    <!--        <td>{{item.username}}</td>-->
    <!--        <td>{{item.password}}</td>-->
    <!--      </tr>-->

    <!--    {{msg}}-->
  </div>
</template>

<script>
  import * as axios from "axios";

  export default {
    name: "Register",
    created() {
      const _this = this
      axios.get('http://localhost:8181/register/findAll/1/6').then(function (resp) {
        _this.dableData = resp.data.content
        _this.total = resp.data.totalElements
        console.log(resp)
      })
    },
    data(){
      return{
        total:  null,
        tableData: null
        // tableData: [{
        //   id: '1',
        //   usename: '王小',
        //   password:"123"
        // },{
        //   id: '2',
        //   usename: '王小',
        //   password:"123"
        // }, {
        //   id: '3',
        //   usename: '王小',
        //   password:"123"
        // }]
      }
    },
    methods: {
      deleteRow(index, rows) {
        alert("确定要移除吗？");

        rows.splice(index, 1);
      },
      handleClick(row) {
        console.log(row);
      },
      page(currentPage){
        // axios.get('http://localhost:8181/register/findAll/'+currentPage+'/6')
        //   .then((resp) => {
        //     this.tableData = resp.data.content
        //     this.total = resp.data.totalElements
        //     console.log(resp)
        // })
        const _this = this
        axios.get('http://localhost:8181/register/findAll/'+currentPage+'/6')
          .then(function (resp){
            _this.tableData = resp.data.content
            _this.total = resp.data.totalElements
            console.log(resp)
          })
      }
    }
  }
</script>

<style scoped>
  .el-switch.is-disabled .el-switch__core, .el-switch.is-disabled .el-switch__label{
    cursor: pointer;
  }
</style>
