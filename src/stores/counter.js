import { observable } from 'mobx';

const counter = observable({
  number: 1,
  increase() {
    this.number++;
  },
  descrease() {
    this.number--;
  }
})

export { counter }