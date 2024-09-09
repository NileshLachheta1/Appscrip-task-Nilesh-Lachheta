import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { ArrowIcon, HeartIcon, ForwardArrowIcon } from '../Constants/icons';
import './Product.css'
import { filterOptions, products } from '../Constants/data';

const Product = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});
  const [openRecommend, setOpenRecommend] = useState(false);

  const handleFilter = () => {
    setIsShowFilter(!isShowFilter);
  }

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRecommend = (index) => {
    setOpenRecommend(!openRecommend)
  }

  return (
    <div id='product-main'>
      <div id="product-header">
        <div id='product-header-1'>
          <p id='product-count'>3425 ITEMS</p>
          <div id='product-filter-status'>
            {
              isShowFilter ?
                <>
                  <IoIosArrowBack />
                  <p id='product-filter' onClick={handleFilter}>HIDE FILTER</p>
                </>
                :
                <>
                  <ForwardArrowIcon />
                  <p id='product-filter' onClick={handleFilter}>SHOW FILTER</p>
                </>
            }
          </div>
        </div>
        <div id="product-header-2" onClick={handleRecommend}>
          <p>RECOMMENDED</p>
          <ArrowIcon />
          <div className={`dropdown-content ${openRecommend ? "show-recommend" : "hide-recommend"}`}>
            <ul>
              <li>RECOMMENDED</li>
              <li>NEWEST FIRST</li>
              <li>POPULAR</li>
              <li>PRICE : HIGH TO LOW</li>
              <li>PRICE : LOW TO HIGH</li>
            </ul>
          </div>
        </div>
      </div>

      <div id='product-main-section'>
        <div id={`${isShowFilter ? "filter-section-1" : "hide-filter-section"}`}>
          <div className='filter-link-1'>
            <input type="checkbox" name='custom' id='custom' />
            <label htmlFor='custom' name="custom">&nbsp;CUSTOMIZABLE</label>
          </div>

          {
            filterOptions?.map((item, index) => {
              return (
                <div className='filter-link-1' onClick={() => toggleDropdown(index)}>
                  <div className='drop-down'>
                    <p>{item?.title}</p>
                    <ArrowIcon />
                  </div>
                  <p className='sub-title'>{item?.category}</p>

                  <div class={`${openDropdown[index] ? "show-dropdown" : "hide-dropdown"}`}>
                    <p>{item.subtitle}</p>
                    <ul>
                      {
                        item?.subFilter.map((filter, filterIndex) => {
                          return (
                            <li key={filterIndex}><input type="checkbox" id='men' /> <label htmlFor="men">{filter.name}</label></li>
                          )
                        })}
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div id='product-card-section'>
          {
            products?.map((product, index) => {
              return (
                <div className='card' key={index}>
                  <img src={product?.image} alt="" />
                  <p>{product?.title}</p>
                  <div className='card-footer'>
                    <small>{product?.description}</small>
                    <HeartIcon className='footer-icon' />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Product