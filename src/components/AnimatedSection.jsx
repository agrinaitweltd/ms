import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '0px 0px -40px 0px',
  })

  const yStart = direction === 'up' ? 30 : direction === 'down' ? -30 : 0
  const xStart = direction === 'left' ? 30 : direction === 'right' ? -30 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yStart, x: xStart, scale: direction === 'scale' ? 0.97 : 1 }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y: yStart, x: xStart }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
