import { Injectable, signal } from '@angular/core';
import { ProductResponseData } from 'src/app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class SignalProductsService {
  public choosenProductIndex: number = -1;
  public signalProducts = signal<ProductResponseData[]>([{
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: "Marchew Czerwona",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 8,
    type: "VEGETABLE",
    category: "CARROT",
    unit: "kg",
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  },
  {
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: "Jęczmień eko",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 13,
    type: "CEREALS",
    category: "BARLEY",
    unit: "t",
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  },
  {
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: "Karkowka wieprzowa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 21,
    type: "MEAT",
    category: "PORK",
    unit: "kg",
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  },
  {
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: "Jonagold jablka",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 21,
    type: "FRUITS",
    category: "APPLE",
    unit: "kg",
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  },
  {
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: "Blask słońca",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 29,
    type: "FRUITS",
    category: "APPLE",
    unit: "kg",
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  }
  ])

  constructor() { }

  public addToSignalProducts(product: ProductResponseData): void {
    this.signalProducts.mutate(values => values.push(product));
  }

  public mutateSignalProdcuts(product: ProductResponseData): void {
    this.signalProducts.mutate(values => values[this.choosenProductIndex] = product);
  }
}
