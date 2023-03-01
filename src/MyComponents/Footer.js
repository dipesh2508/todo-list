import React from 'react'

export const Footer = () => {
  let FooterStyle = {
    position: "relative",
    top: "90vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-3' style={FooterStyle}>
      Copyright &copy; MyTodoList.com
    </footer>
  )
}
