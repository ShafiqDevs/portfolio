import Head from "next/head";
import Image from "next/image";
import Buttoonn from "../components/Buttoonn";
import Item from "../components/Item";
import ItemViewer from "../components/ItemViewer";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Home() {
  const [itemViewerOn, setItemViewerOn] = useState();
  const [itemViewerData, setItemViewerData] = useState({
    logo: "",
    projectTitle: "",
    projectDescription: "",
    KeyWords: [],
    imgUrl: "",
    roles: "",
    Deliverables: [],
    images: [],
    projectOverview: "",
    projectLink: "",
  });

  function toggleItemViewer(
    show,
    logo,
    projectTitle,
    projectDescription,
    KeyWords,
    imgUrl,
    roles,
    Deliverables,
    images,
    projectOverview,
    projectLink
  ) {
    setItemViewerData({
      logo,
      projectTitle,
      projectDescription,
      KeyWords,
      imgUrl,
      roles,
      Deliverables,
      images,
      projectOverview,
      projectLink,
    });
    setItemViewerOn(show);
  }
  return (
    <>
      <div className={`w-full h-fit pl-4 pr-4 md:pl-20 md:pr-20 bg-black/80`}>
        <div>
          <NavBar />
        </div>

        <div className='w-full h-fit mt-40 flex flex-col items-center text-center lg:items-start lg:text-start gap-14 text-white'>
          <h1 className='text-2xl lg:text-5xl lg:w-1/2 '>
            Developing Websites / Webapps for companies like <span>NIIC</span>{" "}
          </h1>
          <h1 className='md:w-1/3  md:text-xl'>
            if you're looking for a freelance developer to help bring an idea to
            life — let's jam
          </h1>

          <Buttoonn text={"shafiq.belaroussi@outlook.com"} />
        </div>

        <div className='w-full h-fit mt-40  text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row'>
          <div className='flex flex-col gap-4 py-10 px-24'>
            <Item
              toggleItemViewer={toggleItemViewer}
              logo={`/niic.png`}
              projectTitle={"NIIC Online Shop"}
              projectDescription={
                "NIIC Online Shop – Helping automating the written material orders"
              }
              projectOverview={`Wikibuy is a chrome plugin that helps you get coupon codes, loyalty rewards, and better offers from other sellers on products you’re interested in. For example, if you’re on the hunt for a camera and search for that camera on sites like Amazon, Wikibuy then pops up and gives you several other options of prices and places to purchase that ca`}
              imgUrl={`/shafiq.png`}
              roles={[]}
              Deliverables={[]}
              images={[]}
              projectLink={`sdf`}
              KeyWords={[`eCommerce`, `React`, `Backend`]}
            />
          </div>
          <div className='flex flex-col gap-4'></div>
          <div className='flex flex-col gap-4'></div>
        </div>
      </div>
      {itemViewerOn && (
        <ItemViewer
          logo={itemViewerData.logl}
          projectTitle={itemViewerData.projectTitle}
          projectDescription={itemViewerData.projectDescription}
          KeyWords={itemViewerData.KeyWords}
          imgUrl={itemViewerData.imgUrl}
          roles={[`Designer`, `Developer`]}
          Deliverables={[
            `Web app Design`,
            `Web app development`,
            `Backend development`,
          ]}
          images={[]}
          projectOverview={itemViewerData.projectOverview}
          projectLink={itemViewerData.projectLink}
          toggleItemViewer={toggleItemViewer}
        />
      )}
    </>
  );
}
