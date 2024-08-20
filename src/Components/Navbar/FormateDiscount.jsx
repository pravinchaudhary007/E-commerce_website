

const FormateDiscount = ({discount}) => {
    return  Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits:2,
    }).format(discount);
}

export default FormateDiscount