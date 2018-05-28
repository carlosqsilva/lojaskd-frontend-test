import * as type from "./constants"

let initialState = {
  wishList: [],
  viewList: ["block", "grid", "list"],
  view: "block",
  tags: [
    "This is a tag",
    "This is a tag",
    "This is a tag",
    "This is a tag",
    "This is a tag"
  ],
  products: [
    {
      id: "p105",
      image: "http://via.placeholder.com/480x450",
      price: 2500,
      description:
        "Product name in a catalog page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum imperdiet dapibus."
    },
    {
      id: "p207",
      image: "http://via.placeholder.com/480x450",
      price: 2500,
      description:
        "Product name in a catalog page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum imperdiet dapibus."
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_VIEW:
      return {
        ...state,
        view: action.view
      }
    case type.ADD_WISH:
      let index = state.wishList.some(e => e === action.wish)
      if (!index) {
        return {
          ...state,
          wishList: [...state.wishList, action.wish]
        }
      } else {
        return {
          ...state,
          wishList: state.wishList.filter(e => e !== action.wish)
        }
      }
    default:
      return state
  }
}
