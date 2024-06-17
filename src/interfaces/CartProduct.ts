import Product from "../interfaces/Product"

export default interface CartProduct extends Product{
  units:number;
}