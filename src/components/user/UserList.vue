<template>
  <div>{{id}}
  <ul>
    <li v-for="item in items">{{item.name}}</li>
  </ul>
<pagenation :total="totalPage" :currentChange="whenChange" :current="pageIndex"></pagenation>
  </div>
</template>

<script>
import PageNation from 'components/pagenation/PageNation'
import Vue from 'vue'
import {mapState} from 'vuex'
Vue.use(PageNation)
export default {
  //显示的声明组件
  components: {
    'pagenation':PageNation
  },
	data(){
		return {
      btnArr: ['<<','<','>','>>'],
      theme: 'theme-success',
      totalPage:100,
      pageIndex:1,
      items:[]
		}
	},
  computed:{
    id(){
    	return this.$store.state.dialog.id
    }
  },
  mounted(){
    this.getUserList()
  },
  methods:{
     whenChange (item) {
        console.log(item)
      },
    getUserList(){
      console.log(this.id)
      let _this = this
      let url = _this.HOST + "/member/list"
      //console.log(url)
      _this.$axios.post(url,{
              group:this.id.id,
               page_index:1,
               page_size:3
        }).then(res =>{
          //this.total = res.data.data.count
          console.log(res.data.data)
          this.count = 10
          this.items = res.data.data.items

        }).catch(error => {
            console.log(error)
        })
    },
    //从page组件传递过来的当前page
    pageChange (page) {
        this.currentPage = page
        this.getUserList()
    },
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
  color:green;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
