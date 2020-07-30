import { observable } from 'mobx';
// import { counter } from 'counter';

const market = observable({
  selectedItems: [],
  put(name, price) {
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  },
  take(name) {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  },
  get total() {
    console.log('종합');
    return this.selectedItems.reduce((pre, curr) => {
      return pre + curr.price * curr.count
    }, 0);
  },
})

export { market }