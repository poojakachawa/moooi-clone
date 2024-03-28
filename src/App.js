import logo from './logo.svg';
import './App.css';
import Header1 from './component/header/Header1';
import Banner from './component/banner/Banner.jsx';
import Collection from './component/collection/Collection.jsx';
import CollectionMain from './component/collection/CollectionMain.jsx';
import LayoutMain from './component/layout/LayoutMain.jsx';
import Container from './component/containerbox/Container.jsx';
import Form from './component/form/Form.jsx';
import Footer from './component/footer/Footer.jsx';
import Menu from './component/menu/Menu.jsx';
import Menu_section from './component/Menu_section/Menu_section.jsx';
import { useState } from 'react';
import Bath from './component/bath/Bath.jsx';
import Bathmain from './component/bath/Bathmain.jsx';
import { data } from "./component/bath/bath.js"
import { Route, Routes } from 'react-router-dom';
import Layout from './component/layout/Layout.jsx';
import { furniture } from "./dataFiles/furniture.js"
import { lighting } from './dataFiles/lighting.js';
import { Accoessories } from './dataFiles/Accoessories.js';
import { wall } from './dataFiles/wall.js';
import { Beauty } from './dataFiles/Beauty.js';
import Deatial from './component/deatailbox/Deatial.jsx';

function App() {
  const obj = {
    img: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FWeb-Items%2FStories%2FPodcasts%2Fimage-thumb__62604__header_fullscreen_2x%2FPodcast_Design_Dreams_Mobile_Phone_Walking_In_Clouds.png&w=1080&q=80", name: "Get inspired by our Design Dreams podcast ",
    heading: "MOOOI PRESENTS",
    direction: "row-reverse", backgroundcolor: " rgb(227, 217, 198)", color: "black"
    , btnName: "Listen Now !"
  }
  const [show, setShow] = useState(false);
  function menuHandler() {
    setShow(!show);

  }
  return (
    <>
      {show ? <>
        <Menu_section />
      </> : null}
      <header className="App-header">
        <Header1 />
      </header>
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Menu obj={menuHandler} show={show} />
            <CollectionMain />
            <LayoutMain />
            <Container />
            <Layout value={obj} />
            <Form />
          </>
        } />
        <Route path="Bedding & Bath" element={<Bathmain productData={data} />} />
        <Route path="Furniture" element={<Bathmain productData={furniture} />} />
        <Route path="Lighting" element={<Bathmain productData={lighting} />} />
        <Route path="Home Accoessories" element={<Bathmain productData={Accoessories} />} />
        <Route path="Wall & Flower" element={<Bathmain productData={wall} />} />
        <Route path="Body & Beauty" element={<Bathmain productData={Beauty} />} />
        <Route path="/Detail/:name/:id" element={<Deatial />} />
      </Routes>
      {/* <Bathmain productData={data} /> */}

      <Footer />
      {/* <Deatial /> */}
    </>
  );
}

export default App;
