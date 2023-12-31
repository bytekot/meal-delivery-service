export const selectReviewModule = state => state.review

export const selectReviewEntities = state => selectReviewModule(state).entities

export const selectReviewIds = state => selectReviewModule(state).ids

export const selectReviewById = (state, id) => selectReviewEntities(state)[id]
