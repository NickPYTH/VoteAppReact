export const removeFlat = (flatId) => {
    return {
        type: "REMOVE_FLAT",
        payload: flatId,
    };
};