import React from 'react'
import ConvertButtonComponent from './../../src/component/common/ConvertButtonComponent';

const PdfToExcel = () => {
  return (
    <>
     <ConvertButtonComponent
      title="Convert PDF to EXCEL"
      convertText="Convert PDF Data to EXCEL Spreadsheets."
      buttonText="Select PDF file"
      DescriptionText="or drop PDF here"
      linkText />
    </>
  )
}

export default PdfToExcel