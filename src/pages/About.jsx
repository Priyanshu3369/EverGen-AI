import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="relative bg-custom-1 overflow-hidden" style={{ backgroundImage: 'url(/wp-content/themes/openmind/assets/images/lines-2.png)', backgroundPosition: 'center', backgroundSize: 'contain' }}>
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img57-scaled.jpg)', 
            backgroundPosition: '51% 100%',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="relative px-8 lg:px-12 py-20 pt-32 z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-white font-outfit font-medium text-5xl lg:text-6xl mb-8 animate-fade-in">
            Revealing the essence of our successful business
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-custom-2 to-custom-7 mx-auto animate-slide-up"></div>
        </div>
      </div>

      {/* Animated light effect 1 */}
      <div className="absolute right-0 top-1/4 z-0 animate-pulse-slow" style={{ boxShadow: '0px 0px 400px 180px #FFBE4E', opacity: 0.4, height: 0, width: 0 }}></div>

      {/* About Section */}
      <div 
        ref={addToRefs}
        data-section="about"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 mt-20 lg:mt-32 mb-20 lg:mb-32 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 lg:gap-16">
          <div className="flex-1 min-w-[300px]">
            <p className="text-custom-7 text-sm uppercase mb-6 tracking-wider">about</p>
            <h2 className="text-white font-outfit font-medium text-4xl lg:text-5xl mb-4 leading-tight">
              Revolutionizing AI Solutions with Expert Training and Talent Matching
            </h2>
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="text-custom-6 text-base mb-8 leading-relaxed">
              We are a cutting-edge AI company specializing in training advanced AI models through Reinforcement Learning from Human Feedback (RLHF). Founded with a vision to redefine AI development, we empower organizations by transforming their AI models into smarter, more reliable systems that align seamlessly with real-world needs.
            </p>
            <a
              href="/services"
              className="inline-block bg-gradient-to-r from-custom-2 to-custom-7 text-white px-12 py-4 rounded-md uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-custom-7/50 transition-all duration-300 hover:scale-105"
            >
              Discover services →
            </a>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div 
        ref={addToRefs}
        data-section="what-we-do"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 mt-20 lg:mt-32 mb-20 lg:mb-32 transition-all duration-1000 delay-200 ${visibleSections.has('what-we-do') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-custom-3 text-sm uppercase mb-4 tracking-wider">what we do</p>
            <p className="text-white text-3xl lg:text-4xl font-outfit font-medium">
              Empowering your AI journey with cutting-edge solutions and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Model Training', desc: 'Leverage our 200+ RLHF experts to train and enhance your AI models for real-world success.' },
              { title: 'Talent Pool Solutions', desc: 'Connect with top AI talent and align your resources with the industry\'s leading organizations.' },
              { title: 'Custom AI Solutions', desc: 'Tailored AI development strategies to meet your unique business challenges and goals.' },
              { title: 'AI Integration & Optimization', desc: 'Seamless integration of AI technologies into your business operations for maximum impact.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-custom-9 p-10 lg:p-12 flex flex-col items-center text-center hover:bg-opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <p className="text-custom-7 font-black text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">♢</p>
                <p className="text-white text-lg mb-4 font-medium">{item.title}</p>
                <p className="text-custom-6 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div 
        ref={addToRefs}
        data-section="services-grid"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 transition-all duration-1000 delay-300 ${visibleSections.has('services-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { title: 'RLHF Expertise', desc: 'Empower your AI systems with 200+ trained RLHF specialists dedicated to aligning models with real-world demands.', img: 'img17-scaled.jpg' },
              { title: 'AI Talent Matching', desc: 'Connect with industry-leading AI professionals to transform your vision into reality.', img: 'img27-scaled.jpg' },
              { title: 'Custom AI Model Development', desc: 'Design and develop AI models tailored to your business needs and objectives.', img: 'img21-scaled.jpg' },
              { title: 'AI Strategy & Integration', desc: 'Seamlessly integrate AI into your workflows, ensuring optimized performance and results.', img: 'img25-scaled.jpg' }
            ].map((service, idx) => (
              <div key={idx} className="relative bg-cover bg-center min-h-[450px] border border-custom-8 p-12 lg:p-16 group overflow-hidden" style={{ backgroundImage: `url(/wp-content/themes/openmind/assets/images/${service.img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-100 group-hover:bg-opacity-80 transition-all duration-500"></div>
                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-custom-7 text-sm uppercase tracking-wider">{service.title}</p>
                    <p className="text-custom-7 text-2xl group-hover:translate-x-2 transition-transform duration-300">→</p>
                  </div>
                  <h3 className="text-white font-medium text-xl leading-relaxed group-hover:text-custom-7 transition-colors duration-300">
                    {service.desc}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated light effect 2 */}
      <div className="absolute left-0 top-2/3 z-0 animate-pulse-slow" style={{ boxShadow: '0px 0px 400px 180px #F87060', opacity: 0.3, height: 0, width: 0, animationDelay: '2s' }}></div>

      {/* Features Section */}
      <div 
        ref={addToRefs}
        data-section="features"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 mt-20 lg:mt-32 mb-20 lg:mb-32 transition-all duration-1000 delay-400 ${visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 lg:gap-16">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-white font-medium text-3xl lg:text-4xl mb-6 leading-tight">
              The future is now, let's make it better, together we can
            </h2>
            <p className="text-custom-6 text-base leading-relaxed">
              At EverGen AI, we believe in innovation and collaboration. From training AI models to building custom solutions, our experts guide you at every step. Let's drive meaningful impact and revolutionize industries through AI.
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="text-white text-sm uppercase mb-6 tracking-wider">features and benefits</p>
            <hr className="border-custom-8 mb-8" />
            <ul className="list-none space-y-4 text-custom-6 text-sm">
              {[
                'Cutting-edge AI model training tailored to your goals',
                'Expertise in RLHF ensures precise model alignment',
                'Access to a pool of top-tier AI talent',
                'Seamless integration and optimization for real-world AI applications',
                'Dedicated support to enhance scalability and efficiency'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="w-6 h-6 border-2 border-custom-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-custom-7 text-xs group-hover:bg-custom-7 group-hover:text-white transition-all duration-300">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div 
        ref={addToRefs}
        data-section="mission-vision"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 transition-all duration-1000 delay-500 ${visibleSections.has('mission-vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="bg-custom-9 p-12 lg:p-16 flex-1 min-w-[300px] hover:bg-opacity-80 transition-all duration-300">
              <p className="text-white font-bold text-2xl mb-6">Our Mission</p>
              <p className="text-custom-6 text-base leading-relaxed">
                To create transformative AI solutions and empower organizations by merging technology with human expertise. We are committed to enabling businesses and individuals to achieve excellence in the ever-evolving AI landscape.
              </p>
            </div>
            <img src="/wp-content/themes/openmind/assets/images/img36-1024x683.jpg" alt="" className="flex-1 min-w-[300px] aspect-video object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="flex flex-wrap gap-8 items-center">
            <img src="/wp-content/themes/openmind/assets/images/img37-1024x691.jpg" alt="" className="flex-1 min-w-[300px] aspect-square object-cover hover:scale-105 transition-transform duration-500 order-2 md:order-1" />
            <div className="bg-custom-9 p-12 lg:p-16 flex-1 min-w-[300px] hover:bg-opacity-80 transition-all duration-300 order-1 md:order-2">
              <p className="text-white font-bold text-2xl mb-6">Our Vision</p>
              <p className="text-custom-6 text-base leading-relaxed">
                To be the global leader in AI model training and talent empowerment, fostering innovation and success for our clients, teams, and the tech ecosystem as a whole.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={addToRefs}
        data-section="cta"
        className={`relative px-8 lg:px-12 py-16 lg:py-24 mt-20 lg:mt-32 mb-20 lg:mb-32 transition-all duration-1000 delay-600 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto bg-custom-9 flex flex-wrap gap-12 items-center p-12 lg:p-20 hover:bg-opacity-80 transition-all duration-300">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-white font-semibold text-3xl lg:text-4xl mb-6 leading-tight">Interested? Come talk to us!</h2>
            <p className="text-white text-base mb-8 leading-relaxed">
              Whether you're looking to enhance your AI models or explore new opportunities, we're here to help. Let's discuss how we can collaborate and drive success together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-custom-2 to-custom-7 text-white px-12 py-4 rounded-md border-2 border-custom-1 uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-custom-7/50 transition-all duration-300 hover:scale-105"
            >
              Get in touch
            </a>
          </div>
          <div className="flex-1 min-w-[300px]">
            <img src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" alt="" className="w-full max-w-[450px] mx-auto hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            width: 0;
          }
          to {
            width: 96px;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1.8);
          }
          50% {
            opacity: 0.5;
            transform: scale(2.2);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-600 {
          transition-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default About;