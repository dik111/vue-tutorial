//实例化vue对象
var one = new Vue({
    el:"#vue-app-one",
    data:{
       title:"app one 的内容"
    },
    methods:{

    },
    computed:{

    }
});

var two = new Vue({
    el:"#vue-app-two",
    data:{
        title:"app two 的内容"
    },
    methods:{
        changeTitle:function () {
            one.title = "已经改名了！"
        }
    },
    computed:{

    }
});