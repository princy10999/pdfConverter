import React from 'react'
import { FaGoogleDrive, FaDropbox } from "react-icons/fa";
import ConvertButtonComponent from '../../src/component/common/ConvertButtonComponent';


const PdfToWord = () => {
  return (
    <ConvertButtonComponent
      title="PDF to WORD Converter"
      convertText="Convert your PDF to WORD documents with incredible accuracy."
      buttonText="Select PDF file"
      DescriptionText="or drop PDF here"
      linkText />
  )
}

export default PdfToWord;