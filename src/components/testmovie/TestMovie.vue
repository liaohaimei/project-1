<template>
  <div class="hello">
    <div v-for="movie in movies">
      <p>{{movie.title}}</p>
      <img :src="movie.img"/>
      <p>{{currentPage}}</p>
      <p>{{total}}</p>
      <p>{{pageSize}}</p>
    </div>
    <page-nation> 
            :page-index="currentPage" 
            :totla="count" 
            :page-size="pageSize" 
            @change="pageChange">
    </page-nation>
  </div>
</template>

<script>
import PageNation from 'components/pagenation/PageNation'
export default {
	//显示的声明组件
	components: {
		PageNation
	},
  data () {
    return {
		pageSize : 2 , //每页显示20条数据
	    currentPage : 1, //当前页码
	    total : 0, //总记录数
	    movies:[]
    }
  },
  created () {
  },
  mounted(){
  	this.getList()
  },
  methods:{
  	//获取数据
  	getList(){
  		let url = this.HOST + "/movie/top250"
  		this.$axios.get(url,{
                params:{
                    count:2,
                    start:18
                }
            }).then(res =>{
            	this.total=res.data.total
            	console.log(this.total);
                this.movies=this.filterData(res.data)
            }).catch(error => {
                console.log(error)
            })
  	},
  	//从page组件传递过来的当前page
    pageChange (page) {
        this.currentPage = page
        this.getList()
    },
    filterData(data){
      var finalMoveis = []
      for(var i=0;i<data.subjects.length;i++){
        var moveiesObj = {
          title:data.subjects[i].title,
          img:data.subjects[i].images.large
        }
        finalMoveis.push(moveiesObj)
      }
      return finalMoveis
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
