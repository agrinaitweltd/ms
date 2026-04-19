import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: direction === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
