import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

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
const AnimatedCounter = ({ targetNum, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const increment = targetNum / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), targetNum));
      } else {
        setCount(targetNum);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNum]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay, type: "spring", stiffness: 100 }}
    >
      <h3 className="text-yellow-500 text-4xl font-bold mb-2">
        {count}{suffix}
      </h3>
      <p className="text-white text-sm font-medium">{label}</p>
    </motion.div>
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
    <div className="relative bg-black overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="fixed -top-64 -left-64 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(248,112,96,0.4) 0%, transparent 90%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="fixed -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,190,78,0.6) 0%, transparent 50%)',
          filter: 'blur(30px)',
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
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
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
              whileHover={{
                textShadow: "0 0 40px rgba(255,190,78,0.9), 0 0 80px rgba(248,112,96,0.7), 0 0 120px rgba(255,190,78,0.5)"
              }}
            >
              EVERGEN
              <br />
              AI
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
      <motion.div
        className="relative h-[70vh] lg:h-[80vh] bg-[#634c40] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/wp-content/themes/openmind/assets/images/img-45.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: '50% 50%'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="relative h-full flex items-center justify-center px-12 lg:px-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full text-center">
            <motion.h2
              className="text-[#ffffff45] text-[100px] md:text-[150px] lg:text-[220px] leading-[0.9] lowercase font-black"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              START NOW
            </motion.h2>
          </div>
        </motion.div>
      </motion.div>

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
            We believe in excellence through hard work and find ourselves at a pivotal moment. We aim to play a meaningful role in shaping our collective future. As a new-age AI solutions firm, we boast an ultra-high-quality talent pool from India, specializing in RLHF think IITians, PhDs, and artists. Whether you need world-class experts for RLHF or a cutting-edge platform to develop your customized AI model, EverGen AI has the perfect solution for you.
          </motion.p>

          {/* Team Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              '/wp-content/themes/openmind/assets/images/img46-1024x683.jpg',
              '/wp-content/themes/openmind/assets/images/img48-1024x685.jpg',
              '/wp-content/themes/openmind/assets/images/img47-1024x682.jpg'
            ].map((img, i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-lg"
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
              <Link to="/about">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-lg font-semibold uppercase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover more →
                </motion.button>
              </Link>
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
                In the competitive world of talent acquisition, EverGen delivers cutting-edge AI solutions that redefine the recruitment process. Our AI-powered recruiting platform leverages advanced algorithms and machine learning to streamline candidate sourcing, screening, and selection. By analyzing extensive data resumes, social profiles, and job requirements our platform intelligently matches the right candidates to the right opportunities. Through automation and predictive analytics, we enhance efficiency, minimize bias, and elevate the quality of hires.
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 flex items-end justify-center pb-12">
                <div className="grid grid-cols-3 gap-8 text-center w-full px-8">
                  {[
                    { num: 300, label: 'RLHF Experts', suffix: '+' },
                    { num: 5, label: 'Training Hrs delivered', suffix: 'K' },
                    { num: 1000, label: 'Talents Sourced', suffix: '+' }
                  ].map((stat, i) => (
                    <AnimatedCounter
                      key={i}
                      targetNum={stat.num}
                      suffix={stat.suffix}
                      label={stat.label}
                      delay={i * 0.2}
                    />
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
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <motion.div
                className={`aspect-square overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-white text-4xl font-bold mb-6">{service.title}</h3>
                </motion.div>

                <motion.p
                  className="text-gray-400 text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {service.desc}
                </motion.p>
                <Link to="/services">
                  <motion.button
                    className="text-white text-xl border-b-2 border-white pb-2 hover:border-orange-400 hover:text-orange-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ x: 10 }}
                  >
                    View Service →
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          ))}

          {/* View All Services Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-16 py-4 rounded-lg font-semibold uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View all services
              </motion.button>
            </Link>
          </motion.div>
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
      <div className="relative px-6 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              className="text-white text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey in AI Excellence
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Discover the key moments, innovations, and milestones that have shaped our journey toward AI mastery and leadership.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-24 lg:space-y-32">
              {/* 2022 */}
              <motion.div
                className="relative flex flex-col lg:flex-row lg:items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Left side - Content */}
                <div className="flex-1 lg:text-right lg:pr-16">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 lg:p-10 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                    <div className="flex lg:justify-end mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">Official Launch</h3>
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                      Started our journey in AI training with a dedicated team of experts, laying the foundation for excellence in RLHF and machine learning solutions.
                    </p>
                  </div>
                </div>

                {/* Center - Year badge */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full items-center justify-center shadow-lg shadow-orange-500/50 z-10">
                  <span className="text-white text-xl font-black">2022</span>
                </div>
                <div className="lg:hidden mb-4">
                  <span className="inline-block bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-lg font-black px-6 py-2 rounded-full">2022</span>
                </div>

                {/* Right side - Empty for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>

              {/* 2023 */}
              <motion.div
                className="relative flex flex-col lg:flex-row lg:items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Left side - Empty for alignment */}
                <div className="flex-1 hidden lg:block" />

                {/* Center - Year badge */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full items-center justify-center shadow-lg shadow-orange-500/50 z-10">
                  <span className="text-white text-xl font-black">2023</span>
                </div>
                <div className="lg:hidden mb-4">
                  <span className="inline-block bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-lg font-black px-6 py-2 rounded-full">2023</span>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 lg:pl-16">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 lg:p-10 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                    <div className="flex mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">First Milestone</h3>
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                      Completed our first 1000 training sessions with excellent feedback, establishing ourselves as a trusted partner in AI model development and refinement.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2024 */}
              <motion.div
                className="relative flex flex-col lg:flex-row lg:items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Left side - Content */}
                <div className="flex-1 lg:text-right lg:pr-16">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 lg:p-10 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                    <div className="flex lg:justify-end mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M16 11C17.66 11 18.99 9.66 18.99 8S17.66 5 16 5C14.34 5 13 6.34 13 8S14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8S9.66 5 8 5C6.34 5 5 6.34 5 8S6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">Strategic Partnerships</h3>
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                      Collaborated with industry leaders to enhance AI curriculum and expand our reach, bringing cutting-edge solutions to a global audience.
                    </p>
                  </div>
                </div>

                {/* Center - Year badge */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full items-center justify-center shadow-lg shadow-orange-500/50 z-10">
                  <span className="text-white text-xl font-black">2024</span>
                </div>
                <div className="lg:hidden mb-4">
                  <span className="inline-block bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-lg font-black px-6 py-2 rounded-full">2024</span>
                </div>

                {/* Right side - Empty for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg mb-6">Want to be part of our next milestone?</p>
            <Link to="/contact">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-lg font-semibold uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Journey →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full py-16 lg:py-20 mt-20 lg:mt-32 mb-20 lg:mb-32 overflow-hidden">
        <div className="text-center mb-12 px-8">
          <motion.p
            className="text-white text-4xl lg:text-5xl font-bold max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our organization places our customers as its highest priority
          </motion.p>
        </div>

        {/* Continuous Sliding Testimonials */}
        <div className="relative">
          <Marquee speed={0.5} pauseOnHover gradient={false}>
            <div className="flex gap-6">
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
                  text: 'Working at EverGenAI has been an incredible experience. The focus on training AI through RLHF has allowed me to grow both professionally and personally. I\'m proud to be part of a team that\'s pushing the boundaries of AI excellence. It\'s exciting to see our impact!'
                },
                {
                  name: 'Riya Sahu',
                  company: '▚ Fiverr',
                  img: '/wp-content/themes/openmind/assets/images/img9-683x1024.jpg',
                  text: 'The team at EverGen AI was incredibly supportive in helping me find the right job. They took the time to understand my skills and career ambitions, leading me to a fantastic opportunity at Fiverr. Their personalized approach made all the difference in my job search.'
                }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex flex-col w-[420px] min-h-[520px] flex-shrink-0 rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 mr-6"
                >
                  <div className="p-10 flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-md opacity-50"></div>
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="relative w-[90px] h-[90px] rounded-full object-cover border-4 border-white/10"
                      />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-white text-2xl mb-3 font-bold">{testimonial.name}</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mb-6 rounded-full"></div>

                    <p className="text-gray-300 text-base text-center leading-relaxed mb-8 whitespace-normal break-words">
                      "{testimonial.text}"
                    </p>

                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-5 text-center mt-auto">
                    <h4 className="text-white text-lg font-bold">{testimonial.company}</h4>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* FAQ Section */}
      <div className="relative px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white font-bold text-5xl mb-6">Most Popular Questions</p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Discover the answers to common inquiries and learn more about how our expert AI training and RLHF solutions can drive success for your business.
              </p>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
                  <motion.details
                    key={i}
                    className="bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] p-6 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <summary className="text-white text-base lg:text-lg cursor-pointer list-none flex justify-between items-center font-semibold group-hover:text-orange-400 transition-colors duration-300">
                      <span className="pr-4">{faq.q}</span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-orange-500/20">
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </motion.div>
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
              <Link to="/contact">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-5 rounded-lg font-semibold uppercase text-lg border-2 border-[#0a0a0a] inline-block cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                </motion.div>
              </Link>
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