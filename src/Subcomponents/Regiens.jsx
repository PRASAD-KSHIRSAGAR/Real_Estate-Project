import React from 'react'

const Regiens = () => {
  return (
    <>
      <section id='regions'>
        <h1>Our regions</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque reprehenderit in voluptatem ut sit magnam</p>
        <div className="region_container">
            <div className="card">
                <img src="/region1.jpg" alt="Mountains"/>
                <h2>Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>
            <div className="card">
                <img src="/region2.jpg" alt="Coastline"/>
                <h2>Coastline</h2>
                <p><span>53</span>Properties</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Regiens
