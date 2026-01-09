import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const marqueeRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div className="relative bg-custom-1 overflow-hidden" style={{ backgroundImage: 'url(/wp-content/themes/openmind/assets/images/lines-2.png)', backgroundPosition: 'center', backgroundSize: 'contain' }}>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white font-outfit font-medium text-6xl lg:text-7xl mb-6 animate-fade-in">
            Services
          </h1>
          <p className="text-custom-6 text-base lg:text-lg max-w-2xl mx-auto animate-fade-in-delay">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* Services Overview Cards */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div 
            id="card-1" 
            data-animate
            className={`bg-custom-9 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible['card-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <p className="text-custom-6 text-xs tracking-widest mb-6">01</p>
            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 leading-tight">
              AI Talent Sourcing and Deployment
            </h3>
            <p className="text-custom-6 text-sm leading-relaxed mb-8 flex-grow">
              Source and deploy the best AI professionals, aligning expertise with your project's specific requirements, needs, and goals.
            </p>
            <div className="mt-auto">
              <hr className="border-custom-8 mb-4" />
              <p className="text-white text-xs uppercase tracking-wider hover:tracking-widest transition-all duration-300 cursor-pointer">
                Discover more →
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div 
            id="card-2" 
            data-animate
            className={`bg-gradient-to-br from-custom-2 to-custom-7 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible['card-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-custom-5 text-xs tracking-widest mb-6">02</p>
            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 leading-tight">
              AI Model Training and Optimization
            </h3>
            <p className="text-custom-5 text-sm leading-relaxed mb-8 flex-grow">
              Enhance your AI model's performance through expert training, optimization, and real-world impact, ensuring accurate and efficient results.
            </p>
            <div className="mt-auto">
              <hr className="border-custom-5 mb-4" />
              <p className="text-white text-xs uppercase tracking-wider hover:tracking-widest transition-all duration-300 cursor-pointer">
                Discover more →
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div 
            id="card-3" 
            data-animate
            className={`bg-custom-9 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible['card-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-custom-6 text-xs tracking-widest mb-6">03</p>
            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 leading-tight">
              Customized AI Development Solutions
            </h3>
            <p className="text-custom-6 text-sm leading-relaxed mb-8 flex-grow">
              Tailor AI systems to your business needs, providing scalable, reliable, and efficient solutions for your most complex challenges.
            </p>
            <div className="mt-auto">
              <hr className="border-custom-8 mb-4" />
              <p className="text-white text-xs uppercase tracking-wider hover:tracking-widest transition-all duration-300 cursor-pointer">
                Discover more →
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom AI Solutions Section */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div 
            id="solutions-section" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['solutions-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Custom and Bespoke AI Solutions
              </h2>
              <p className="text-custom-6 text-base leading-relaxed mb-12">
                EverGen AI offers tailored AI services designed to meet your specific business needs. From model creation to optimization, we ensure your AI solutions align with your goals.
              </p>
              
              <div className="space-y-1">
                {['Data Annotation', 'Data Labeling', 'Model Evals', 'Code Gen Models', 'Vision Modeling', 'LLM Assess'].map((item, index) => (
                  <div 
                    key={item}
                    className="border-b border-custom-6 py-5 hover:border-white transition-all duration-300 cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-custom-6 text-sm group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <img 
                  src="/wp-content/themes/openmind/assets/images/img24-1024x680.jpg" 
                  alt="AI Solutions" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110" 
                  style={{ filter: 'grayscale(100%)' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES Marquee */}
      <div className="w-full py-16 lg:py-24 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <h4 className="text-custom-9 font-outfit font-black uppercase inline-block" style={{ fontSize: 'clamp(80px, 15vw, 200px)', opacity: 0.1 }}>
            SERVICES • SERVICES • SERVICES • SERVICES •
          </h4>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Service 1 */}
          <div 
            id="detail-1" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="overflow-hidden">
              <img 
                src="/wp-content/themes/openmind/assets/images/img56-1024x683.jpg" 
                alt="AI Talent" 
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-110" 
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-6 leading-tight">
                AI Talent Sourcing and Deployment
              </h3>
              <p className="text-custom-6 text-base leading-relaxed">
                Finding the right talent is critical to the success of your AI initiatives. At EverGen AI, we specialize in sourcing top-tier AI experts, including engineers, data scientists, and RLHF specialists, who are ready to integrate seamlessly into your team. Whether you need short-term support or long-term partnerships, we ensure that every professional we provide aligns with your project's needs and culture.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div 
            id="detail-2" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="overflow-hidden lg:order-2">
              <img 
                src="/wp-content/themes/openmind/assets/images/img54-2-1024x683.jpg" 
                alt="Model Training" 
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-110" 
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-6 leading-tight">
                AI Model Training and Optimization
              </h3>
              <p className="text-custom-6 text-base leading-relaxed">
                With over 5000+ training sessions conducted, our expertise in Reinforcement Learning from Human Feedback (RLHF) ensures your AI models are more accurate, efficient, and responsive. From training models to understand nuanced user behavior to optimizing existing systems for peak performance, we ensure your AI evolves effectively and stays ahead in a competitive market.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div 
            id="detail-3" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="overflow-hidden">
              <img 
                src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" 
                alt="Custom Solutions" 
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-110" 
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-6 leading-tight">
                Customized AI Development Solutions
              </h3>
              <p className="text-custom-6 text-base leading-relaxed">
                Every business has unique requirements, and we understand the importance of personalized solutions. Our team collaborates with you to design and develop AI systems tailored specifically to your objectives. From ideation to implementation, we focus on delivering solutions that are scalable, reliable, and capable of solving your most complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Light effects */}
      <div className="absolute right-0 top-1/4 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 200px #FFBE4E', opacity: 0.3, height: 0, width: 0 }}></div>
      <div className="absolute left-0 bottom-1/4 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 200px #FFBE4E', opacity: 0.2, height: 0, width: 0 }}></div>

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

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Services;