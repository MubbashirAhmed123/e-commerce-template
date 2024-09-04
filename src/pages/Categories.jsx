import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';

const Categories = () => {
  const { category } = useParams();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div className="flex">
      <CategorySidebar />
      <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
