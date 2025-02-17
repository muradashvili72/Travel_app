import React from "react";

type Props ={
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNav = ({closeNav, showNav}:Props) =>{
  return <div>MobileNav</div>;
};
export default MobileNav;