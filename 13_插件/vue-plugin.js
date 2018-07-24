(function () {
  const MyPlugin = {}
  // 必须要有一个install()
  MyPlugin.install = function (Vue, options) {
    console.log('install()')
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象方法myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value + '-------'
    })

    // 4. 添加实例方法
    Vue.prototype.$instanceMethod = function () {
      console.log('vm的方法$instanceMethod()')
    }
  }

  // 向外暴露MyPlugin
  window.MyPlugin = MyPlugin
})()