import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const handleFilter = (e) => {
    const option = e.target.value;
    let newCategory = [...category];

    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  useEffect(() => {
    const params = {};
    category && (params.category = category);
    setSearchParams(params);
  }, [category, setSearchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            defaultChecked={category.includes("Analog")}
            onChange={handleFilter}
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={category.includes("Digital")}
            value="Digital"
            onChange={handleFilter}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={category.includes("Chronograph")}
            value="Chronograph"
            onChange={handleFilter}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export { Filter };
