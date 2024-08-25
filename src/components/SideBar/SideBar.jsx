// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import './Sidebar.css'

// const items = [
//         {
//                 title: "Home",
//         },
//         {
//                 title: "About",
//         }
// ]

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//         <>
//         <div className="dropdown-container">
//         <div className="dropdown-header" onClick={toggleDropdown}>
//                 <span>Ideal For</span>
//                 <IoIosArrowDown className={`dropdown-icon ${isOpen ? "rotate" : ""}`} />
//         </div>
//         {isOpen && (
//                 <ul className="dropdown-list">
//                 <li className="dropdown-item">
//                         <input type="checkbox" />
//                 All
//                 </li>
//                 {items?.map((item, index) => (
//                 <li key={index} className="dropdown-item">
//                         <input type="checkbox" />
//                 {item?.title}
//                 </li>
//                 ))}
//                 </ul>
//         )}
//         </div>
//       </>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import "./Sidebar.css";

const FilterSection = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  const toggleFilter = (filterCategory) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: !prevFilters[filterCategory],
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked ? [...prevFilters[name], value] : prevFilters[name].filter((item) => item !== value),
    }));
  };

  const renderCheckbox = (name, label) => (
    <label>
      <input
        type="checkbox"
        name={name}
        value={label}
        onChange={handleFilterChange}
        checked={filters[name].includes(label)}
      />
      {label}
    </label>
  );

  return (
    <div className="filter-section">
      <div className="filter-header">
        <span>3425 ITEMS</span>
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      {showFilters && (
        <div className="filters">
          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("idealFor")}>
              <h3>IDEAL FOR</h3>
              <span>{filters.idealFor.length ? "Unselect all" : ""}</span>
            </div>
            {filters.idealFor && (
              <div className="filter-options">
                {renderCheckbox("idealFor", "Men")}
                {renderCheckbox("idealFor", "Women")}
                {renderCheckbox("idealFor", "Baby & Kids")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("occasion")}>
              <h3>OCCASION</h3>
            </div>
            {filters.occasion && (
              <div className="filter-options">
                {renderCheckbox("occasion", "Casual")}
                {renderCheckbox("occasion", "Party")}
                {renderCheckbox("occasion", "Wedding")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("work")}>
              <h3>WORK</h3>
            </div>
            {filters.work && (
              <div className="filter-options">
                {renderCheckbox("work", "Handcrafted")}
                {renderCheckbox("work", "Machine made")}
                {renderCheckbox("work", "Embroidered")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("fabric")}>
              <h3>FABRIC</h3>
            </div>
            {filters.fabric && (
              <div className="filter-options">
                {renderCheckbox("fabric", "Cotton")}
                {renderCheckbox("fabric", "Silk")}
                {renderCheckbox("fabric", "Wool")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("segment")}>
              <h3>SEGMENT</h3>
            </div>
            {filters.segment && (
              <div className="filter-options">
                {renderCheckbox("segment", "Premium")}
                {renderCheckbox("segment", "Budget")}
                {renderCheckbox("segment", "Luxury")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("suitableFor")}>
              <h3>SUITABLE FOR</h3>
            </div>
            {filters.suitableFor && (
              <div className="filter-options">
                {renderCheckbox("suitableFor", "Summer")}
                {renderCheckbox("suitableFor", "Winter")}
                {renderCheckbox("suitableFor", "All Season")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("rawMaterials")}>
              <h3>RAW MATERIALS</h3>
            </div>
            {filters.rawMaterials && (
              <div className="filter-options">
                {renderCheckbox("rawMaterials", "Natural")}
                {renderCheckbox("rawMaterials", "Synthetic")}
                {renderCheckbox("rawMaterials", "Recycled")}
              </div>
            )}
          </div>

          <div className="filter-category">
            <div className="filter-title" onClick={() => toggleFilter("pattern")}>
              <h3>PATTERN</h3>
            </div>
            {filters.pattern && (
              <div className="filter-options">
                {renderCheckbox("pattern", "Solid")}
                {renderCheckbox("pattern", "Printed")}
                {renderCheckbox("pattern", "Embroidered")}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
