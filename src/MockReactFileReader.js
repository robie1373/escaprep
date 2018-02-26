import React, { Component } from 'react';

class MockReactFileReader extends Component {
  render () {
    return (
      <div
         className="react-file-reader"
       >
         <input
           accept=".csv"
           className="react-file-reader-input"
           id="0d8f72bc-f98a-415e-aba9-c2b77dfc243c"
           multiple={false}
           onChange={[Function]}
           type="file"
         />
         <div
           className="react-file-reader-button"
           onClick={[Function]}
         >
           <button
             className="fileUploadButton"
           >
             Upload File
           </button>
         </div>
       </div>
    );
  }
}

export default MockReactFileReader;
