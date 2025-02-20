import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import Work from '../components/work/Work';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [velocity, setVelocity] = useState(0);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  // Gold color configurations
  const goldColor = {
    main: 'rgba(255, 215, 0, 0.9)',      // Bright gold
    border: 'rgba(218, 165, 32, 0.8)',   // Darker gold border
    accent: 'rgba(255, 223, 0, 1)',      // Bright accent gold
    shadow: '0 0 6px rgba(255, 215, 0, 0.6)' // Gold glow
  };

  // Track mouse movement
  useEffect(() => {
    const mouseMove = (e) => {
      // Calculate velocity for dynamics
      const dx = e.clientX - prevPosition.x;
      const dy = e.clientY - prevPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setVelocity(Math.min(distance, 20));
      
      setPrevPosition({ x: e.clientX, y: e.clientY });
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [prevPosition]);

  // Handle cursor states
  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    
    const handleLinkHoverStart = () => setCursorVariant("hover");
    const handleLinkHoverEnd = () => setCursorVariant("default");
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    document.body.style.cursor = 'none';
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Different follow speeds for layered effect
  const followerTransition = {
    type: "spring",
    damping: 20,
    stiffness: 400,
    mass: 0.8
  };
  
  const trackerTransition = {
    type: "spring",
    damping: 30,
    stiffness: 500,
    mass: 0.5
  };

  return (
    <>
      {/* Main cursor dot - precise tracker */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: trackerTransition
        }}
        style={{
          position: 'fixed',
          zIndex: 10000,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          variants={{
            default: { 
              width: '10px', 
              height: '10px',
              backgroundColor: goldColor.main,
              borderRadius: '0%',
              boxShadow: goldColor.shadow
            },
            hover: { 
              width: '14px', 
              height: '14px',
              backgroundColor: goldColor.accent,
              borderRadius: '0%',
              boxShadow: goldColor.shadow
            },
            click: { 
              width: '8px', 
              height: '8px',
              backgroundColor: goldColor.accent,
              borderRadius: '0%',
              boxShadow: goldColor.shadow
            }
          }}
          animate={cursorVariant}
          style={{
            transform: 'rotate(45deg)',
            transition: 'all 0.15s ease-out'
          }}
        />
      </motion.div>
      
      {/* Elegant border frame */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: followerTransition
        }}
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          variants={{
            default: { 
              width: '36px', 
              height: '36px',
              opacity: 0.7 + velocity * 0.025,
              border: `2px solid ${goldColor.border}`,
              borderRadius: '0%'
            },
            hover: { 
              width: '60px', 
              height: '60px',
              opacity: 0.9,
              border: `2px solid ${goldColor.accent}`,
              borderRadius: '0%',
              boxShadow: goldColor.shadow
            },
            click: { 
              width: '24px', 
              height: '24px',
              opacity: 1,
              border: `2.5px solid ${goldColor.accent}`,
              borderRadius: '0%',
              boxShadow: goldColor.shadow
            }
          }}
          animate={cursorVariant}
          style={{
            transform: 'rotate(45deg)',
            transition: 'all 0.3s ease'
          }}
        />
      </motion.div>
      
      {/* Gold accent corner elements */}
      {(cursorVariant === "hover" || cursorVariant === "click") && (
        <>
          {/* Top-left corner */}
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x - 30, y: mousePosition.y - 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x - 38,
              y: mousePosition.y - 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '15px',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.9))',
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x - 30, y: mousePosition.y - 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x - 38,
              y: mousePosition.y - 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '2px',
              height: '15px',
              background: 'linear-gradient(180deg, rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.9))',
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998
            }}
          />
          
          {/* Bottom-right corner */}
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x + 30, y: mousePosition.y + 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x + 38,
              y: mousePosition.y + 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '15px',
              height: '2px',
              background: 'linear-gradient(-90deg, rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.9))',
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x + 30, y: mousePosition.y + 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x + 38,
              y: mousePosition.y + 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '2px',
              height: '15px',
              background: 'linear-gradient(0deg, rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.9))',
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998
            }}
          />
        </>
      )}
      
      {/* Interaction pulse effect */}
      {cursorVariant === "click" && (
        <motion.div
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ 
            opacity: 0,
            scale: 1.5,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
          style={{
            position: 'fixed',
            top: mousePosition.y,
            left: mousePosition.x,
            width: '50px',
            height: '50px',
            border: `2px solid ${goldColor.border}`,
            transform: 'translate(-50%, -50%) rotate(45deg)',
            pointerEvents: 'none',
            zIndex: 9997
          }}
        />
      )}
      
      <Header />
      <main className='main'>
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;