import React, { useEffect, useState } from "react";
import BasicContent from "./BasicContent";
import Logo from "../img/logo.png";
import { useStateValue } from "../state/StateProvider";
import axios from "../api/axios";
import ConIntErr from "./ConIntErr";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import { HOME_ROUTE } from "../util/const";

function Home() {
  const [{ category }, dispatch] = useStateValue();
  const [errCon, setErrCon] = useState(false);
  const [resDataErr, setResDataErr] = useState(false);

  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: HOME_ROUTE,
    });
    
    if (!category?.data?.length) getData();
  }, []);
  
  /* GET REQUEST */
  const getData = async () => {
    setErrCon(false);
    try {
      const response = await axios.get("?rooms_category");
      !category?.data?.length && dispatch({
        type: "SET_CATEGORY",
        data: response?.data,
      });
      setResDataErr(true)
    } catch (err) {
      console.log(err);
      setErrCon(true);
    }
  };

  if (resDataErr) return <NotFound />;
  return (
    <>
      <BasicContent img={Logo} />
      <Navbar data={category.data} />
      {errCon && <ConIntErr onClick={() => getData()} />}
    </>
  );
}

export default Home;