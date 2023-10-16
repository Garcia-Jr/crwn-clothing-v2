import './shop.styles.scss';
import { useProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { products } = useProductsContext();

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
