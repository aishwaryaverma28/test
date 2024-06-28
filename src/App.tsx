import React, { useState } from 'react';
import Email from './Email';

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  // // Instructions for Candidate:
// // 1. Add an input field to accept an email.
// // 2. Add a button that passes the input value to the parent component.
// // 3. In the parent component, add logic to send the value to a backend with a POST request to 
// //the following url https://webhook.site/6064735c-c7f2-4584-ba9d-1f0e80f32721. Along with the email, send your github username in the JSON. 
// // 4. Add styling to the button (Button) and input (Input) using the ShadCN Component library here: https://ui.shadcn.com/docs/components/input
const handleEmailChange = async (newEmail:string) => {
  setEmail(newEmail);
  const payload = {
    email: newEmail,
    github:"aishwaryaverma28"
  };
  console.log(payload)
  try {
    const response = await fetch ('https://webhook.site/6064735c-c7f2-4584-ba9d-1f0e80f32721',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if(!response.ok)
      {
        throw new Error ("Error")
      }
      const data = await response.json();
      console.log(data);
  } catch(error){
    console.log(error)
  }
}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Email onEmailChange={handleEmailChange}/>
      <p>{email}</p>
    </div>
  );
};

export default App;
