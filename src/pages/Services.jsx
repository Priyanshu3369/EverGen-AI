import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const marqueeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-custom-1 overflow-hidden">
      {/* Hero Section with Parallax Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Layers */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-custom-1 z-10"></div>
          
          {/* Neural network pattern background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 190, 78, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255, 190, 78, 0.15) 0%, transparent 50%),
                               linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
            }}
          ></div>

          {/* Animated grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 190, 78, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 190, 78, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-custom-2 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-20 text-center max-w-4xl mx-auto px-8 lg:px-16"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <h1 className="text-white font-outfit font-medium text-6xl lg:text-8xl mb-6 animate-fade-in">
            Services
          </h1>
          <p className="text-custom-6 text-base lg:text-xl max-w-2xl mx-auto animate-fade-in-delay">
            Comprehensive AI solutions tailored to your business needs
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-custom-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-custom-2 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-custom-7 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Services Overview Cards with Popup Animation */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32 bg-custom-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div 
            id="card-1" 
            data-animate
            className={`bg-custom-9 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['card-1'] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
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
            className={`bg-gradient-to-br from-custom-2 to-custom-7 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['card-2'] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '150ms' }}
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
            className={`bg-custom-9 p-10 lg:p-12 flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['card-3'] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '300ms' }}
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

      {/* Custom AI Solutions Section - Redesigned */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32 bg-gradient-to-b from-custom-1 to-custom-9/30">
        <div className="max-w-7xl mx-auto">
          <div 
            id="solutions-section" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['solutions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-white text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Custom and Bespoke AI Solutions
              </h2>
              <p className="text-custom-6 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                EverGen AI offers tailored AI services designed to meet your specific business needs. From model creation to optimization, we ensure your AI solutions align with your goals.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Data Annotation', delay: 0 },
                { title: 'Data Labeling', delay: 100 },
                { title: 'Model Evals', delay: 200 },
                { title: 'Code Gen Models', delay: 300 },
                { title: 'Vision Modeling', delay: 400 },
                { title: 'LLM Assess', delay: 500 }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={`bg-custom-9/50 backdrop-blur-sm border border-custom-8/30 p-8 hover:border-custom-2 hover:bg-custom-9/80 transition-all duration-500 cursor-pointer group ${
                    isVisible['solutions-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="inline-block w-2 h-2 bg-custom-2 rounded-full mt-2 group-hover:scale-150 transition-transform"></span>
                    <div className="flex-1">
                      <h3 className="text-white text-lg lg:text-xl font-semibold group-hover:text-custom-2 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES Marquee - Enhanced */}
      <div className="w-full py-16 lg:py-24 overflow-hidden relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-custom-1 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-custom-1 to-transparent z-10"></div>
        
        <div className="animate-marquee-fast whitespace-nowrap">
          <h4 className="text-white font-outfit font-black uppercase inline-block" style={{ fontSize: 'clamp(80px, 15vw, 200px)', opacity: 0.15 }}>
            SERVICES • SERVICES • SERVICES • SERVICES • SERVICES • SERVICES •
          </h4>
        </div>
      </div>

      {/* Detailed Services with Popup Animations */}
      <div className="relative px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Service 1 */}
          <div 
            id="detail-1" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-1'] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-3'
            }`}
          >
            <div className="overflow-hidden relative group">
              <div className="absolute inset-0 bg-custom-2/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/wp-content/themes/openmind/assets/images/img56-1024x683.jpg" 
                alt="AI Talent" 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-4xl mb-6 leading-tight">
                AI Talent Sourcing and Deployment
              </h3>
              <p className="text-custom-6 text-base lg:text-lg leading-relaxed">
                Finding the right talent is critical to the success of your AI initiatives. At EverGen AI, we specialize in sourcing top-tier AI experts, including engineers, data scientists, and RLHF specialists, who are ready to integrate seamlessly into your team. Whether you need short-term support or long-term partnerships, we ensure that every professional we provide aligns with your project's needs and culture.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div 
            id="detail-2" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-2'] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-3'
            }`}
          >
            <div className="overflow-hidden lg:order-2 relative group">
              <div className="absolute inset-0 bg-custom-7/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/wp-content/themes/openmind/assets/images/img54-2-1024x683.jpg" 
                alt="Model Training" 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-white font-bold text-2xl lg:text-4xl mb-6 leading-tight">
                AI Model Training and Optimization
              </h3>
              <p className="text-custom-6 text-base lg:text-lg leading-relaxed">
                With over 5000+ training sessions conducted, our expertise in Reinforcement Learning from Human Feedback (RLHF) ensures your AI models are more accurate, efficient, and responsive. From training models to understand nuanced user behavior to optimizing existing systems for peak performance, we ensure your AI evolves effectively and stays ahead in a competitive market.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div 
            id="detail-3" 
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              isVisible['detail-3'] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-3'
            }`}
          >
            <div className="overflow-hidden relative group">
              <div className="absolute inset-0 bg-custom-2/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" 
                alt="Custom Solutions" 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-4xl mb-6 leading-tight">
                Customized AI Development Solutions
              </h3>
              <p className="text-custom-6 text-base lg:text-lg leading-relaxed">
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

        @keyframes scrollInfinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
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

        .animate-marquee-fast {
          animation: marquee 15s linear infinite;
        }

        .animate-scroll-infinite {
          animation: scrollInfinite 25s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;