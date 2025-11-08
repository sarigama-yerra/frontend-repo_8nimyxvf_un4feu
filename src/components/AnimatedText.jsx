import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText
 * Word-by-word scroll-reveal animation for headings and paragraphs.
 * Usage: <AnimatedText text="Hello World" className="text-3xl font-bold" />
 */
export default function AnimatedText({ text, className = '', delay = 0, stagger = 0.04, once = true, align = 'inline' }) {
  const words = String(text).split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: 12, opacity: 0, filter: 'blur(2px)' },
    show: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const Wrapper = align === 'block' ? 'div' : 'span';

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      className={className}
    >
      <Wrapper className="[word-spacing:0.25rem]">
        {words.map((word, i) => (
          <motion.span key={i} variants={child} className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </Wrapper>
    </motion.span>
  );
}
