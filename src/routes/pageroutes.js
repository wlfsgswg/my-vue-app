// 该页面为所有二级路由嵌套，所有路由嵌套请按照此对象来写
// 订单管理
const order = {
  name: "订单管理",
  item: [
    {
      name: "订单查询",
      item: [
        {
          name: "全部订单",
          key: "order/all"
        }
      ]
    },
    {
      name: "订单处理",
      item: [
        {
          name: "退款管理",
          key: "order/refund"
        },
        {
          name: "核销管理",
          key: "order/check"
        }
      ]
    }
  ]
};

export { order };
