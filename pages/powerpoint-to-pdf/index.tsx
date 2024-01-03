import React from 'react'
import ConvertButtonComponent from './../../src/component/common/ConvertButtonComponent';

const PowerpointToPdf = () => {
  return (
    <>
    <ConvertButtonComponent
    title="Convert POWERPOINT to PDF"
    convertText="Make PPT and PPTX slideshows easy to view by converting them to PDF."
    buttonText="Select POWERPOINT files"
    DescriptionText="or drop POWERPOINT slideshows here" />
    </>
  )
}

export default PowerpointToPdf