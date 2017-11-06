import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './cta.scss';

/**
 * CTA Component
 * @param  {string} width - Button width
 * @param  {string} height - Button height
 * @param  {string} color - Font color
 * @param  {string} size - Font size
 * @param  {string} bgColor - Polygon background color
 * @param  {string} stroke - Polygon stroke color
 * @param  {string} cut - Size of the upper left and lower right corners of the polygon
 * @param  {string} copy - Link Text
 * @param  {string} link - Destination path
 */
const CTA = (props) => {
  const { width, height, color, size, bgColor, bgColor2, stroke, cut, link, copy } = props;

  return (
    <div className="cta" style={{"width": width + "px",
                                 "height": height + "px",
                                 "fontSize": size + "px"}}>
      <svg className="svg-graphic"
           x="0" y="0"
           width="100%"
           height="100%"
           xmlns="http://www.w3.org/2000/svg"
           xlink="http://www.w3.org/1999/xlink"
           version="1.1">
        <defs>
          <clipPath id="chopTLBR" className="chopTLBR">
              <rect x="-5" y="-10" height="50" width="200" />
          </clipPath>
        </defs>

          <polygon points={`${cut} 0,
                          ${width} 0,
                          ${width} ${height - cut},
                          ${width - cut} ${height},
                          0 ${height},
                          0 ${cut}`}
                    style={{
                      stroke: stroke,
                      fill: bgColor
                    }} />

          <polygon clipPath="url(#chopTLBR)" points={`${cut} 0,
                          ${width} 0,
                          ${width} ${height - cut},
                          ${width - cut} ${height},
                          0 ${height},
                          0 ${cut}`}
                    style={{
                      stroke: stroke,
                      fill: bgColor2
                    }} />

      </svg>
      <a href={link} className="cta__copy"
           style={{
            color: color
           }}>test</a>
    </div>
  );
};

CTA.defaultProps = {
  width: 170,
  height: 40,
  color: '#fff',
  size: 11,
  bgColor: '#0000ff',
  bgColor2: '#ff0000',
  // stroke: 'none',
  cut: 15,
  link: '/',
  copy: 'THIS IS A LINK'
};

CTA.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  bgColor2: PropTypes.string,
  // stroke: PropTypes.string,
  cut: PropTypes.number,
  link: PropTypes.string,
  copy: PropTypes.string
};

export default CTA;