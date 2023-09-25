import { ProductStatusEnum } from './product-status.enum';

export interface ProductDto {
  id: number;
  name: string;
  description: string;
  itemsInStock: number;
  manufacturingDate: Date;
  dueDate: Date;
  price: number;
  quantity: number;
  status: ProductStatusEnum;
}
