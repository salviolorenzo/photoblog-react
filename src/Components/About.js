import React from 'react';

const About = props => {
  return (
    <div className="about">
      <h2>About me:</h2>
      <section className="about" id="about">
        <img src="images/head-shot.png" alt="" />
        <div className="info">
          <h3>Lorenzo Salvio</h3>
          <h5>Software Developer, Amateur Photographer</h5>
          <p>
            Photography has been a hobby of mine since that one className I took
            back in high school. I have just recently decided to take it more
            seriously in my search for a new creative outlet. My goal is to
            share experiences, not just images.
          </p>
        </div>
      </section>
      <footer>
        <ul className="contact" id="contact-me">
          <li>
            <a href="tel:1-949-285-1391">
              <i className="fas fa-phone-square" />
            </a>
          </li>
          <li>
            <a href="mailto:salviolorenzo@gmail.com">
              <i className="fas fa-envelope-square" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lorenzo-salvio-173210120/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/salviolorenzo">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/the.actual.boi/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/lorenzo.salvio.9">
              <i className="fab fa-facebook" />
            </a>
          </li>
        </ul>
        <p>Shooting on Nikon D3400 -- 18-55mm/70-300mm | iPhone 6s Plus</p>
      </footer>
    </div>
  );
};
export default About;
