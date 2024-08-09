### Running Shoes Webshop
Welcome to the Running Shoes Webshop! This is a full-stack e-commerce application where users can browse running shoes, add them to their cart, and proceed to checkout. The frontend is built with React, Vite, and vanilla CSS, while the backend is powered by Express.js and MongoDB. 
This project was created as a collaboration in the Web Development module of the Full Stack Developer course at Codecool.

## Features
- Product Browsing: View a wide range of running shoes available in the shop.
- Sorting: Sort shoes by price and brand to find the perfect pair.
- Cart Management: Add, update, and remove items from the shopping cart.
- Checkout Process: Users can review their cart and proceed to checkout.
- Responsive UI: A clean, responsive design implemented with vanilla CSS.
- Database: MongoDB is used for storing product details and orders.

## Installation
1. Clone the repository:

        git clone https://github.com/your-username/running-shoes-webshop.git
        cd running-shoes-webshop
   
2. Install dependencies for the frontend:

  - Navigate to the frontend directory and install the necessary dependencies:
    
        cd frontend
        npm install
    
3. Install dependencies for the backend:

  - Navigate to the backend directory and install the necessary dependencies:

        cd ../backend
        npm install
    
4. Configure MongoDB:

Ensure you have MongoDB running locally or set up with a cloud service like MongoDB Atlas. You may need to create a .env file in the backend directory with the following configuration:

    MONGO_URI=mongodb://localhost:27017/running-shoes-webshop
    PORT=5000
    
Replace the MONGO_URI with your actual MongoDB connection string if it's hosted remotely.

## Running the Application
To run the application, you can use the provided scripts in the package.json file.

Start the Development Server:

To start both the frontend and backend servers simultaneously, run the following command in the frontend directory:

    npm run dev
    
The frontend will be served on http://localhost:3000 (or another port if specified by Vite).
The backend will run on http://localhost:5000 by default.


