import React, { Component } from "react"
import styled from "styled-components"
import search from "../assets/search.svg"

export default class SearchInput extends Component {
  state = { value: "" }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.value)
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Search field..."
        />
        <Submit />
      </Form>
    )
  }
}

const Form = styled.form`
  flex: 1;
  display: flex;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(117, 117, 117, 0.15);
  overflow: hidden;
`

const Input = styled.input`
  flex: 1;
  border: none;
  outline: 0;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding: 0 12px;
  color: #757575;
`

const Submit = styled.button`
  border: none;
  cursor: pointer;
  width: 50px;
  background: url(${search}) no-repeat center;
  background-size: 1.5rem;
`
