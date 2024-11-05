// src/projects.js
import ima  from '../assets/pm.jpeg';
import imag  from '../assets/GRADA.jpeg';
import orange from '../assets/orange.jpeg';
const Projects = [
    { 
      id: 1, 
      title: 'Product Management Website', 
      description: {
        intro:'A full-stack application for users to upload products along with their prices and images, streamlining the management of product listings.',
        features:["Product Upload: A user-friendly interface for product details.",
        "CRUD Operations: Create, read, update, and delete products.",
        "Responsive Design: Mobile-friendly site for seamless experience."]},
      image: ima, 
      extraImages: [], // Add extra images here
      link: '/project1' ,
      github:'https://github.com/yeshitha-kuppireddy/productmanagementwebsite'
    },
    { 
      id: 2, 
      title: 'Grad school acceptance prediction', 
      description: {
        intro:'An advanced machine learning model to predict graduate school acceptance probabilities using ensemble techniques. The model leverages a comprehensive dataset that includes various student qualifications, enabling accurate and reliable predictions of university admission outcomes.',
        features:['Ensemble Techniques: Utilizes a combination of multiple algorithms to improve prediction accuracy and robustness.',
          'High Accuracy: Achieved 90% accuracy in predicting acceptance probabilities, ensuring reliable decision-making support for prospective students.',
          'Multi-Factor Analysis: Considers a range of qualifications, including CGPA, GRE scores, and university ratings, providing a holistic view of factors influencing acceptance.']
      }, 
      image: imag, 
      extraImages: [], // Add extra images here
      link: '/project2',
      github:'https://github.com/yeshitha-kuppireddy/acceptanceprediction'
    },
    {
      id: 3, 
      title: 'Orange quality prediction', 
      description: {
        intro:'A predictive model for assessing the quality of oranges based on various physical and chemical characteristics. The model evaluates multiple attributes to provide a quality rating, helping producers and retailers ensure optimal freshness and marketability.',
        features:['Comprehensive Attribute Analysis: Incorporates diverse factors such as size (cm), weight (g), Brix (sweetness), pH (acidity), softness (1-5), harvest time (days), ripeness (1-5), color, variety, and blemishes (Y/N).',
          'Quality Rating System: Outputs an overall quality score on a scale of 1 to 5, facilitating easy classification and decision-making.',
          'Data-Driven Insights: Uses statistical and machine learning techniques to derive insights from historical data, improving the accuracy of quality predictions.'
          ]}, 
      image: orange, 
      extraImages: [], // Add extra images here
      link: '/project3',
      github:'https://github.com/yeshitha-kuppireddy/orangequalityprediction'
    }
    // Add more projects as needed
  ];
  
  export default Projects;
  