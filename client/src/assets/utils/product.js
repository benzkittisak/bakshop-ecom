export const getIndividualCategories = (product) => {
  return product.map((item) => item.title);
};

export const setActiveClassToSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button , .product-filter button , .shop-tab button"
  );
  filterButtons.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const getFilterProduct = (products, sortType, sortValue) => {
  if (!sortValue) return products;
  if (sortType === "category") {
    return products.filter((product) => product.title === sortValue);
  }
};

export const mergeProduct = (products) => {
  let mergeData = [];
  products.map((product) => product.items.map((item) => mergeData.push(item)));

  return mergeData;
};
