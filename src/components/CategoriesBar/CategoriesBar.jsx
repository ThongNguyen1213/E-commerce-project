import React from 'react';
import categories from '../../categories';
import items from '../../data';
import styles from './styles.css';


const CategoriesBar = ({genderItems}) => {

  let designers = [];
  genderItems.map((item) => {
    if(!designers.includes(item.designer)){
      designers.push(item.designer)
    }
    return designers;
  })

  

  return (
    <div>
      <h4 className="category-list">ALL CATEGORIES</h4>
      <ul style={{padding: '0px'}}>
        {Object.keys(categories).map((category) => (<li className="category-title">{category}</li>))}
      </ul>
      <h4 className="designer-list">ALL DESIGNERS</h4>
      <ul style={{padding: '0px'}}>
        {designers.map(designer => <li className="designer-title">{designer}</li>)}
      </ul>
    </div>
  )
}

export default CategoriesBar