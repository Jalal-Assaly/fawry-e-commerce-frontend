import { Injectable } from '@angular/core';
import { Item } from 'src/app/basket/models/item';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sharedList: Item[] = [];
  totalCost: number = 0;

  addToList(item: Item) {
    this.sharedList.push(item);
  }

  removeFromList(item: Item) {
    const index = this.sharedList.indexOf(item);
    if (index !== -1) {
      this.sharedList.splice(index, 1);
    }
  }

  setQuantity(item: Item) {
    const index = this.sharedList.indexOf(item);
    const itemToUpdate = this.sharedList[index];
    itemToUpdate.quantity = item.quantity;
    this.sharedList[index] = itemToUpdate;
    console.log(this.sharedList[index]);
  }

  getTotalCost() {
    this.totalCost = 0;
    this.sharedList.forEach((item) => this.totalCost += item.price * item.quantity);
    return this.totalCost;
  }

  clearBasket() {
    this.sharedList = [];
    this.totalCost = 0;
  }

  getSharedList() {
    return this.sharedList;
  }
}