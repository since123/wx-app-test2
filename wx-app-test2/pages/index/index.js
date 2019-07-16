//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    iconSize: [20,30,40,50,60,70],
    iconColor: ['red','orange','yellow','green','rgb(0,255,255)','blue','purple'],
    iconType: ['success','success_no_circle','info','warn','waiting','cancel','download','search','clear'],
    nodes: [{
      name: 'div',
      attr: {
        class: 'div-class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap() {
    console.log('tap1111111111111111111111111111111111111111111111111111111111111111111111111')
  },
})
