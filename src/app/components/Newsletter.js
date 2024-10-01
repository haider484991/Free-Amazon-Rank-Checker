const Newsletter = () => {
    return (
      <section id="newsletter" className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h2>
        <form className="flex justify-center">
          <input type="email" placeholder="Enter your email" required className="border border-gray-300 p-2 rounded w-2/3 mr-2" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Subscribe</button>
        </form>
      </section>
    );
  };
  
  export default Newsletter;
  