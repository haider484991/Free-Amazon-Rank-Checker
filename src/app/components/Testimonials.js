const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "This tool is a game-changer! It saved me so much time."
    },
    {
      name: "Bob Smith",
      feedback: "I love how easy it is to check sales ranks. Highly recommend!"
    },
    // Add more testimonials as needed
  ];
  
  const Testimonials = () => {
    return (
      <section id="testimonials" className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card mb-4 p-4 border-l-4 border-blue-600 shadow hover:bg-blue-100 transition duration-300">
            <p className="italic">{`"${testimonial.feedback}"`}</p>
            <p className="font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Testimonials;
  