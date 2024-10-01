const FAQ = () => {
    const faqs = [
      {
        question: "How does the rank checker work?",
        answer: "The rank checker scrapes data from Amazon to provide the current sales rank."
      },
      {
        question: "Is it free to use?",
        answer: "Yes, our tool is completely free to use!"
      },
      // Add more FAQs as needed
    ];
  
    return (
      <section id="faq" className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default FAQ;
  