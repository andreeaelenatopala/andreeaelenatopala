import React from 'react'
import { useState } from 'react'

import * as Styled from './styles'

import Input from '../../atoms/Input/index'
import Button from '../../atoms/Button/index'
import TextArea from '../../atoms/TextArea'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    setFirstName('')
    setLastName('')
    setContent('')
  }

  return (
    <Styled.FormIn>
      <Input
        type="text"
        onChange={setFirstName}
        value={firstName}
        placeholder={'first name'}
      />
      <Input
        type="text"
        onChange={setLastName}
        value={lastName}
        placeholder={'last name'}
      />
      <TextArea
        placeholder={'Welcome'}
        onChange={setContent}
        value={content}
        type={'text'}
      />
      <Styled.ButtonWrapper>
        <Button text="submit" onClick={handleSubmit} />
      </Styled.ButtonWrapper>
    </Styled.FormIn>
  )
}
export default Form
