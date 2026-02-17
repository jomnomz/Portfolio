import { useState, useRef } from 'react'
import styles from './carousel.module.css'
import { ChevronLeft, ChevronRight } from 'react-feather'
import Modal from '../modal/Modal'

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = (e) => {
    e?.stopPropagation()
    setCurr(curr === 0 ? slides.length - 1 : curr - 1)
  }

  const next = (e) => {
    e?.stopPropagation()
    setCurr(curr === slides.length - 1 ? 0 : curr + 1)
  }

  const handleImageClick = (e) => {
    e.stopPropagation()
    setIsModalOpen(true)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.slides} style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slideItem} onClick={handleImageClick}>
              {slide}
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={prev} className={styles.button}>
            <ChevronLeft />
          </button>
          <button onClick={next} className={styles.button}>
            <ChevronRight />
          </button>
        </div>

        <div className={styles.indicatorContainer}>
          {slides.map((_, i) => (
            <div key={i} className={`${styles.indicator} ${curr === i ? styles.active : ''}`} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentIndex={curr}
        totalSlides={slides.length}
        onPrev={prev}
        onNext={next}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides[curr]}
      </Modal>
    </>
  )
}
