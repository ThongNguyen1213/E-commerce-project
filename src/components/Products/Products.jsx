import React from 'react'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Inventory from '../Inventory/Inventory'
import Sortbar from '../SortBar/SortBar'
import styles from './styles.css';
import items from '../../data';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { gender } = useParams();
//   const [selectGender, setSelectGender] = useState([]);
    const genderItems = items.products.filter((product) => product.gender === gender)

  return (
    <div className="product-main">
       <div className="categories-bar"><CategoriesBar genderItems={genderItems}/></div>
       <div className="inventory-bar"><Inventory genderItems={genderItems}/></div>
       <div className="sort-bar" ><Sortbar /></div>
    </div>
  )
}

export default Products