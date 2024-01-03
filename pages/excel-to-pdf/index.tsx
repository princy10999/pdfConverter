import React from 'react'
import ConvertButtonComponent from './../../src/component/common/ConvertButtonComponent';

const ExcelToWord = () => {
  return (
    <>
    <ConvertButtonComponent
    title="Convert EXCEL to PDF"
    convertText="Make EXCEL spreadsheets easy to read by converting them to PDF."
    buttonText="Select EXCEL files"
    DescriptionText="or drop EXCEL spreadsheets here" />
    </>
  )
}

export default ExcelToWord