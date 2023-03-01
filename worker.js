const funcObj = {
  fb: (n, prev = 1, next = 1) => {
    // 尾递归
    if (n <= 2) {
      return next
    }
    return funcObj.fb(n - 1, next, prev + next)
  },
  fb1: (n) => {
    if (n <= 2) {
      return 1
    }
    return funcObj.fb1(n - 2) + funcObj.fb1(n - 1)
  },
}

// onmessage事件
onmessage = function (e) {
  const { data } = e
  const res = funcObj[data.function](data.data)
  // 将获取的数据通过postMessage发送到主线程
  self.postMessage({
    data: res,
    name: 'worker test',
  })
  self.close()
}
