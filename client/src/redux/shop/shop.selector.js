import {createSelector} from 'reselect'

const selectPlant = state => state.shop;

export const selectCollections = createSelector(
    [selectPlant],
    shop => shop.plants
)

export const selectCollectionsForDailyDeals = (urlParams) => createSelector(
    [selectCollections],
    plants => {
        const {category , type , limit} = urlParams;
        if(type === 'new'){
           return plants[category].items.filter(product => product.new).slice(0,limit);
        }
    }
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    plants => Object.keys(plants).map((key) => plants[key])
)

export const selectIsCollectionsLoaded =  createSelector(
    [selectPlant],
    plants => !!plants.plants
)