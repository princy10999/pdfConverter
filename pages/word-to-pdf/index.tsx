import React from 'react'
import ConvertButtonComponent from './../../src/component/common/ConvertButtonComponent';

const WordToPdf = () => {
  return (
    <>
    <ConvertButtonComponent
    title="Convert WORD to PDF"
    convertText="Make DOC and DOCX files easy to read by converting them to PDF."
    buttonText="Select WORD files"
    DescriptionText="or drop WORD documents here" />
    </>
  )
}

export default WordToPdf