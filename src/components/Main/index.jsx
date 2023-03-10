import React, { Component } from "react";
import Header from "../../components/Header";
import SideBar from "./../SideBar/index";
import Card from "./../Ui/Card";
import { useOrder } from "../../context/context";
import Choose from "./../ChooseOrder/index";
import "./style.scss";

const index = () => {


  const {
    state: { product },
  } = useOrder();
  return (
    <>
      <Header />
      <SideBar />
      <div className="site-main scroll-smooth mb-20">
        <div className="container">
          <div className="category-order flex items-start justify-between flex-col p-3">
            <h3 className="text-2xl font-medium category-title">
              Menu <span className="text-slate-600">Category</span>
            </h3>
            <div className="w-full px-3 box snap-x snap-mandatory">
              
              <div className="category-order-top snap-x snap-mandatory flex items-center justify-around gap-3 py-3">
                {product.slice(6, 12).map((e) => {
                  return <Card prop={e} key={e.id} />;
                })}
              </div>
            </div>
            <Choose />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
