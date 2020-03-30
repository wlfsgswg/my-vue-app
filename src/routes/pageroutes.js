// 该页面为所有二级路由嵌套，所有路由嵌套请按照此对象来写
// 概况
const survey = {
  name: "概览"
};
// 商品
const goods = {
  name: "商品管理",
  item: [
    {
      name: "商品中心",
      item: [
        {
          name: "商品管理",
          key: "goods/control"
        },
        {
          name: "商品分组",
          key: "goods/groups"
        },
        {
          name: "商品标签",
          key: "goods/tags"
        }
      ]
    }
  ]
};
// 订单
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
      name: "订单测试",
      key: "order/ceshi"
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

export { survey, goods, order };
