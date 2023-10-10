import './category-directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((catergory) => (
        <CategoryItem key={catergory.id} category={catergory} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
