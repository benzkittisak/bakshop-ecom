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

export const getSortProduct = (products, sortType, sortValue) => {
  if (!sortValue || !sortType) {
    return mergeProduct(products);
  }

  if (sortType === "category") {
    return mergeProduct(
      products.filter((product) => product.title === sortValue)
    );
  }
  if (sortType === "filterSort") {
    let sortProduct = [...products];
    if (sortValue === "default") {
      return sortProduct;
    } else if (sortValue === "priceHighToLow") {
      return sortProduct.sort((a, b) => b.price - a.price);
    } else if (sortValue === "priceLowToHigh") {
      return sortProduct.sort((a, b) => a.price - b.price);
    }

    return sortProduct;
  }
};

export const mergeProduct = (products) => {
  let mergeData = [];
  products.map((product) => product.items.map((item) => mergeData.push(item)));

  return mergeData;
};
