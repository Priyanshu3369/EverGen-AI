import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: false
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Please wait...');

    const submitData = {
      ...formData,
      access_key: '75fdbd34-df6c-45f0-94e2-00d48c34f7dc'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      const json = await response.json();
      
      if (response.status === 200) {
        setResult('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
          botcheck: false
        });
      } else {
        setResult(json.message || 'An error occurred');
      }
    } catch (error) {
      console.log(error);
      setResult('Something went wrong!');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult('');
      }, 3000);
    }
  };

  return (
    <div className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'url(/wp-content/themes/openmind/assets/images/lines-2.png)',
          backgroundPosition: 'center',
          backgroundSize: 'contain'
        }}
      />

      {/* Hero Cover Section with Parallax */}
      <div 
        className="relative bg-cover bg-center min-h-screen flex items-center overflow-hidden"
        style={{ 
          backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img44-scaled.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-90"></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #FFBE4E 0%, transparent 70%)',
              top: '20%',
              right: '10%',
              animation: 'float-slow 25s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #F87060 0%, transparent 70%)',
              bottom: '20%',
              left: '10%',
              animation: 'float-slow 30s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div className="relative w-full px-6 md:px-12 lg:px-16 py-20 z-10">
          <div className="max-w-6xl mx-auto min-h-[50vh] flex flex-col justify-center items-center py-16 lg:py-24">
            <div className="text-center space-y-6 animate-fade-in-up">
              <h1 className="text-white font-outfit font-medium text-4xl md:text-5xl lg:text-7xl leading-tight">
                Your next big AI solution
                <span className="block mt-2 bg-gradient-to-r from-[#FFBE4E] via-[#F87060] to-[#662EFF] bg-clip-text text-transparent animate-gradient-shift">
                  is just a message away!
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Transform your vision with expert AI solutions and RLHF-powered training
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section - Enhanced */}
      <div className="w-full py-10 lg:py-16 px-10 lg:px-16 bg-gradient-to-r from-transparent via-[#1a1a1a]/40 to-transparent border-y border-[#662EFF]/10">
        <div className="overflow-hidden">
          <div className="animate-marquee-smooth whitespace-nowrap flex items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="inline-flex items-center">
                <span className="inline-block text-gray-500 hover:text-[#662EFF] transition-colors duration-300 font-outfit font-normal text-xl md:text-2xl mx-8">
                  ↜ UpWork
                </span>
                <span className="inline-block text-gray-500 hover:text-[#F87060] transition-colors duration-300 font-outfit font-normal text-xl md:text-2xl mx-8">
                  ⌀ Fiverr
                </span>
                <span className="inline-block text-gray-500 hover:text-[#FFBE4E] transition-colors duration-300 font-outfit font-normal text-xl md:text-2xl mx-8">
                  ▚ Behance
                </span>
                <span className="inline-block text-gray-500 hover:text-[#662EFF] transition-colors duration-300 font-outfit font-normal text-xl md:text-2xl mx-8">
                  ◍ Dribbble
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info and Form Section */}
      <div className="relative px-6 md:px-8 lg:px-12 py-16 lg:py-24 mt-12 lg:mt-20 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="w-16 h-1 bg-gradient-to-r from-[#662EFF] to-[#F87060] rounded-full animate-expand"></div>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl font-outfit font-semibold leading-tight">
                  Have a project in your mind?
                  <span className="block mt-2 text-[#FFBE4E]">Get in touch!</span>
                </p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Let's collaborate to bring your vision to life with our expert AI solutions and RLHF-powered training. Reach out today to start your journey towards innovation.
                </p>
              </div>

              {/* Contact Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#662EFF] to-[#F87060] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-[#1a1a1a] p-8 md:p-10 lg:p-12 rounded-2xl border border-[#662EFF]/20 hover:border-[#662EFF]/40 transition-all duration-500 shadow-2xl">
                  {/* Phone */}
                  <div className="mb-10 group/item">
                    <div className="flex items-center gap-4 mb-6 transform transition-all duration-300 group-hover/item:translate-x-2">
                      <div className="bg-gradient-to-br from-[#662EFF] to-[#8B5CF6] p-4 rounded-xl shadow-lg transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg md:text-xl font-outfit font-medium">Connect by phone</p>
                    </div>
                    <hr className="border-[#662EFF]/20 mb-6 group-hover/item:border-[#662EFF]/40 transition-all duration-300" />
                    <div className="pl-16 md:pl-20 space-y-3">
                      <p className="text-white text-base md:text-lg hover:text-[#FFBE4E] transition-colors duration-300 cursor-pointer transform hover:translate-x-2">+91-97XXX XXXXX</p>
                      <p className="text-white text-base md:text-lg hover:text-[#FFBE4E] transition-colors duration-300 cursor-pointer transform hover:translate-x-2">+91-93XXX XXXXX</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/item">
                    <div className="flex items-center gap-4 mb-6 transform transition-all duration-300 group-hover/item:translate-x-2">
                      <div className="bg-gradient-to-br from-[#F87060] to-[#FD6756] p-4 rounded-xl shadow-lg transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M19,5H5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2zm.5,12c0,.3-.2.5-.5.5H5c-.3,0-.5-.2-.5-.5V9.8l7.5,5.6,7.5-5.6V17zm0-9.1L12,13.6,4.5,7.9V7c0-.3.2-.5.5-.5h14c.3,0,.5.2.5.5v.9z"></path>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg md:text-xl font-outfit font-medium">Connect by email</p>
                    </div>
                    <hr className="border-[#F87060]/20 mb-6 group-hover/item:border-[#F87060]/40 transition-all duration-300" />
                    <div className="pl-16 md:pl-20">
                      <a href="mailto:Info@EverGenAI.com" className="text-white text-base md:text-lg hover:text-[#F87060] transition-all duration-300 inline-block transform hover:translate-x-2">
                        Info@EverGenAI.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F87060] to-[#662EFF] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#662EFF]/20 hover:border-[#662EFF]/40" style={{ backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img39-scaled.jpg)' }}>
                  <div className="absolute inset-0 bg-[#0A0A0A] bg-opacity-85 backdrop-blur-sm"></div>
                  <div className="relative p-8 md:p-10 lg:p-12">
                    <div className="text-center mb-10 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <p className="text-white text-3xl md:text-4xl font-outfit font-semibold">Send us a message</p>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Have a question or need assistance? Reach out to us, and our team will get back to you promptly.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="group/input">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-4 rounded-xl bg-[#0A0A0A]/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#662EFF] focus:bg-[#0A0A0A]/70 transition-all duration-300 hover:border-white/40"
                        />
                      </div>
                      <div className="group/input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 rounded-xl bg-[#0A0A0A]/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#F87060] focus:bg-[#0A0A0A]/70 transition-all duration-300 hover:border-white/40"
                        />
                      </div>
                      <div className="group/input">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full p-4 rounded-xl bg-[#0A0A0A]/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFBE4E] focus:bg-[#0A0A0A]/70 resize-none transition-all duration-300 hover:border-white/40"
                        />
                      </div>
                      <input
                        type="checkbox"
                        name="botcheck"
                        checked={formData.botcheck}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="relative overflow-hidden bg-gradient-to-r from-[#FD6756] to-[#F87060] hover:from-[#FF6453] hover:to-[#FD6756] text-white p-4 rounded-xl font-outfit uppercase text-sm font-semibold tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FD6756]/50 active:scale-95 group/button"
                      >
                        <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFBE4E] to-[#F87060] opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      {result && (
                        <div className={`text-center p-4 rounded-xl font-outfit text-sm font-medium transition-all duration-300 animate-fade-in ${
                          result.includes('success') 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                            : result.includes('wait')
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                            : 'bg-red-500/20 text-red-300 border border-red-500/50'
                        }`}>
                          {result}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 md:px-8 lg:px-12 py-16 lg:py-24 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#662EFF] to-[#F87060] rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
            <div className="relative bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-[#662EFF]/20 hover:border-[#662EFF]/40 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
                <div className="space-y-6 transform transition-all duration-500 group-hover:translate-x-2">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FFBE4E] to-[#F87060] rounded-full"></div>
                  <h2 className="text-white font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
                    Interested?
                    <span className="block mt-2 bg-gradient-to-r from-[#FFBE4E] to-[#F87060] bg-clip-text text-transparent">
                      Come talk to us!
                    </span>
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    Whether you're looking to enhance your AI models or explore new opportunities, we're here to help. Let's discuss how we can collaborate and drive success together.
                  </p>
                  <a
                    href="mailto:info@evergenai.com"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFBE4E] via-[#F87060] to-[#662EFF] text-white px-10 py-4 rounded-xl uppercase text-sm font-outfit font-semibold tracking-wider hover:shadow-2xl hover:shadow-[#F87060]/50 transition-all duration-300 transform hover:scale-105 active:scale-95 group/btn"
                  >
                    Contact Us
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <div className="transform transition-all duration-500 hover:scale-105">
                  <img 
                    src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" 
                    alt="Cityscape" 
                    className="w-full max-w-[450px] mx-auto rounded-xl shadow-2xl border border-[#662EFF]/20" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light effects */}
      <div className="absolute top-1/4 right-0 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 180px #FFBE4E', opacity: 0.3, height: 0, width: 0 }}></div>
      <div className="absolute bottom-1/4 left-0 z-0 pointer-events-none" style={{ boxShadow: '0px 0px 400px 180px #F87060', opacity: 0.3, height: 0, width: 0 }}></div>

      <style>{`
        @keyframes marquee-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-smooth {
          animation: marquee-smooth 30s linear infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }
        .animate-expand {
          animation: expand 0.8s ease-out;
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;