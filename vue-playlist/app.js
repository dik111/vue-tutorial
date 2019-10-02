//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"mrwu"
    },
    methods:{
        greet:function (time) {
            return 'Good '+time +' '+this.name+'!';
        }
    }
});