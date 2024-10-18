<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
import { Route, Routes } from 'react-router-dom';
import ServicesDetails from './Page/ServicesDetails/ServicesDetails';
import PublicLayout from './Layout/PublicLayout';
import './App.css';
// import AppRoutes from './AppRoutes';
import LandingPage from './Page/LandingPage/LandingPage';
import PortfolioDetails from './Page/PortfolioDetails/PortfolioDetails';

function App() {
  const servicesData = [
    {
      id: 1,
      title: 'Front-End',
      description: `
        Creation of responsive and dynamic websites using HTML, CSS, and JavaScript.
        Use of modern frameworks and libraries such as React, Angular.
      `,
      points: [
        'Responsive Design with HTML, CSS, and JavaScript.',
        'Harnessing the Power of React for Modern Web Development.',
        'Angular: Crafting Robust and Feature-rich Web Apps.',
      ],
      additionalInfo: `
        Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
        Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
      `,
      lottieSrc: 'https://lottie.host/e7fdeab7-9f70-4685-b435-d702077b508b/MhXdbGC5hC.json',
    },
    {
      id: 2,
      title: 'Back-End',
      description: `
        Building RESTful APIs with Node.js and Express.js.
        Integration with databases like MongoDB or PostgreSQL.
      `,
      points: [
        'A Comprehensive Guide.',
        'Best Practices for RESTful APIs.',
        'Creating Robust RESTful APIs for Modern Web Applications.',
      ],
      lottieSrc: 'https://lottie.host/026a2643-d1ff-4f60-b0e8-069822baa36e/KT3NrmOy5Q.json',
    },
    {
      id: 3,
      title: 'Full-Stack',
      description: `
        Developing complete web applications with both frontend and backend components.
        Demonstrating CRUD operations and authentication features.
      `,
      points: [
        'Develop a comprehensive web application integrating frontend and backend components, showcasing CRUD (Create, Read, Update, Delete) operations for effective data management.',
        'Implement robust authentication features to ensure secure access and user management within the application.',
        'Demonstrate seamless interaction between the frontend and backend, providing a user-friendly experience with data manipulation and authentication capabilities.',
      ],
      lottieSrc: 'https://lottie.host/8534f3f5-11e4-462e-acaf-4c172ed8b8b8/piiDlJhwvl.json',
    },
  ];
<<<<<<< HEAD

 

  return (
    <>
=======
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Set a timeout to delay the removal of the preloader
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust the delay (in milliseconds) as needed
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && <div id="preloader"></div>}
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='portfoliodetails/:projectId?' element={<PortfolioDetails />} />
          <Route path='servicesdetails/:serviceId?' element={<ServicesDetails servicesData={servicesData} />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
