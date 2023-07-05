import { map, pipe } from 'rxjs';
import { Cart } from '../model/Cart';
import { Product } from '../model/Product';
import { CartDTO } from './dto/Cart.dto';
import { ProductDTO } from './dto/Product.dto';

export const productDTOMapper = () => {
  return pipe(map((product: ProductDTO) => Product.fromDTO(product)));
};

export const productsDTOMapper = () => {
  return pipe(
    map((products: ProductDTO[]) =>
      products.map((product) => Product.fromDTO(product))
    )
  );
};

export const cartsDTOMapper = () =>
  pipe(map((carts: CartDTO[]) => carts.map((cart) => Cart.fromDTO(cart))));
