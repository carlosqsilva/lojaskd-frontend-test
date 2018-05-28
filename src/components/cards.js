import React from "react"
import styled, { css } from "styled-components"
import { connect } from "react-redux"
import { add_wish } from "../store/actions"

const render = (isFixed, isRow) => ({ products, addWish }) =>
  products.map((product, i) => (
    <Block row={isRow} key={i}>
      <Image row={isRow} src={product.image} alt="product" />
      <div>
        <Description row={isRow}>{product.description}</Description>

        <Price>
          <strong>{`R$ ${product.price},00 `}</strong>à vista
        </Price>

        <Price small>
          ou 00x <strong>R$ 00,00 s/juros</strong>
        </Price>

        <Tag fixed={isFixed}>Tag %%</Tag>

        <WishWrapper
          top={!isRow}
          small={!isFixed}
          bottom={isRow}
          wish={product.wish}
          onClick={() => addWish(product.id)}
        >
          <span>Add to Wishlist</span>
          <svg width="20" height="20">
            <use xlinkHref="#wish" />
          </svg>
        </WishWrapper>
      </div>
    </Block>
  ))

const RenderBlock = render(true, false)
const RenderGrid = render(false, false)
const RenderList = render(false, true)

const ProductList = ({ items, addWish, view }) => (
  <Wrapper>
    {view === "block" && <RenderBlock products={items} addWish={addWish} />}
    {view === "grid" && (
      <Grid>
        <RenderGrid products={items} addWish={addWish} />
      </Grid>
    )}
    {view === "list" && <RenderList products={items} addWish={addWish} />}
  </Wrapper>
)

const WishWrapper = styled.a`
  text-decoration: none;
  padding: 10px;
  border-radius: 55px;
  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.15);
  background: #fff;
  font-size: 14px;
  color: ${props => props.theme.dark};
  display: inline-flex;
  align-items: center;

  > span {
    font-weight: 700;
    margin-right: 4px;
  }

  > svg {
    fill: ${props => props.theme.dark};
  }

  ${props => props.wish && WishActive};
  ${props => props.top && PositionTopRight};
  ${props => props.small && WishSmall};
  ${props => props.bottom && PositionBottomRight};
`

const WishSmall = () => `
  border-radius: 50%;

  > span {
    display: none;
  }
`

const WishActive = props => `
  background: ${props.theme.link};

  > span {
    color: #fff;
  }

  > svg {
    fill: #fff;
  }
`

const Wrapper = styled.div`
  padding: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
`

const Block = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${props => (props.row ? "initial" : "column")};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`

const Image = styled.img`
  height: auto;
  max-width: 100%;
  ${props => props.row && ImageList};
`

const ImageList = css`
  max-width: 45%;
  margin: 0 8px 8px 0;
`

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.grey};

  ${props => props.row && "margin-top: 0;"};
`

const Price = styled.p`
  font-size: 18px;
  margin-bottom: 0;

  ${props => props.small && PriceSmall};
`

const PriceSmall = css`
  font-size: 14px;
  margin: 0 0 10px 0;
`

const Tag = styled.span`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.dark};
  border-radius: 8px;
  font-weight: 700;
  font-size: 11px;
  padding: 2px 8px;

  ${props => props.fixed && PositionTopLeft};
`

const PositionTopLeft = css`
  position: absolute;
  top: 10px;
  left: 10px;
`

const PositionTopRight = css`
  position: absolute;
  top: 10px;
  right: 10px;
`

const PositionBottomRight = css`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const state = ({ products, view, wishList }) => {
  const items = products.map(product => {
    let check = wishList.some(e => e === product.id)
    if (check) return { ...product, wish: true }
    return product
  })

  return {
    items,
    view,
    wishList
  }
}

const action = {
  addWish: add_wish
}

export default connect(state, action)(ProductList)
