<template>
    <div class="pagenation">
        <ul :class="theme">
            <li class="btn" @click="first">{{ btnTxt[0] }}</li>
            <li class="btn" @click="prev">{{ btnTxt[1] }}</li>
            <li v-for="(page,index) in show_page_numbers" :class="{num:true,active:page==pageIndex}" :key="index" @click="setCurrent(page)">{{ page }}</li>
            <li class="btn" @click="next">{{ btnTxt[2] }}</li>
            <li class="btn" @click="last">{{ btnTxt[3] }}</li>
        </ul>
        <div v-show="needGoto" class="goto-area">
            <span class="til-txt">第&nbsp;<b>{{ pageIndex }}</b>&nbsp;页</span>
            <input type="text" class="page-input" v-model="targetPage"/>
            <span class="goto-btn" @click="goto">{{ btnTxt[4] }}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
  export default {
    name: 'pagenation',
    props: {
      btnTxt: {
        type: Array,
        default: function(){
          return ['首页','上一页','下一页','尾页','转到']
        }
      },
      needGoto: {
        type:Boolean,
        default: false
      },
      theme: {
        type: String,
        default: 'theme-info'
      },
      limit: {
        type: Number,
        default:8
      },
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number
      },
      currentChange: {
        type: Function
      }
    },
    data () {
      return {
        pageIndex: this.current,
        show_page_numbers: [],
        targetPage: ''
      }
    },
    mounted () {
      this.refresh()
    },
    methods: {
      refresh () {
        if(this.total <= this.limit){
          this.show_page_numbers = this.createArr(1, this.total)
          return
        }
        let begin = this.pageIndex - 3
        let end = this.pageIndex +3
        begin = Math.max(begin, 1)
        end = Math.max(end, this.limit)
        begin = Math.min(begin, this.total-this.limit)
        end = Math.min(end, this.total)
        this.show_page_numbers = this.createArr(begin, end)
        this.currentChange(this.pageIndex)
      },
      createArr (start,end) {
        let arr = []
        for (let i=start;i<=end;i++) {
          arr.push(i)
        }
        return arr
      },
      first () {
        let pageNow = this.pageIndex
        if(pageNow > 1){
          this.setCurrent(1)
        }
      },
      prev () {
        let pageNow = this.pageIndex
        if(pageNow > 1){
           this.setCurrent(pageNow-1)
        }
      },
      next () {
        let pageNow = this.pageIndex
        if(pageNow < this.total){
          this.setCurrent(pageNow+1)
        }
      },
      last () {
        let pageNow = this.pageIndex
        if(pageNow < this.total){
          this.setCurrent(this.total)
        }
      },
      goto () {
        if(this.targetPage<= this.total){
            this.setCurrent(this.targetPage*1)
        }else{
          alert("页码超限")
        }
      },
      setCurrent (index) {
        this.pageIndex = index
        this.refresh()
      }
    }
  }
</script>

<style>
  .pagenation {
    padding:20px 0;
    text-align:center;
  }
  .pagenation ul {
    display:inline-block;
  }
  .pagenation ul:after {
    clear:both;
    content:"";
    display:block;
    width:0;
  }
  .pagenation ul li {
    display:inline-block;
    float:left;
    color:#808080;
    margin-right:5px;
    font-size:14px;
    line-height:1;
    border-radius:5px;
  }
  .pagenation ul li.btn {
    padding:7px 10px;
  }
  .pagenation ul li.num {
    width:30px;
    height:30px;
    text-align:center;
    line-height:30px;
  }
  .goto-area{
    display:inline-block;
    vertical-align:top;
  }
  .goto-area .til-txt{
    color:#808080;
    font-size:12px;
  }
  .goto-area b{
    font-size:12px;
    color:#ff3333;
  }
  .goto-area input{
    outline:none;
    appearance:none;
    boder:1px solid #ccc;
    margin-left:5px;
    margin-right:5px;
    width:30px;
    height:30px;
    text-align:center;
  }
  .goto-area .goto-btn{
    display:inline-block;
    font-size:14px;
    padding:5px;
    color:#fff;
    border-radius:5px;
  }
  /* 定义分页主题颜色 */
  .pagenation .theme-info li{
    border:1px solid #188cff;
  }
  .pagenation .theme-info li.active {
    color:#fff;
    background-color:#188cff;
  }
  .pagenation .theme-info + div .goto-btn{
    background-color:#188cff;
  }
  .pagenation .theme-danger li{
    border:1px solid #fb6a36;
  }
  .pagenation .theme-danger li.active {
    color:#fff;
    background-color:#fb6a36;
  }
  .pagenation .theme-danger + div .goto-btn{
    background-color:#fb6a36;
  }
  .pagenation .theme-success li{
    border:1px solid #27b981;
  }
  .pagenation .theme-success li.active {
    color:#fff;
    background-color:#27b981;
  }
  .pagenation .theme-success + div .goto-btn{
    background-color:#27b981;
  }
  .pagenation .theme-warning li{
    border:1px solid #ccba09;
  }
  .pagenation .theme-warning li.active {
    color:#fff;
    background-color:#ccba09;
  }
  .pagenation .theme-warning + div .goto-btn{
    background-color:#ccba09;
  }
</style>