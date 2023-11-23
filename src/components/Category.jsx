export const Category = ({ value, setSelectedCategory }) => {
  const categories = ["Shop", "House", "Bill", "Garden", "Other"];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        name="category"
        value={value}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};
