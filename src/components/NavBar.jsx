import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <Stack 
    direction="row" 
    alignContent="center"
    p={2} 
    sx={{backgroundColor:'#000',position:'sticky', top:0,justifyContent:'space-between'}}>


        
        <Link to="/" 
        style={{display:'flex',alignItems:'center',textDecoration:'none',color:'#fff'}}>
            <img src={logo} alt="logo" style={{height:40}}/>

        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default NavBar