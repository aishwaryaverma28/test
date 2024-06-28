import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import React, { useState } from "react";
interface EmailProps {
  onEmailChange: (email: string) => void;
}
const Email: React.FC<EmailProps> = ({ onEmailChange }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
const handleButtonClick = () => {
  onEmailChange(inputValue);
}
  return <div>
    <Input type="email" value={inputValue} onChange={handleInputChange}/>
    <Button onClick={handleButtonClick}>Add</Button>
  </div>;
};

export default Email;
