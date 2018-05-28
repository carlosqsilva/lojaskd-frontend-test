import * as type from "./constants"

export const set_view = e => ({
  type: type.SET_VIEW,
  view: e.target.name
})

export const add_wish = id => ({
  type: type.ADD_WISH,
  wish: id
})
