# CalorieScan

CalorieScan is an innovative application that allows users to scan QR codes to check the calorie count of dishes. Users can also customize the quantity of a dish and view real-time calorie calculations.

## Features
- **QR Code Scanning**: Easily scan a QR code associated with a dish to view its calorie count.
- **Dish Information**: Get detailed information about all available dishes.
- **Real-Time Calorie Calculation**: Customize the dish quantity and see updated calorie information instantly.
- **User Authentication**: Secure login and signup for personalized access.

## API Endpoints

### Authentication
1. **Login**
   - **URL**: `/login`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Description**: Authenticates the user and provides access to their account.

2. **Signup**
   - **URL**: `/signup`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "email": "user@example.com",
       "name": "John Doe",
       "password": "password123"
     }
     ```
   - **Description**: Registers a new user to the application.

### Dish Information
3. **Get All Dishes**
   - **URL**: `/dishes`
   - **Method**: GET
   - **Description**: Fetches information about all available dishes.

4. **Get a Specific Dish**
   - **URL**: `/dishes/:dishId`
   - **Method**: GET
   - **Description**: Fetches information about a specific dish by its ID.

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com//caloriescan](https://github.com/keshavsingh4093/3627-CalorieScan.git)

