import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handlesubmit] = useForm("mgvwyqlb");

  if (state.succeeded) {
    return <div className="grid justify-center items-center text-center h-screen bg-green-500 font-bold text-white
           lg:text-2xl md:text-xl sm:text-base text-xs"> <p> Your Welcome 🎉 E-commerce website ✨</p>
       <p>Thanks for joining !!!</p>
        </div> 
  }

  return (
    <div className='h-auto w-auto max-w-full bg-contact bg-cover text-white lg:p-14 md:p-10 sm:p-8 p-2 bg-no-repeat'>
      <div className='bg-white md:rounded-md rounded-sm bg-opacity-25'>
        <h1 className='[text-shadow:2px_3px_5px_rgb(0,0,0,0.7)] text-white w-auto font-bold lg:text-4xl md:text-2xl sm:text-lg text-base text-center lg:p-4 md:p-3 sm:p-2 p-[2px]'>
          Contact Us
        </h1>
      </div>
      <div className='lg:p-8 text-center md:p-6 sm:p-4 p-2 md:font-semibold sm:font-medium font-normal lg:text-lg md:text-base sm:text-sm text-xs'>
        <p>Were here to help! Reach out to us with any questions or concerns.</p>

        <form onSubmit={handlesubmit} className='flex justify-center lg:m-10 md:m-8 sm:m-6 m-2'>
          <div className='flex flex-col lg:min-w-[600px] md:w-[600px] sm:w-[500px] w-[400px] gap-4 items-left border-2 border-white md:rounded-md rounded-sm bg-black bg-opacity-50 lg:p-10 md:p-8 sm:p-6 p-4'>
            <div className='text-left flex flex-col justify-center gap-1'>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                placeholder='Enter Your Name...'
                name="full-name"
                required
                id="name"
                className='outline-none text-black placeholder-gray-500 p-1 pl-2' />
            </div>
            <div className='text-left flex flex-col justify-center gap-1'>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='example123@gmail.com'
                required
                className='outline-none text-black placeholder-gray-500 p-1 pl-2' />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className='text-left flex flex-col justify-center gap-1'>
              <label htmlFor="phone">Phone Number (optional)</label>
              <input type="number" placeholder='Enter 10 digits Number...' min={10} name="phone" className='outline-none pl-2 text-black placeholder-gray-500 p-1' />
            </div>
            <div className='text-left flex flex-col justify-center gap-1'>
              <label htmlFor="order-number">Order Number (optional)</label>
              <input type="number" placeholder='123' min={1} name="order-number" className='outline-none text-black pl-2 placeholder-gray-500 p-1' />
            </div>
            <div className='text-left flex flex-col justify-center gap-1'>
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                id="massage"
                placeholder="Order-related inquiries..."
                rows="5"
                required
                className='max-h-[200px] min-h-[100px] outline-none text-black pl-2 placeholder-gray-500 p-1' />
              <ValidationError prefix="Message" field="Massage" errors={state.errors} />
            </div>
            <div className='flex items-center justify-center'>
              <button type="submit" disabled={state.submitting} className='hover:bg-yellow-300 p-2 bg-white text-black lg:rounded-lg md:rounded-md rounded-sm'>Send Message</button>
            </div>
          </div>
        </form>
        <section className="bg-black bg-opacity-50">
          <h2 className='text-center lg:text-2xl md:text-xl sm:text-lg text-base'>Contact Information</h2>
          <div className='lg:p-4 md:p-4 sm:p-2 p-1 lg:text-xl md:text-lg sm:text-base text-xs'>
            <p>Technical Support: For technical issues, please email 👉 <a href="mailto:pravinchaudhary88983@gmail.com" className='underline'>pravinchaudhary88983@gmail.com</a></p>
            <p>Phone Number: +91 8320595327</p>
            <p>WhatsApp Number: Equal to up side</p>
            <p>Physical Address: 111, Paldi Metro Station near, Ahmedabad, Gujarat, 385001.</p>
            <p>Customer Service Hours: Mon-Fri, 9 AM - 6 PM</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
