import qrCode from '../images/image-qr-code.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={qrCode} alt="qr-code" id="qr-code"/>
      </div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </>
  )
}

export default App
