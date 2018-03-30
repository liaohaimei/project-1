<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '地区',
                        key: 'area',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'android-globe'
                                    }
                                }),
                                h('strong', params.row.area)
                            ]);
                        }
                    },
                    {
                        title: '描述',
                        key: 'description'
                    },
                    {
                        title: '案件添加者',
                        key: 'author'
                    },
                    {
                        title: '案件添加时间',
                        key: 'createtime'
                    },
                    {
                        title: '更新时间',
                        key: 'updatetime'
                    },
                    {
                        title: '案件编号',
                        key: 'number'
                    },
                    {
                        title: '案件类型',
                        key: 'type'
                    },
                    {
                        title: '处理进度',
                        key: 'progress'
                    },
                    {
                        title: '处理人',
                        key: 'person'
                    },
                    {
                        title: '处理结果',
                        key: 'result'
                    },
                    {
                        title: '操作',
                        key: 'operation',
                        width: 150,
                        align: 'center',
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
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        area: '山东威海',
                        description: '毒品案件',
                        author: 'root',
                        createtime: '',
                        updatetime: '',
                        number: '1545121512',
                        type: '电话',
                        progress: '未处理',
                        person: '',
                        result: '',
                    },
                    {
                        area: '山东威海',
                        description: '毒品案件',
                        author: 'root',
                        createtime: '',
                        updatetime: '',
                        number: '1545121512',
                        type: '电话',
                        progress: '未处理',
                        person: '',
                        result: '',
                    },
                    {
                        area: '山东威海',
                        description: '毒品案件',
                        author: 'root',
                        createtime: '',
                        updatetime: '',
                        number: '1545121512',
                        type: '电话',
                        progress: '未处理',
                        person: '',
                        result: '',
                    },
                    {
                        area: '山东威海',
                        description: '毒品案件',
                        author: 'root',
                        createtime: '',
                        updatetime: '',
                        number: '1545121512',
                        type: '电话',
                        progress: '未处理',
                        person: '',
                        result: '',
                    },
                    {
                        area: '山东威海',
                        description: '毒品案件',
                        author: 'root',
                        createtime: '',
                        updatetime: '',
                        number: '1545121512',
                        type: '电话',
                        progress: '未处理',
                        person: '',
                        result: '',
                    },
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
