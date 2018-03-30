<template>
  <div class="hello">
    
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movies:[]
    }
  },
  created () {
    console.log(1)
           let url = this.HOST + "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?"
            console.log(url)
            this.$axios.get(url,{
            	headers:{
            		//referer: 'https://y.qq.com/portal/playlist.html',
            		authority:'c.y.qq.com' 
            	},
                params:{
					hostUin: 0,
					platform: "yqq",
					needNewCode: 0,
					categoryId: 10000000,
					sortId: 5,
					sin: 0,
					ein: 29
                }
            }).then(res =>{
            	console.log(res.data.list)
                //this.filterData(res.data)
            }).catch(error => {
                console.log(error)
            })
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
    console.log("2")
    },
    filterData(data){
      /*var finalMoveis = []
      for(var i=0;i<data.subjects.length;i++){
        var moveiesObj = {
          // title:data.subjects[i].title,
          // img:data.subjects[i].images.large
        }
        finalMoveis.push(moveiesObj)
      }
      this.movies = finalMoveis*/
    }
  }
}
</script>