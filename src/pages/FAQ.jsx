import { useEffect, useState } from 'react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState({});
  const [openFaq, setOpenFaq] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const FAQItem = ({ id, question, answer }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:bg-black/30 hover:border-white/10 flex-shrink-0 rounded-lg">
      <button
        onClick={() => toggleFaq(id)}
        className="w-full p-4 sm:p-6 md:p-8 text-left flex justify-between items-start gap-3 sm:gap-4 transition-all duration-300"
      >
        <span className="text-white text-sm sm:text-base font-medium leading-relaxed pr-2">{question}</span>
        <span className={`text-white/60 text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 ${openFaq[id] ? 'rotate-45 text-white' : ''}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openFaq[id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <div className="pt-4 sm:pt-6 border-t border-white/5">
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-[#0a0a12] overflow-hidden min-h-screen" style={{ backgroundImage: 'url(/wp-content/themes/openmind/assets/images/lines-2.png)', backgroundPosition: 'center', backgroundSize: 'contain' }}>
      {/* Light effect */}
      <div className="absolute right-0 top-1/4 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 200px #F87060', opacity: 0.3, height: 0, width: 0 }}></div>

      {/* Hero Section */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white font-outfit font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 animate-fade-in leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed animate-fade-in-delay px-2 sm:px-4">
            Find quick answers to common inquiries about our AI training, RLHF expertise, and how we can help your business achieve AI excellence. Plus, learn more about how our talent pool connects you with top-tier professionals to meet your organization's needs.
          </p>
        </div>
      </div>

      {/* FAQ Section 1 - AI Solutions */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            id="ai-solutions-faq" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 transition-all duration-1000 ${
              isVisible['ai-solutions-faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className={`flex flex-col justify-center lg:pr-8 transition-all duration-1000 delay-200 ${
              isVisible['ai-solutions-faq'] ? 'translate-x-0 opacity-100' : 'lg:-translate-x-20 opacity-0'
            }`}>
              <h2 className="text-white font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
                AI Solutions FAQs
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Answers to common questions about our cutting-edge AI training processes, RLHF expertise, and how we help businesses develop high-performing AI models.
              </p>
            </div>

            <div className={`bg-black/10 backdrop-blur-sm border border-white/5 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg transition-all duration-1000 delay-400 ${
              isVisible['ai-solutions-faq'] ? 'translate-x-0 opacity-100' : 'lg:translate-x-20 opacity-0'
            }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <FAQItem
                  id="ai-1"
                  question="How does your AI training process work?"
                  answer="Our process involves data collection, model training using RLHF, continuous feedback from human experts, and fine-tuning to optimize AI performance."
                />
                <FAQItem
                  id="ai-2"
                  question="What sets your AI solutions apart from others in the market?"
                  answer="Our focus on personalized RLHF, extensive expertise, and commitment to real-world performance makes us stand out in delivering impactful AI solutions."
                />
                <FAQItem
                  id="ai-3"
                  question="How long does it take to train an AI model with RLHF?"
                  answer="The training duration varies depending on the complexity of the model, but we typically aim for iterative improvements within a few weeks to months."
                />
                <FAQItem
                  id="ai-4"
                  question="How can I get started with your services?"
                  answer="To get started, reach out to us via our contact page. Whether you're interested in AI model development or joining our talent pool, we'll guide you through every step of the process."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section 2 - Talent Pool */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            id="talent-pool-faq" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 transition-all duration-1000 ${
              isVisible['talent-pool-faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Text Section */}
            <div className={`flex flex-col justify-center lg:pl-8 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible['talent-pool-faq'] ? 'translate-x-0 opacity-100' : 'lg:translate-x-20 opacity-0'
            }`}>
              <h2 className="text-white font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight lg:text-right">
                Talent Pool FAQs
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed lg:text-right">
                Learn more about how our curated talent pool connects top-tier professionals with their dream companies and how we can help you find the right fit for your team.
              </p>
            </div>

            {/* FAQ Items */}
            <div className={`bg-black/10 backdrop-blur-sm border border-white/5 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg lg:order-1 transition-all duration-1000 delay-400 ${
              isVisible['talent-pool-faq'] ? 'translate-x-0 opacity-100' : 'lg:-translate-x-20 opacity-0'
            }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <FAQItem
                  id="talent-1"
                  question="What is your talent pool, and how does it work?"
                  answer="Our talent pool consists of highly skilled professionals across various fields, carefully matched to connect with top companies based on specific job requirements and career goals."
                />
                <FAQItem
                  id="talent-2"
                  question="How do you select talent for your pool?"
                  answer="We select talent based on rigorous screening, qualifications, experience, and a fit for the specific needs of our clients and industry demands."
                />
                <FAQItem
                  id="talent-3"
                  question="How does your talent pool benefit companies?"
                  answer="We help companies find top-tier candidates quickly, saving time and resources in the recruitment process, and ensuring a good match for their specific needs."
                />
                <FAQItem
                  id="talent-4"
                  question="How do you ensure the quality of candidates in your talent pool?"
                  answer="We maintain a high-quality talent pool by continuously vetting candidates, offering professional development, and matching skills to current market trends."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 lg:py-32 mt-12 sm:mt-16 lg:mt-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            id="cta-section" 
            data-animate
            className={`bg-black/10 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-1000 ${
              isVisible['cta-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              {/* Text Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-16 order-1">
                <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
                  Interested? Come talk to us!
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Whether you're looking to enhance your AI models or explore new opportunities, we're here to help. Let's discuss how we can collaborate and drive success together.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#F87060] to-[#ff9580] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md uppercase text-xs sm:text-sm font-outfit tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-[#F87060]/30 transition-all duration-300"
                >
                  Get in touch
                </a>
              </div>

              {/* Image */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-16 flex items-center justify-center order-2">
                <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" 
                    alt="Contact Us" 
                    className="w-full max-w-md mx-auto transition-transform duration-700 hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light effects */}
      <div className="absolute left-0 bottom-1/4 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 200px #F87060', opacity: 0.25, height: 0, width: 0 }}></div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default FAQ;