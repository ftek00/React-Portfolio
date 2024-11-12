import React, { useState } from "react";
import profileImage from "../assets/headshot.jpg";
import image1 from "../assets/htmlcssjs.png";
import image2 from "../assets/coding.jpg";
import image3 from "../assets/mongodb-node.png";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="image-container">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-img"
          onClick={() => openModal(profileImage)}
        />
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <img src={currentImage} alt="Full Size" className="full-image" />
            </div>
          </div>
        )}
      </div>

      <p className="about-text">
        Hi there! I'm a web developer who’s really excited about learning and
        growing in the world of full-stack development. I’ve been diving into
        technologies like React, Node.js, and other cool tools to build modern,
        user-friendly web applications. I’m passionate about creating web
        experiences that are not only functional but also intuitive and
        enjoyable to use. Every new project is an opportunity for me to learn
        something new, and I’m always eager to take on new challenges and
        improve my skills!
      </p>

      <h3>Gallery</h3>
      <div className="image-gallery">
        <img
          src={image1}
          alt="Gallery Image 1"
          className="gallery-img"
          onClick={() => openModal(image1)}
        />
        <img
          src={image2}
          alt="Gallery Image 2"
          className="gallery-img"
          onClick={() => openModal(image2)}
        />
        <img
          src={image3}
          alt="Gallery Image 3"
          className="gallery-img"
          onClick={() => openModal(image3)}
        />
      </div>
    </section>
  );
};

export default About;
