new Vue({
    el: '#app',
    data:{
        name: 'First Last',
        age: 99,
        image_source: 'https://limemicro.com/app/uploads/2019/01/ubuntu-logo-2.jpg'
    },
    methods:{
        multiplyAge:()=>{
            return this.age*3;
        },
        generateRandom:()=>{
            return Math.random()*100;
        }
    }
});