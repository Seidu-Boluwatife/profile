import React from 'react'
interface ButtonProps {
  name:string;
  href:string;
  target:string;
  rel:string;

}

const Button: React.FC<ButtonProps> = ({name,href,target,rel}) => {
  return (
    <div className='rounded-e-lg rounded-l-lg    bg-gray-700 text-xl text-white' >
        
      <a href={href} rel={rel} target={target}>{name}</a>
    </div>
  )
}

export default Button