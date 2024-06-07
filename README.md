# API Documentation

## User APIs

### 1. Signup

- **Route:** POST /auth/signup
- **Description:** Creates a new user account.
- **Request Body:** 
  - email: String (required)
  - password: String (required)

### 2. Sign in

- **Route:** POST /auth/signin
- **Description:** Logs in an existing user.
- **Request Body:** 
  - email: String (required)
  - password: String (required)

### 3. Get a specific user

- **Route:** GET /customers/:id
- **Description:** Retrieves details of a specific user.
- **Parameters:** 
  - id: User ID (required)

### 4. Get all users

- **Route:** GET /customers
- **Description:** Retrieves details of all users.

### 5. Update user (owner only)

- **Route:** PUT /customers/:id
- **Description:** Updates details of a specific user (owner only).
- **Parameters:** 
  - id: User ID (required)
- **Request Body:** 
  - email: String
  - password: String

### 6. Delete user (owner only)

- **Route:** DELETE /customers/:id
- **Description:** Deletes a specific user (owner only).
- **Parameters:** 
  - id: User ID (required)

## Car APIs

### 1. Add car

- **Route:** POST /cars
- **Description:** Adds a new car to the system.
- **Request Body:** 
  - Make sure to provide all required fields for a car object.

### 2. Get a specific car

- **Route:** GET /cars/:id
- **Description:** Retrieves details of a specific car.
- **Parameters:** 
  - id: Car ID (required)

### 3. Get all cars

- **Route:** GET /cars
- **Description:** Retrieves details of all cars.

### 4. Update a car

- **Route:** PUT /cars/:id
- **Description:** Updates details of a specific car.
- **Parameters:** 
  - id: Car ID (required)
- **Request Body:** 
  - Make sure to provide all fields that need to be updated.

### 5. Delete a car

- **Route:** DELETE /cars/:id
- **Description:** Deletes a specific car.
- **Parameters:** 
  - id: Car ID (required)

## Rental APIs

### 1. Create Rental

- **Route:** POST /rentals
- **Description:** Creates a new rental record.
- **Request Body:** 
  - Make sure to provide all required fields for a rental object.

### 2. Update Rental

- **Route:** PUT /rentals/:id
- **Description:** Updates details of a specific rental.
- **Parameters:** 
  - id: Rental ID (required)
- **Request Body:** 
  - Make sure to provide all fields that need to be updated.

### 3. Delete Rental

- **Route:** DELETE /rentals/:id
- **Description:** Deletes a specific rental.
- **Parameters:** 
  - id: Rental ID (required)

### 4. Get all Rentals

- **Route:** GET /rentals
- **Description:** Retrieves details of all rentals.
- **Description:** Rental comes with the data of the customer who rented the car "$lookup".

### 5. Get a specific Rental

- **Route:** GET /rentals/:id
- **Description:** Retrieves details of a specific rental.
- **Description:** Rental comes with the data of the customer who rented the car "$lookup".
- **Parameters:** 
  - id: Rental ID (required)

## Special APIs

### 1. Get all cars whose model is 'Any' and 'Any'

- **Route:** GET /available/model/:model
- **Description:** Retrieves details of all cars with models 'Any' and 'Any'.
- **Query Parameters:** 
  - model: String (required, comma-separated list of models)

### 2. Get Available Cars of a Specific Model

- **Route:** GET /available/:model
- **Description:** Retrieves details of available cars of a specific model.
- **Parameters:** 
  - model: String (required)

### 3. Get Cars that are Either rented or of a Specific Model

- **Route:** GET /model/:model
- **Description:** Retrieves details of cars that are either rented or of a specific model.
- **Parameters:** 
  - model: String (required)

### 4. Get Available Cars of Specific Models or Rented Cars of a Specific Model

- **Route:** GET /query
- **Description:** Retrieves details of available cars of specific models or rented cars of a specific model.
- **Query Parameters:** 
  - availableModels: String (optional, comma-separated list of models)
  - rentedModel: String (optional, model name)
