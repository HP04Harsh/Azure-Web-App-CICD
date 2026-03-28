import { useState } from 'react'
import './Landing.css'

export default function Landing() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks! We'll reach out to ${email || 'you'} soon.`)
    setEmail('')
    setMessage('')
  }

  return (
    <div className="site">
      <header className="site-header">
        <div className="brand">Gondia Softcloud</div>
        <nav className="site-nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>Cloud solutions for modern businesses</h1>
            <p>
              Gondia Softcloud delivers reliable, scalable cloud tools to help
              your team build and grow — secure, fast, and cost-effective.
            </p>
            <a className="cta" href="#contact">Get a free consultation</a>
          </div>
          <div className="hero-visual" aria-hidden>
            <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#0ea55b" />
                  <stop offset="100%" stopColor="#0aa65a" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="600" height="400" rx="20" fill="url(#g1)" />
            </svg>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Features</h2>
          <div className="cards">
            <article className="card">
              <h3>Scalable Infrastructure</h3>
              <p>Auto-scale resources so your apps stay fast under load.</p>
            </article>
            <article className="card">
              <h3>Secure by Design</h3>
              <p>Industry-standard encryption, access controls, and backups.</p>
            </article>
            <article className="card">
              <h3>Easy Integrations</h3>
              <p>Connect with popular tools and deploy in minutes.</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <h2>Pricing</h2>
          <div className="plans">
            <div className="plan">
              <h3>Starter</h3>
              <div className="price">Free</div>
              <ul>
                <li>Basic cloud resources</li>
                <li>Community support</li>
              </ul>
              <a className="btn-outline" href="#contact">Get started</a>
            </div>
            <div className="plan popular">
              <h3>Business</h3>
              <div className="price">$49 / mo</div>
              <ul>
                <li>Auto-scaling</li>
                <li>Priority support</li>
              </ul>
              <a className="btn-primary" href="#contact">Choose Business</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Dedicated infra</li>
                <li>SLAs & onboarding</li>
              </ul>
              <a className="btn-outline" href="#contact">Contact Sales</a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Tell us about your project and we'll get back within 1 business day.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </label>
            <label>
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A brief description..."
              />
            </label>
            <div className="form-actions">
              <button type="submit" className="btn-primary">Send</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Gondia Softcloud — Built with care</div>
      </footer>
    </div>
  )
}
