import React from 'react'
import './nav.css'

export default function FooTer() {
  return (
    <div style={{position:'relative',top:'190px'}}>
        <footer className="text-center bg-light" style={{margin: "0"}}>
    {/* Footer container  */}
    <div className="container-1" style={{width: '100%', margin: '0'}}>
        
        {/* Horizontal rule for separation  */}
        <hr className="my-4" style={{margin: "0"}} />
        {/* Copyright notice  */}
        <p style={{margin: "0"}}>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
</footer>
</div>
  )
}
