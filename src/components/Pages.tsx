import React, { FC } from 'react'
import styled from '@emotion/styled'


const TileBar = styled.div`
margin:10px 0 ;
.title{
  font-size:${(props) => (props.f ? `${props.f}px` : '25px')};
  font-weight:bold;
  width:300px;
  display:inline-block;
}
.main{

  font-size:${(props) => (props.f ? `${props.f}px` : '25px')};
}
`
export const Title = (props) => (
  <TileBar f={props.fontSize}>
  <span className='title'>{props.title}</span>
  <span className='main'>{props.main}</span>
  </TileBar>
)
