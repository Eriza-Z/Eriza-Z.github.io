import React from 'react'

function Tech() {
  return (
    <div className="text-center text-white pt-6">
        <h1>Technology Used:</h1>
        <h2 className="pt-4 font-medium">Web Framework: </h2>
        <p className="pb-6 font-light">
          <a href="https://nextjs.org" rel="noopenner noreferrer">
            NextJS
          </a>, <a href="https://reactjs.org" rel="noopenner noreferrer">
            ReactJS
          </a>
        </p>
        <h2 className="font-medium">UI Framework:</h2>
        <p className="pb-4 font-light">
          <a
            href="https://michalsnik.github.io/aos/"
            rel="noopenner noreferrer"
          >
            AOS
          </a>, <a href="https://tailwindcss.com" rel="noopenner noreferrer">
            Tailwind CSS
          </a> & <a href="https://animate.style" rel="noopenner noreferrer">
            Animate.css
          </a>
        </p>
        <h2 className="font-medium">Analytics:</h2>
        <p className="pb-4 font-light">
          <a href="https://analytics.google.com" rel="noopenner noreferrer">
            Google Analytic
          </a>
        </p>
        <h2>Hosting & CDN:</h2>
        <p className="pb-8">
          <a href="https://github.com" rel="noopenner noreferrer">
            GitHub
          </a> & <a href="https://cloudflare.com" rel="noopenner noreferrer">
            Cloudflare
          </a>
        </p>
      </div>
  )
}

export default Tech