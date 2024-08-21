import { NavLink } from "react-router-dom"

const About = () => {
  return (<>
    <div className='max-w-full w-auto h-fit min-h-screen bg-cover bg-no-repeat bg-neture lg:p-14 md:p-10 sm:p-8 p-4 '>
      <h1 className="[text-shadow:2px_3px_5px_rgb(0,0,0,0.7)] w-auto font-bold lg:text-4xl md:text-2xl sm:text-lg text-base text-center lg:p-4 md:p-3 sm:p-2 p-1"> About Us </h1> 
      <div className="drop-shadow-lg backdrop-blur-md md:font-semibold sm:font-medium font-normal lg:text-lg md:text-base sm:text-sm text-xs
      flex flex-col justify-center text-justify items-center lg:gap-4 md:gap-3 sm:gap-2 gap-[6px] lg:p-8 md:p-6 sm:p-4 p-2  sm:rounded-md rounded-sm">
     <p >Welcome to E-commerce website, your one-stop destination for all your shopping needs! We are 
      dedicated to bringing you the best products at the most competitive prices, ensuring a seamless and enjoyable 
      online shopping experience.</p>
    
      <p>At E-commerce website, we offer a wide range of products across various categories, including
         fashion, electronics, home essentials, beauty products, and much more. Our platform is designed to provide a
          user-friendly experience, making it easy for you to find what you need and make secure purchases with just 
          a few clicks.</p>
  
       <p >We pride ourselves on our commitment to quality, customer satisfaction, and fast delivery. Our team works
         tirelessly to curate a selection of products that meet the highest standards, and we partner with trusted
          suppliers to ensure you receive only the best.</p>
          
          <p >Founded with the vision of creating a seamless and enjoyable online shopping experience, E-commerce website
              brings together a vast selection of items from top brands and reliable sellers. Whether 
             youre looking for the latest fashion trends, cutting-edge electronics, home and kitchen essentials, or
              unique gifts, weve got you covered.</p>
        
         <p >What sets us apart is our dedication to our customers. We believe in providing not just products but also exceptional
        service. From a user-friendly website and easy navigation to secure payment options and fast delivery, every
         aspect of our platform is designed with you in mind. Our customer support team is always ready to assist you,
          ensuring that your shopping experience is smooth and hassle-free.</p>

      <p >Thank you for choosing E-commerce website as your preferred online shopping destination. We are
         excited to be part of your shopping journey and are committed to exceeding your expectations with every 
         purchase.</p>

         <p>Privacy Statement 👉 Your information is secure with us.  For details on how we use your data, please review our <NavLink className='text-white' to="/privacy-policy">Privacy Policy</NavLink>.</p>
          <br />
         </div>
    </div>
    </>)
}

export default About
