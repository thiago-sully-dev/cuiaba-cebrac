import React from 'react'
import TitleClass from '../titleClass'

import fmcLogo from '../../assets/fmc-logo.jpg'
import { FmcContainer } from './style'

function Log() {
  return (
    <FmcContainer>
      <TitleClass
        title="Atendente de Farmácia"
        imageUrl={fmcLogo}
        classCss="title__fmc"
      />
    </FmcContainer>
  )
}

export default Log