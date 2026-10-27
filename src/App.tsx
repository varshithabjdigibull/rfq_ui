import { useState } from "react";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/react/dashboard";
import Tus from "@uppy/tus";
import XHRUpload from "@uppy/xhr-upload";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";

function App() {
  const [uppy] = useState(() =>
  new Uppy({
    autoProceed: false,
    restrictions: {
      maxNumberOfFiles: 10,
      allowedFileTypes: [".pdf", ".docx", ".txt", ".xlsx"],
    },
  }).use(XHRUpload, {
  endpoint: "http://127.0.0.1:8000/upload",
  
  fieldName: "file",
})
);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Uppy Bulk Upload Test</h1>

      <Dashboard
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false}
        inline
        height={450}
      />
    </div>
  );
}

export default App;