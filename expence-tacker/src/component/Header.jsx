import React from 'react'
import "../component/Style.css"

function Header() {
  return (
    <>
        <div className='main'>
            <p className='Header'>Expence Tracker</p>
            <div className='walletDiv'>

                <div className='walletBox'>
                    <div className='walletBoxText'>
                        Wallet Balance: <span>₹4500</span>
                    </div>
                    <button className='walletButton'>+ Add Income</button>
                </div>

                <div className='walletBox'>
                    <div className='walletBoxText'>
                        Wallet Balance: <span>₹4500</span>
                    </div>
                    <button className='walletButton'>+ Add Income</button>
                </div>

                <div className='walletChart'>
                chart
                </div>
            </div>
        </div>

        <div>
            
        </div>
    </>
  )
}

export default Header