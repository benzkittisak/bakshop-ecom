import { createSelector } from "reselect";

const selectPlant = (state) => state.shop;

export const selectCollections = createSelector(
  [selectPlant],
  (shop) => shop.plants
);

export const selectCollectionsForDailyDeals = (urlParams) =>
  createSelector([selectCollections], (plants) => {
    const { category, type, limit } = urlParams;
    if (type === "new") {
      return plants[category].items
        .filter((product) => product.new)
        .slice(0, limit);
    }


    return plants[category].items.slice(0, limit);
  });

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (plants) => Object.keys(plants).map((key) => plants[key])
);

export const selectIsCollectionsLoaded = createSelector(
  [selectPlant],
  (plants) => !!plants.plants
);

export const selectSearchCollection = (searchKeyword) =>
  createSelector([selectCollections], (plants) => {
    const convertCollectionsToArray = Object.keys(plants).map(
      (key) => plants[key]
    );
    const data = convertCollectionsToArray.map((plantsCollection) =>
      plantsCollection.items.filter(
        (item) =>
          item.name.includes(searchKeyword.toLowerCase()) ||
          item.description.includes(searchKeyword.toLowerCase())
      )
    );
    let mergeArray = [];
    data.map((product) => product.map((item) => mergeArray.push(item)));
    return mergeArray;
  });

export const selectCollectionsForRelated = (category) =>
  createSelector([selectCollections], (plants) => plants[category]);
