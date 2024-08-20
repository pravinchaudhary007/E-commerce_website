const Fainalprice = ({ fainalprice }) => {

    const roundedPrice = fainalprice ? Math.ceil(fainalprice/3) : 0;
  
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(roundedPrice);
  };
  
  export default Fainalprice;
  