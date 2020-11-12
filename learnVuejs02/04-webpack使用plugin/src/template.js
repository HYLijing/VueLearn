export default {
  template: `
  <div>
    <h2>
        这里是组件的内容
    </h2>
    <h1>{{message}}</h1>
    <button @click='btnClick'>按钮</button>
    <p>{{name}}</p>
  </div>
  `,
  data() {
    return {
      message: '你好啊~~',
      name: '哈哈哈'
    }
  },
  methods: {
    btnClick() {
      console.log("----------")
    }
  }
}