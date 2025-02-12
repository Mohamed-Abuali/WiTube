import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';

function App() {


  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/channel/:id" element={<ChannelDetail/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
