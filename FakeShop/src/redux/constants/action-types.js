// Constants are used to store action types as variables. This helps prevent typos 
// and improves maintainability, ensuring consistency across the application.

// For example, instead of using hardcoded strings like "SET_PRODUCTS" in multiple places, 
// we define them as constants and use ActionTypes.SET_PRODUCTS. 
// This reduces errors and makes the code easier to update in the future.

// In other words, we are predefining the possible action types, 
// limiting the actions that can be dispatched to the Redux store.

export const ActionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};
