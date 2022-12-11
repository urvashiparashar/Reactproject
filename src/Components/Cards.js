import React from 'react'

function Cards() {
  return (
    <div id="card_row">
  <div id="card_col">
<div className="card">
  <div className="inner-box">
    <div className="card-front">
      <span id="card1">Feeling stressed?</span>
    </div>
    <div className="card-back">
      <p id="p1">Peer support with self care tools</p>
    </div>
  </div>
</div>
</div>
<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif2">
        <span id="card1" style={{color: 'rgb(19, 18, 18)'}}>Mind Recovery</span>
      </div>
      <div className="card-back">
        <p id="p1">For parents and caregivers</p>
      </div>
    </div>
  </div>
  </div>

<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif3">
        <span id="card1-3">Behavioral disorders?</span>
      </div>
      <div className="card-back">
        <p id="p1">For educators</p>
      </div>
    </div>
  </div>
</div>

<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif4">
        <span id="card1">Get Immediate help</span>
      </div>
      <div className="card-back">
        <p id="p1">For employees and workman</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Cards
