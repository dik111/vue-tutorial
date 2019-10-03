Vue.component("greeting",{
    template:'<p>{{name}}:dfasdfsdfsdfsdf</p>',
    data:function () {
        return {
            name:"ll"
        }
    }
})

//实例化vue对象
new Vue({
    el:"#vue-app-one"
});

new Vue({
    el:"#vue-app-two"
});