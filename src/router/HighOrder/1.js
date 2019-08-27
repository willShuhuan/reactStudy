//时间函数的应用，setTimeOut隔一段时间执行，只执行一次；setInterbal每隔一段时间执行，执行多次
setTimeout(function () {
    console.log("Hello World")
})

setInterval(function () {
    console.log("Hello World")
},1000)

//高阶组件基本概念
// 高阶组件就是接受一个组件作为参数并返回一个新组件的函数
// 高阶组件是一个函数，并不是组件