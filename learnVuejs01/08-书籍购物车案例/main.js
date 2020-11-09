const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《Unix编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
  ],
  name: 'Hello'
  },
  methods: {
    increase(index) {
      console.log("----")
      this.books[index].count++;
    },
    decrease(index) {
      this.books[index].count--;
    },
    removeBtn(index) {
      console.log("!!!!!")
      // 传递两个参数：第一个参数是数组的小标，也就是从哪个元素开始移除。
      // 第二个元素：移除的元素可数，传一，表示只移除当前这个元素
      this.books.splice(index,1);
    
    }
  },
  filters: {
    priceFilter (price) {
      return '￥'+price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // for(let book of this.books) {
      //   totalPrice += book.count * book.price;
      // }
      // return totalPrice;

      return this.books.map(item => item.price*item.count).reduce((preValue,item)=> preValue+item,0);

    }
  }

})