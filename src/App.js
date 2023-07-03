import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail, SearchBar, Sidebar, Videos, ChannelCard, VideoCard } from "./components";

function App() {
  return (
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>

          <Navbar />
          <Routes>

            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route path="/search/:id" element={<SearchBar />} />
            <Route path="/search/:id" element={<Sidebar />} />
            <Route path="/search/:id" element={<Videos />} />
            <Route path="/search/:id" element={<ChannelCard />} />
            <Route path="/search/:id" element={<VideoCard />} />

          </Routes>
        </Box>
      </BrowserRouter>
  );
}

export default App;
