import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Marquee = ({ children, speed = 0.5 }) => {
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20 / speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(248,112,96,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,190,78,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-16"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-white font-bold text-7xl lg:text-8xl mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              EVERGEN AI
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-xl lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Intelligent solutions for a smarter tomorrow.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
          </motion.div>
        </div>
      </motion.div>

      {/* START NOW Cover Section */}
      <div className="relative bg-[#634c40] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img-45.jpg)', backgroundPosition: '50% 50%' }}>
        <div className="px-12 lg:px-16 py-20">
          <div className="w-full">
            <h2 className="text-center text-[#ffffff45] text-[120px] lg:text-[200px] leading-[0.9] lowercase font-black">START NOW</h2>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <motion.div 
        className="relative px-6 lg:px-16 py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col items-center gap-8 mb-16"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/wp-content/themes/openmind/assets/images/avatars.png" alt="" className="w-[100px] h-[50px] object-cover" />
            <div className="text-center">
              <p className="text-yellow-500 text-3xl mb-4">★★★★★</p>
              <h2 className="text-white text-5xl font-bold mb-4">Those Who Trust Us Thrive</h2>
              <p className="text-gray-400 text-lg">200+ reviews (4.95 out of 5)</p>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-center text-lg leading-relaxed max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We believe in excellence through hard work and find ourselves at a pivotal moment. We aim to play a meaningful role in shaping our collective future. As a new-age AI solutions firm, we boast an ultra-high-quality talent pool from India, specializing in RLHF—think IITians, PhDs, and artists. Whether you need world-class experts for RLHF or a cutting-edge platform to develop your customized AI model, EverGen AI has the perfect solution for you.
          </motion.p>
          
          {/* Team Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              '/wp-content/themes/openmind/assets/images/img46-1024x683.jpg',
              '/wp-content/themes/openmind/assets/images/img48-1024x685.jpg',
              '/wp-content/themes/openmind/assets/images/img47-1024x682.jpg'
            ].map((img, i) => (
              <motion.div
                key={i}
                className="aspect-video overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={img} 
                  alt="Team" 
                  className="w-full h-full object-cover" 
                  style={{ filter: 'grayscale(100%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <div className="bg-[#1a1a1a] py-8">
        <Marquee speed={0.5}>
          <h4 className="text-white font-black text-4xl uppercase mr-16">
            ↜ UpWork&nbsp;&nbsp;&nbsp;&nbsp;⌀ Fiverr&nbsp;&nbsp;&nbsp;&nbsp;▚ Behance&nbsp;&nbsp;&nbsp;&nbsp;◍ Dribbble&nbsp;&nbsp;&nbsp;&nbsp;
          </h4>
        </Marquee>
      </div>

      {/* Family Section */}
      <div className="relative px-6 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                '/wp-content/themes/openmind/assets/images/img49-767x1024.jpg',
                '/wp-content/themes/openmind/assets/images/img51-1024x666.jpg',
                '/wp-content/themes/openmind/assets/images/img50-1024x980.jpg',
                '/wp-content/themes/openmind/assets/images/img22-1024x490.jpg'
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="aspect-square overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white text-5xl font-bold mb-6">We work as a family and you are part of it</h2>
              <p className="text-gray-400 text-lg mb-8">We are committed to:</p>
              <ul className="space-y-4 mb-12">
                {['Trust', 'Innovation', 'Collaboration'].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-4 text-white text-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-lg font-semibold uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover more →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Innovation Section */}
      <div className="relative px-6 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-[#1a1a1a] p-12 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-4xl font-bold mb-6">Revolutionizing with Generative AI Innovation</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                In the competitive world of talent acquisition, EverGen delivers cutting-edge AI solutions that redefine the recruitment process. Our AI-powered recruiting platform leverages advanced algorithms and machine learning to streamline candidate sourcing, screening, and selection. By analyzing extensive data—resumes, social profiles, and job requirements—our platform intelligently matches the right candidates to the right opportunities. Through automation and predictive analytics, we enhance efficiency, minimize bias, and elevate the quality of hires.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ 
                backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img52-683x1024.jpg)', 
                backgroundSize: 'cover',
                backgroundPosition: '50% 66%'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 text-center">
                  {[
                    { num: '300+', label: 'RLHF Experts' },
                    { num: '5K', label: 'Training Hrs delivered' },
                    { num: '1000+', label: 'Talents Sourced' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, type: "spring" }}
                    >
                      <h3 className="text-yellow-500 text-4xl font-bold mb-2">{stat.num}</h3>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Marquee */}
      <div className="py-16 overflow-hidden">
        <Marquee speed={0.3}>
          <h4 className="text-[#1a1a1a] text-[150px] font-black uppercase mr-16 stroke-text">
            SERVICES
          </h4>
        </Marquee>
      </div>

      {/* Services Grid */}
      <div className="px-6 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            { 
              title: 'Ultra-High Quality RLHF Experts', 
              desc: 'Your AI Models are only as good as the data they\'ve been trained on. Curate hyper-specific LLM datasets with the help of our experts. Train hallucination-free, technically accurate, value aligned LLMs of tomorrow!',
              img: '/wp-content/themes/openmind/assets/images/img56-1024x683.jpg'
            },
            { 
              title: 'Enterprise AI', 
              desc: 'Transform your Enterprise with production-grade GenAI applications that address real-world use cases and generate significant business value. Use our GenAI engine to deploy scalable, safe, secure, highly accurate and hyper-customized AI solutions.',
              img: '/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg'
            },
            { 
              title: 'Talent-On-Demand', 
              desc: 'Access highly skilled HR professionals perfectly suited to meet your dynamic business needs with EverGen. Whether you require specialized expertise or additional resources for projects, our talent pool provides the flexibility and agility necessary for success in today\'s competitive landscape.',
              img: '/wp-content/themes/openmind/assets/images/img54-2.jpg'
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`aspect-square overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="text-white text-4xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8">{service.desc}</p>
                <motion.button
                  className="text-white text-xl border-b-2 border-white pb-2"
                  whileHover={{ x: 10 }}
                >
                  View Service →
                </motion.button>
              </div>
            </motion.div>
          ))}
          
          {/* View All Services Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-16 py-4 rounded-lg font-semibold uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all services
            </motion.button>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="px-6 lg:px-16 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-white text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Exclusive integrations
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Discover seamless social media integration. Connect your profiles effortlessly and share your talent with the world.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Instagram', color: 'bg-[#e6007e61]', tag: 'Social media', href: 'https://www.instagram.com/evergenai/?utm_source=ig_web_button_share_sheet', icon: 'M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z' },
              { name: 'Facebook', color: 'bg-[#0792e369]', tag: 'SEO', href: 'https://www.facebook.com/share/15gfxvK2sT/', icon: 'M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z' },
              { name: 'LinkedIn', color: 'bg-[#0A66C2]', tag: 'Share profile', href: 'https://www.linkedin.com/company/evergen-ai/about/', icon: 'M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z' }
            ].map((social, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-24 h-24 rounded-full ${social.color} flex items-center justify-center mb-6`}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-white">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon}></path>
                    </svg>
                  </a>
                </div>
                <p className="text-white text-2xl mb-4">{social.name}</p>
                <div className="bg-white bg-opacity-20 px-6 py-2 rounded-full">
                  <p className="text-white text-sm">{social.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative bg-[#ffffff1c] px-8 lg:px-12 py-16 lg:py-20 mt-20 lg:mt-32 mb-20 lg:mb-32">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex-1 min-w-[250px]">
              <p className="text-white text-5xl mb-4 font-bold">Our Journey in AI Excellence</p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <p className="text-gray-400 text-lg">
                Discover the key moments, innovations, and milestones that have shaped our journey toward AI mastery and leadership.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {/* 2022 */}
          <motion.div 
            className="flex gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <p className="text-[#ffffff14] font-black text-7xl lg:text-8xl" style={{ writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)' }}>2022</p>
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6453">
                  <path d="M12 2C6.48 2 3 6.48 3 10.9c0 2.21 1.34 4.39 3.49 5.2L6 18l1.35-4.07c.11-.34.09-.71-.05-1.02-.11-.26-.33-.45-.61-.58L5.75 11.59C4.58 10.97 4 9.57 4 8.1 4 5.07 6.9 2 10.9 2c2.88 0 5.29 1.73 6.23 4.17 1.3-.45 2.74-.72 4.08-.72 2.1 0 4.06 1.47 4.66 3.56-.09-.06-.2-.14-.31-.2l-.3-.1C21.11 6.82 18.77 2 15 2c-2.68 0-5 2.47-5 5.5 0 .91.42 1.73 1.08 2.24-.22.29-.43.61-.62.96-.15.29-.34.58-.56.88-.44.57-.85 1.18-1.25 1.81-.08.13-.16.26-.25.39-.45.7-.89 1.42-1.34 2.15-.04.06-.09.13-.14.19C8.95 14.6 9 16 10.9 16 12 16 12.98 15.65 13.72 14.88 15.22 14 16 12.97 16 11.7 16 9.27 13.73 7 12 7c-1.14 0-2.24.65-2.8 1.66-.64-.94-.75-2.08-.36-3.06C9.09 5.56 10.86 3.47 12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.56 0-1.1-.18-1.57-.49l-2.29-1.34c-.2-.11-.43-.15-.65-.11-.68.08-.77-.71-.67-1.06C9.31 4.69 10.5 2.98 12 2z"></path>
                </svg>
              </div>
              <p className="text-white text-xl mb-2 font-semibold">Official Launch</p>
              <p className="text-gray-400 text-base">Started our journey in AI training with a dedicated team.</p>
            </div>
          </motion.div>

          {/* 2023 */}
          <motion.div 
            className="flex gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#ffffff14] font-black text-7xl lg:text-8xl" style={{ writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)' }}>2023</p>
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="#FF6453">
                  <polygon points="50,20 53,35 70,35 55,45 60,65 50,55 40,65 45,45 30,35 47,35" />
                </svg>
              </div>
              <p className="text-white text-xl mb-2 font-semibold">First Milestone:</p>
              <p className="text-gray-400 text-base">Completed our first 1000 training sessions with excellent feedback.</p>
            </div>
          </motion.div>

          {/* 2024 */}
          <motion.div 
            className="flex gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[#ffffff14] font-black text-7xl lg:text-8xl" style={{ writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)' }}>2024</p>
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="#FF6453">
                  <circle cx="30" cy="50" r="20" />
                  <circle cx="70" cy="50" r="20" />
                </svg>
              </div>
              <p className="text-white text-xl mb-2 font-semibold">Partnership</p>
              <p className="text-gray-400 text-base">Collaborated with industry leaders to enhance AI curriculum.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full px-8 lg:px-12 py-16 lg:py-20 mt-20 lg:mt-32 mb-20 lg:mb-32">
        <div className="text-center mb-12">
          <motion.p 
            className="text-white text-5xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our organization places our customers as its highest priority
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center overflow-x-auto pb-6">
          {[
            {
              name: 'Sakshi Soni',
              company: '↜ UpWork',
              img: '/wp-content/themes/openmind/assets/images/img10-1024x683.jpg',
              text: 'I couldn\'t have asked for a better experience with EverGen AI. They worked with me closely to find the perfect job match. Their industry knowledge and personalized service helped me secure a role at UpWork, where I\'m thriving. Truly a game-changer for my career!'
            },
            {
              name: 'Uday Gupta',
              company: '⌀ EverGen AI',
              img: '/wp-content/themes/openmind/assets/images/img12-819x1024.jpg',
              text: 'Working at EverGenAI has been an incredible experience. The focus on training AI through RLHF has allowed me to grow both professionally and personally. I\'m proud to be part of a team that\'s pushing the boundaries of AI excellence. It\'s exciting to see our impact!"'
            },
            {
              name: 'Riya Sahu',
              company: '▚ Fiverr',
              img: '/wp-content/themes/openmind/assets/images/img9-683x1024.jpg',
              text: 'The team at EverGen AI was incredibly supportive in helping me find the right job. They took the time to understand my skills and career ambitions, leading me to a fantastic opportunity at Fiverr. Their personalized approach made all the difference in my job search.'
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              className="bg-[#1a1a1a] min-h-[50vh] flex flex-col justify-between min-w-[300px] max-w-[350px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-12 flex flex-col items-center">
                <img src={testimonial.img} alt={testimonial.name} className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white mb-4" />
                <p className="text-yellow-500 mb-2">★★★★★</p>
                <p className="text-white text-xl mb-4 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-base text-center">
                  {testimonial.text}
                </p>
              </div>
              <div className="bg-orange-500 p-8 text-center">
                <h4 className="text-white text-lg font-semibold">{testimonial.company}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-12">
              <p className="text-white font-bold text-5xl mb-6">Most Popular Questions</p>
              <p className="text-gray-400 text-lg">
                Discover the answers to common inquiries and learn more about how our expert AI training and RLHF solutions can drive success for your business.
              </p>
            </div>

            <div className="bg-purple-600 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  {
                    q: 'What is RLHF (Reinforcement Learning from Human Feedback)?',
                    a: 'RLHF is an advanced AI training technique where human feedback is used to refine machine learning models. It ensures that the models align with human values, preferences, and real-world applications, resulting in more effective AI solutions.'
                  },
                  {
                    q: 'What makes your AI training process unique?',
                    a: 'Our AI training process is unique because we have a team of 200+ RLHF experts who are trained specifically to work on clients\' models. They leverage human feedback to fine-tune AI systems, ensuring better alignment with user needs, superior performance, and real-world effectiveness.'
                  },
                  {
                    q: 'Can I partner with your company for AI model development?',
                    a: 'Yes, we collaborate with businesses across various sectors to develop AI models tailored to their needs. Our team of RLHF experts works closely with clients to ensure the models provide real value and solve real problems.'
                  },
                  {
                    q: 'How do you ensure the quality of your AI models?',
                    a: 'With a team of 200+ trained RLHF experts, we ensure that each model undergoes rigorous testing and fine-tuning. We use real-world human feedback to guarantee our models\' quality, efficiency, and alignment with industry standards.'
                  }
                ].map((faq, i) => (
                  <details key={i} className="bg-[#1a1a1a] p-8 rounded-xl">
                    <summary className="text-white text-lg cursor-pointer list-none flex justify-between items-center font-semibold">
                      {faq.q}
                    </summary>
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <p className="text-gray-400 text-base">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 lg:px-16 py-32">
        <motion.div 
          className="max-w-7xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="p-16">
              <h2 className="text-white text-5xl font-bold mb-6">Interested? Come talk to us!</h2>
              <p className="text-gray-400 text-xl mb-8">
                Have an inquiry for us? Please select a team you would like to reach and provide our information below.
              </p>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-5 rounded-lg font-semibold uppercase text-lg border-2 border-[#0a0a0a]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
            </div>
            <div className="h-full">
              <img 
                src="/wp-content/themes/openmind/assets/images/silhouette-sky-sunset-skyscraper-cityscape-dusk-1362207-pxhere.com_-1024x699.jpg" 
                alt="Cityscape" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255,255,255,0.1);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Home;