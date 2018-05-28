import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { set_view } from "../store/actions"

const ViewMode = ({ view, viewList, setView, ...props }) => (
  <Wrapper>
    <Results>
      <Text>
        <strong>99999</strong>
      </Text>
      <Text>resultados</Text>
    </Results>
    <Text link small>
      modo de exibição:
    </Text>
    {viewList.map((name, i) => (
      <Button name={name} active={name === view} onClick={setView} key={i}>
        <Icon>
          <use xlinkHref={`#${name}`} />
        </Icon>
      </Button>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(66, 66, 66, 0.15);
`

const Results = styled.div`
  flex: 1;
`

const Text = styled.p`
  color: ${props => (props.link ? props.theme.link : props.theme.dark)};
  width: ${props => (props.small ? "70px" : "auto")}
  margin: 0;
`

const Button = styled.button`
  display: flex;
  background: #fff;
  border: 1px solid ${props => props.theme.grey};
  border-radius: 8px;
  fill: ${props => props.theme.grey};
  padding: 4px;
  margin-left: 10px;

  ${props => props.active && ButtonActive};
`

const ButtonActive = props => `
  border: 1px solid ${props.theme.link};
  fill: ${props.theme.link};
`

const Icon = styled.svg.attrs({
  width: "30",
  height: "30"
})`
  pointer-events: none;
  margin: auto;
`

const state = ({ view, viewList }) => ({
  view: view,
  viewList: viewList
})

const action = {
  setView: set_view
}

export default connect(state, action)(ViewMode)
