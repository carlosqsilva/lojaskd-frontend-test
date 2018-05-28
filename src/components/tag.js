import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const Tags = ({ items, ...props }) => (
  <Wrapper>{items.map((value, i) => <Item key={i}>{value}</Item>)}</Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin: 6px;
`

const Item = styled.span`
  color: #fff;
  background: ${props => props.theme.link};
  white-space: nowrap;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  padding: 4px 20px;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const state = ({ tags }) => ({
  items: tags
})

export default connect(state)(Tags)
