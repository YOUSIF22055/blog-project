import React from 'react'

const Hero = () => {
  return (
    <section>
        <div>
            <h1>Read the most interesting articles</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do
                eiusmod tempor incididunt ut labore et doloer magna aliqua
            </p>
        </div>
        <div>
            <input type="text" />
        </div>
        <button>search</button>
        <div>
            <div>
                <span>Popular Tags:</span>
                <ul>
                    <li>Design</li>
                    <li>User Experience</li>
                    <li>User Interfaces</li>
                </ul>
            </div>
        </div>
        <div>
            <img src={images} alt="users are reading articles" />
        </div>
    </section>
  )
}

export default Hero
