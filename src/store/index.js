import * as type from "./constants"

let initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_VIEW_GRID:
      return {
        ...state
      }
    default:
      return state
  }
}
