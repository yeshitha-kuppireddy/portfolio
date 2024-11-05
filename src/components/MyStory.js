// src/components/MyStory.js
import React from 'react';
import './styles.css'; // Ensure your styles are imported here
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
const MyStory = () => {
  return (
    <>
        <Header></Header>
        <div className="about-me-text">
          <h2 style={{color:'gray'}}>About Me</h2>
          <h3 style={{fontWeight:'220px'}}>Hello!</h3>
          <p> I'm Yeshitha, a senior undergraduate student pursuing a B.E. in AI and Machine Learning at CBIT with a CGPA of 9.4.</p>
          <p>In the early stages of my journey, I built regression and classification models that gradually expanded to include ensemble techniques and neural networks. Currently, I am working on a project related to knee osteoarthritis detection using deep learning.</p>
          <p>My technical skills expanded further during my internship at Sonata-Software limited, where I researched cloud computing and the costs of deploying large language models on platforms like Vertex AI and Azure Machine Learning. I built AutoML pipelines to streamline processes.</p>
          <p>Beyond machine learning, I also ventured into web development by creating a product management website using the MERN stack. This experience taught me the intricacies of JavaScript and its plethora of frameworks. I utilized tools like Vite for optimized development, as well as component libraries such as Chakra UI and Material UI to enhance the user interface.</p>
          <p>I am now looking forward to applying for internships and positions that will allow me to leverage my skills in web development, data science and machine learning, where I hope to contribute meaningfully while growing as a professional in this dynamic field.</p>
        </div>
        <Footer/>
    </>
  );
};

export default MyStory;

