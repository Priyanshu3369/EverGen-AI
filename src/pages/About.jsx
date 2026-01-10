import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      {/* Hero Section with Enhanced Parallax */}
      <div ref={heroRef} className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img57-scaled.jpg)', 
            backgroundPosition: '51% 100%',
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

        <div 
          className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-20 pt-24 sm:pt-32 z-10 max-w-5xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <h1 className="text-white font-outfit font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 animate-fade-in leading-tight px-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Revealing the essence of our successful business
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-custom-2 to-custom-7 mx-auto animate-slide-up"></div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee */}
      <div className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-custom-9 border-y border-custom-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center">
              {['AI Innovation', 'RLHF Training', 'Expert Talent', 'Custom Solutions', 'Model Optimization', 'AI Strategy'].map((text, idx) => (
                <div key={idx} className="inline-flex items-center mx-4 sm:mx-6 lg:mx-8">
                  <span className="text-custom-7 text-xl sm:text-2xl lg:text-3xl mx-2 sm:mx-3 lg:mx-4">♢</span>
                  <span className="text-white text-base sm:text-xl lg:text-2xl font-medium">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Section with Vertical Reveal */}
      <div 
        ref={addToRefs}
        data-section="about"
        className={`relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 mt-12 sm:mt-16 lg:mt-32 mb-12 sm:mb-16 lg:mb-32 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-1000 delay-100 ${visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <p className="text-custom-7 text-xs sm:text-sm uppercase mb-4 sm:mb-6 tracking-wider">about</p>
            <h2 className="text-white font-outfit font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight">
              Revolutionizing AI Solutions with Expert Training and Talent Matching
            </h2>
          </div>
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-1000 delay-300 ${visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <p className="text-custom-6 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              We are a cutting-edge AI company specializing in training advanced AI models through Reinforcement Learning from Human Feedback (RLHF). Founded with a vision to redefine AI development, we empower organizations by transforming their AI models into smarter, more reliable systems that align seamlessly with real-world needs.
            </p>
            <a
              href="/services"
              className="inline-block bg-gradient-to-r from-custom-2 to-custom-7 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-md uppercase text-xs sm:text-sm tracking-wider hover:shadow-lg hover:shadow-custom-7/50 transition-all duration-300 hover:scale-105"
            >
              Discover services →
            </a>
          </div>
        </div>
      </div>

      {/* What We Do Section with Staggered Reveal */}
      <div 
        ref={addToRefs}
        data-section="what-we-do"
        className={`relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 mt-12 sm:mt-16 lg:mt-32 mb-12 sm:mb-16 lg:mb-32 transition-all duration-1000 ${visibleSections.has('what-we-do') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-custom-3 text-xs sm:text-sm uppercase mb-3 sm:mb-4 tracking-wider">what we do</p>
            <p className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-outfit font-medium px-4">
              Empowering your AI journey with cutting-edge solutions and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'AI Model Training', desc: 'Leverage our 200+ RLHF experts to train and enhance your AI models for real-world success.' },
              { title: 'Talent Pool Solutions', desc: 'Connect with top AI talent and align your resources with the industry\'s leading organizations.' },
              { title: 'Custom AI Solutions', desc: 'Tailored AI development strategies to meet your unique business challenges and goals.' },
              { title: 'AI Integration & Optimization', desc: 'Seamless integration of AI technologies into your business operations for maximum impact.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-custom-9 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col items-center text-center hover:bg-opacity-80 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${visibleSections.has('what-we-do') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <p className="text-custom-7 font-black text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500">♢</p>
                <p className="text-white text-base sm:text-lg mb-3 sm:mb-4 font-medium">{item.title}</p>
                <p className="text-custom-6 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Stats */}
      <div className="relative py-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center">
              {[
                { num: '200+', label: 'AI Experts' },
                { num: '50+', label: 'Projects Delivered' },
                { num: '95%', label: 'Client Satisfaction' },
                { num: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <div key={idx} className="inline-flex flex-col items-center mx-8 sm:mx-12 lg:mx-16 px-4 sm:px-6 lg:px-8">
                  <span className="text-custom-7 text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stat.num}</span>
                  <span className="text-white text-xs sm:text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid Section with Parallax Cards */}
      <div 
        ref={addToRefs}
        data-section="services-grid"
        className={`relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${visibleSections.has('services-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { title: 'RLHF Expertise', desc: 'Empower your AI systems with 200+ trained RLHF specialists dedicated to aligning models with real-world demands.', img: 'img17-scaled.jpg' },
              { title: 'AI Talent Matching', desc: 'Connect with industry-leading AI professionals to transform your vision into reality.', img: 'img27-scaled.jpg' },
              { title: 'Custom AI Model Development', desc: 'Design and develop AI models tailored to your business needs and objectives.', img: 'img21-scaled.jpg' },
              { title: 'AI Strategy & Integration', desc: 'Seamlessly integrate AI into your workflows, ensuring optimized performance and results.', img: 'img25-scaled.jpg' }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`relative bg-cover bg-center min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] border border-custom-8 p-8 sm:p-10 lg:p-12 xl:p-16 group overflow-hidden transition-all duration-700 ${visibleSections.has('services-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ 
                  backgroundImage: `url(/wp-content/themes/openmind/assets/images/${service.img})`,
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-100 group-hover:bg-opacity-70 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-custom-2/0 to-custom-7/0 group-hover:from-custom-2/20 group-hover:to-custom-7/20 transition-all duration-500"></div>
                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <p className="text-custom-7 text-xs sm:text-sm uppercase tracking-wider">{service.title}</p>
                    <Link to="/services">
                    <p className="text-custom-7 text-xl sm:text-2xl group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">→</p>
                    </Link>
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-custom-7 transition-colors duration-300">
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

      {/* Features Section with Slide-in Animation */}
      <div 
        ref={addToRefs}
        data-section="features"
        className={`relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 mt-12 sm:mt-16 lg:mt-32 mb-12 sm:mb-16 lg:mb-32 transition-all duration-1000 ${visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-1000 delay-100 ${visibleSections.has('features') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-white font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
              The future is now, let's make it better, together we can
            </h2>
            <p className="text-custom-6 text-sm sm:text-base leading-relaxed">
              At EverGen AI, we believe in innovation and collaboration. From training AI models to building custom solutions, our experts guide you at every step. Let's drive meaningful impact and revolutionize industries through AI.
            </p>
          </div>
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-1000 delay-300 ${visibleSections.has('features') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <p className="text-white text-xs sm:text-sm uppercase mb-4 sm:mb-6 tracking-wider">features and benefits</p>
            <hr className="border-custom-8 mb-6 sm:mb-8" />
            <ul className="list-none space-y-3 sm:space-y-4 text-custom-6 text-xs sm:text-sm">
              {[
                'Cutting-edge AI model training tailored to your goals',
                'Expertise in RLHF ensures precise model alignment',
                'Access to a pool of top-tier AI talent',
                'Seamless integration and optimization for real-world AI applications',
                'Dedicated support to enhance scalability and efficiency'
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start gap-2 sm:gap-3 group transition-all duration-500 ${visibleSections.has('features') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-custom-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-custom-7 text-xs group-hover:bg-custom-7 group-hover:text-white group-hover:scale-110 transition-all duration-300">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Sidebar Popup Animation */}
      <div className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <div 
            ref={addToRefs}
            data-section="mission"
            className="relative flex flex-col md:flex-row items-stretch mb-0"
          >
            {/* Mission Text - Sidebar Popup from Left */}
            <div className={`relative w-full md:w-1/2 bg-gradient-to-br from-custom-9 to-black p-8 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-center transition-all duration-1000 ease-out ${visibleSections.has('mission') ? 'md:translate-x-0 opacity-100' : 'md:-translate-x-full opacity-0'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-custom-2 via-custom-7 to-custom-2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-custom-2 to-custom-7 rounded-lg flex items-center justify-center text-white text-xl sm:text-2xl font-bold">M</div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">Our Mission</h3>
                </div>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-2 to-custom-7 mb-6 sm:mb-8"></div>
                <p className="text-custom-6 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  To create transformative AI solutions and empower organizations by merging technology with human expertise. We are committed to enabling businesses and individuals to achieve excellence in the ever-evolving AI landscape.
                </p>
                <div className="flex items-center gap-2 sm:gap-3 text-custom-7 text-xs sm:text-sm">
                  <span className="w-2 h-2 bg-custom-7 rounded-full animate-pulse"></span>
                  <span className="uppercase tracking-wider">Innovation · Excellence · Empowerment</span>
                </div>
              </div>
            </div>

            {/* Mission Image - Scale Up from Center */}
            <div className={`relative w-full md:w-1/2 overflow-hidden transition-all duration-1000 delay-300 ${visibleSections.has('mission') ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
              <img 
                src="/wp-content/themes/openmind/assets/images/img36-1024x683.jpg" 
                alt="Our Mission" 
                className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] object-cover hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
          </div>

          {/* Vision Section */}
          <div 
            ref={addToRefs}
            data-section="vision"
            className="relative flex flex-col md:flex-row-reverse items-stretch"
          >
            {/* Vision Text - Sidebar Popup from Right */}
            <div className={`relative w-full md:w-1/2 bg-gradient-to-bl from-custom-9 to-black p-8 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${visibleSections.has('vision') ? 'md:translate-x-0 opacity-100' : 'md:translate-x-full opacity-0'}`}>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-custom-7 via-custom-2 to-custom-7"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-custom-7 to-custom-2 rounded-lg flex items-center justify-center text-white text-xl sm:text-2xl font-bold">V</div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">Our Vision</h3>
                </div>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-7 to-custom-2 mb-6 sm:mb-8"></div>
                <p className="text-custom-6 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  To be the global leader in AI model training and talent empowerment, fostering innovation and success for our clients, teams, and the tech ecosystem as a whole.
                </p>
                <div className="flex items-center gap-2 sm:gap-3 text-custom-7 text-xs sm:text-sm">
                  <span className="w-2 h-2 bg-custom-7 rounded-full animate-pulse"></span>
                  <span className="uppercase tracking-wider">Leadership · Growth · Impact</span>
                </div>
              </div>
            </div>

            {/* Vision Image - Scale Up from Center */}
            <div className={`relative w-full md:w-1/2 overflow-hidden transition-all duration-1000 delay-500 ${visibleSections.has('vision') ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
              <img 
                src="/wp-content/themes/openmind/assets/images/img37-1024x691.jpg" 
                alt="Our Vision" 
                className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] object-cover hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Scale Animation */}
      <div 
        ref={addToRefs}
        data-section="cta"
        className={`relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 mt-12 sm:mt-16 lg:mt-32 mb-12 sm:mb-16 lg:mb-32 transition-all duration-1000 ${visibleSections.has('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <div className="max-w-7xl mx-auto bg-custom-9 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center p-8 sm:p-10 lg:p-16 xl:p-20 hover:bg-opacity-80 transition-all duration-300">
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-700 delay-100 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">Interested? Come talk to us!</h2>
            <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Whether you're looking to enhance your AI models or explore new opportunities, we're here to help. Let's discuss how we can collaborate and drive success together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-custom-2 to-custom-7 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-md border-2 border-custom-1 uppercase text-xs sm:text-sm tracking-wider hover:shadow-lg hover:shadow-custom-7/50 transition-all duration-300 hover:scale-105"
            >
              Get in touch
            </a>
          </div>
          <div className={`flex-1 min-w-full lg:min-w-[300px] transition-all duration-700 delay-300 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" alt="" className="w-full max-w-full lg:max-w-[450px] mx-auto hover:scale-105 transition-transform duration-500 rounded-lg" />
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

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
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

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }

        @media (max-width: 640px) {
          @keyframes slide-up {
            from {
              width: 0;
            }
            to {
              width: 64px;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default About;