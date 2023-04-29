import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <div>
        <h4 className="mb-3">All Category</h4>
        {categories.map((cat) => (
          <p key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default LeftNav;
