import React, { FC } from 'react'
import styled from '@emotion/styled'


const TileBar = styled.div`
margin:10px 0 ;
margin-left:${(props) => (props.ml ? `${props.ml}px` : '0px')};
.title{
  font-size:${(props) => (props.f ? `${props.f}px` : '25px')};
  font-weight:bold;
  width:300px;
  display:inline-block;
}
.main{
  font-size:${(props) => (props.f ? `${props.f}px` : '25px')};
}
.right{
  font-size:${(props) => (props.f ? `${props.f}px` : '25px')};
  float:right;
  position: relative;
  .mrz{
    position: absolute;
    right:100px;
    top:0;
    width:100px;
  }
}
`
export const Title = (props) => (
  <TileBar f={props.fontSize} ml={props.ml}>
  <span className='title'>{props.title}</span>
  <span className='main'>{props.main}</span>
  <span className='right'>{props.rt ? <span className='mrz'>默认值</span> : null} {props.rt}</span>
  </TileBar>
)
