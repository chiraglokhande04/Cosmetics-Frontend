import FormImg from "../../assets/form.png";

export default function ContactForm() {
    return (
      <div className="my-20 mx-32 flex flex-col md:flex-row items-center justify-center h-[550px] bg-gray-100 p-4 gap-x-0">
        {/* Left Side - Image */}
        <div className=" ">
          <img
            src={FormImg}
            alt="Product"
            className="w-auto h-[530px] object-cover"
          />
        </div>
  
        {/* Right Side - Form */}
        <div className="md:w-1/2 h-[530px] w-auto bg-white p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">SEND YOUR QUESTION</h2>
  
          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 h-24"
            ></textarea>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  }
  