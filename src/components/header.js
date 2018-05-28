import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import menu from "../assets/bars.svg"
import love from "../assets/heart.svg"
import user from "../assets/user.svg"
import cart from "../assets/cart.svg"
import SearchInput from "./searchInput"
import Tags from "./tag"

const Header = ({ qtd, ...props }) => (
  <Wrapper>
    <Level>
      <LevelItem>
        <Icon src={menu} alt="" />
      </LevelItem>
      <LevelSpace />
      <LevelItem>
        <Icon src={love} alt="" />
        <Badge>{qtd}</Badge>
      </LevelItem>
      <LevelItem>
        <Icon src={user} alt="" />
      </LevelItem>
      <LevelItem>
        <Icon src={cart} alt="" />
      </LevelItem>
    </Level>

    <Level>
      <SearchInput />
    </Level>

    <Level>
      <Tags />
    </Level>
  </Wrapper>
)

const Wrapper = styled.header`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(66, 66, 66, 0.15);
  margin-bottom: 20px;
`

const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const LevelSpace = styled.span`
  flex: 1;
`

const LevelItem = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  cursor: pointer;
  padding: 12px;
  width: 50px;
  height: 50px;

  &:hover {
    background: ${props => props.theme.lighten};
  }
`

const Badge = styled.span`
  background: ${props => props.theme.link};
  color: #fff;
  width: 18px;
  height: 18px;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  padding: 4px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
`

const Icon = styled.img`
  width: 100%;
`

const state = ({ wishList }) => ({
  qtd: wishList.length
})

export default connect(state)(Header)
