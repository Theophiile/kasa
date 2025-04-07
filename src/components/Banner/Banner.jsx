import React from 'react'; 
import './Banner.scss'

export default function Banner({ image, title, className = "" }) {
  return (
    <div 
      className={`banner ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner-overlay"></div>
      {title && (
        <h1 className="banner-title">
          {title.split('<br />').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('<br />').length - 1 && <br className="mobile-break" />}
            </React.Fragment>
          ))}
        </h1>
      )}
    </div>
  )
}