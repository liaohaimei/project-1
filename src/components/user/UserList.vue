<template>
  <div>{{id}}</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	data(){
		return {
			
		}
	},
  computed:{
    id(){
    	return this.$store.state.dialog.id
    }
  }
}
</script>