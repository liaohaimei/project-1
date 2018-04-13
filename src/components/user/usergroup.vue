<template>
    <div>
		<Table :columns="historyColumns" :data="historyData"></Table>
		<Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
</template>
<style scoped>
  .paging{
      float:right;
      margin-top:10px;
  }
</style>
<script>

    export default {
        data () {
            return {
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
                historyColumns: [
	                {
		                title: '用户组',
		                key: 'group',
		                width: 200,
		                fixed: 'left',
		                sortable: true,
		                filters: [
                            {
                                label: 'cnns1',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
		                filterMultiple: true,
		                filterMethod (value, row) {
                            if (value === 1) {
                                return row.group === 'cnns1';
                            } else if (value === 2) {
                                return row.group === 'John Brown';
                            }
                        }
	                },
	                {
	                    title: '备注',
	                    key: 'about'    
	                },
	                {
	                    title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showUserList(params.row)
                                        }
                                    }
                                }, '查看')
                            ]);
                        }    
	                }

                ],
                historyData: []
            }
        },
        methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                
                let _this = this
                let url = _this.HOST + "/member/groups"
                //console.log(url)
                _this.$axios.get(url,{
                      params:{}
                  }).then(res =>{
                    // 保存取到的所有数据
                    this.ajaxHistoryData = this.filterData(res.data.data)
                    this.dataCount = res.data.data.length;
                    // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                    if(this.dataCount < this.pageSize){
                        this.historyData = this.ajaxHistoryData;
                    }else{
                        this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                    }
                  }).catch(error => {
                      console.log(error)
                  })
            },
            //过滤不需要的数据
            filterData(data){
              var res = []
              for(var i=0;i<data.length;i++){
                var resObj = {
                  id:data[i].id,
                  group:data[i].group,
                  about:data[i].about
                }
                res.push(resObj)
              }
              return res
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            },
	        showUserList(row){
	        	this.$store.dispatch({
	        		type: 'userlist_dialog',
	        		parm:row
	        	})
	        	this.$router.push('/main/userlist')
	        }
        },
        created(){
             this.handleListApproveHistory();
        }
    }
</script>
