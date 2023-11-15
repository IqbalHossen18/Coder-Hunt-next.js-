import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='container p-5'>
        <header>
          <h1>About Coder Hunt</h1>
          <p>Coder Hunt is a blog and community platform that focuses on a variety of topics related to HTML, JavaScript, Node.js, Next.js, React.js, and Express.js. We provide a space for developers and enthusiasts to explore, learn, and share their knowledge in the world of coding.</p>
        </header>

        <section>
          <h2>Topics We Cover</h2>
          <p>Our platform covers a wide range of topics, including:</p>
          <ol>
            <li>
              <strong>HTML basics and advanced techniques:</strong> Dive into the fundamentals of HTML and explore advanced techniques for creating structured and interactive web content.
            </li>
            <li>
              <strong>JavaScript best practices and tutorials:</strong> Learn the best practices for JavaScript development and find tutorials to enhance your scripting skills.
            </li>
            <li>
              <strong>Node.js development and server-side scripting:</strong> Explore the world of server-side JavaScript development with Node.js, including creating APIs and applications.
            </li>
            <li>
              <strong>Next.js for modern web applications:</strong> Discover how to build modern web applications using Next.js, a powerful React framework.
            </li>
            <li>
              <strong>React.js for building user interfaces:</strong> Get insights into building interactive and dynamic user interfaces with React.js, a popular JavaScript library.
            </li>
            <li>
              <strong>Express.js for creating web APIs:</strong> Learn how to develop web APIs and backend services with Express.js, a fast and minimalist Node.js web application framework.
            </li>
          </ol>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>At Coder Hunt, our mission is to foster a community of passionate coders, where individuals can exchange ideas, seek help, and stay updated on the latest trends and technologies in web development. We believe in the power of knowledge sharing and the importance of learning and growing together as developers.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to get in touch with the Coder Hunt team, feel free to contact us at <Link href="/contact">contact@coderhunt.com</Link>.</p>
        </section>

        <footer>
          <p style={{color:'black', fontWeight:'bold'}}>&copy; 2023 Coder Hunt. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default About