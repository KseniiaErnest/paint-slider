import React from 'react'
import Button from './Button';
import next from './icons8-next-page-32.png';
import prev from './icons8-back-to-32.png'

export default function Nav({nextPaint, prevPaint}) {

  return (
    <nav className='nav'>
      <h2>galleria.</h2>
      <div className='btn-container'>
      <Button onClick={prevPaint}><img src={prev} alt='Previous paint' /></Button>
      <Button onClick={nextPaint}><img src={next} alt='Next paint' /></Button>
      </div>
    </nav>
  )
}
