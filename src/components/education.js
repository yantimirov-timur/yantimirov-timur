import React from 'react'

import PropTypes from 'prop-types'

import './education.css'

const Education = (props) => {
  return (
    <div className={`education-education ${props.rootClassName} `}>
      <span className="education-text">{props.text}</span>
      <img
        alt={props.Line3_alt}
        src={props.Line3_src}
        className="education-line3"
      />
      <div className="education-group11">
        <span className="education-text1">{props.text1}</span>
        <span className="education-text2">{props.text2}</span>
        <span className="education-text3">{props.text3}</span>
      </div>
    </div>
  )
}

Education.defaultProps = {
  text: 'Образование',
  Line3_src: '/external/line35011-jhgr.svg',
  Line3_alt: 'Line35011',
  text1: 'Информатика и вычислительная техника',
  text2: 'Санкт-Петербургский политехнический университет',
  text3: '2019-09 - 2023-06',
  rootClassName: '',
  Ellipse19_alt: 'Ellipse195011',
  Ellipse19_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/66195979-81a6-4997-a328-5f003890d89d/cb74c86a-7528-430b-95a8-837334242b33?org_if_sml=1127&force_format=original',
}

Education.propTypes = {
  text: PropTypes.string,
  Line3_src: PropTypes.string,
  Line3_alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  Ellipse19_alt: PropTypes.string,
  Ellipse19_src: PropTypes.string,
}

export default Education
