# backend-user-management
A robust backend system built with Express, MongoDB, and Mongoose for seamless user registration and login functionalities. Features secure password handling and provides a clear API for developers. Simplify user management with this efficient and scalable solution.

# Backend Project - User Management

Welcome to our backend project for user management. This project utilizes Express, MongoDB, and Mongoose to handle user registration and login.

## Introduction

This backend project serves as the engine for our user management system. It provides APIs for user registration and login, interacting with a MongoDB database.

## Features

- User Registration
- User Login
- Secure Password Handling

## Installation

1. Clone the repository:

   git clone https://github.com/DEVASHISH-PRASAD/backend-user-management.git

# Usage

-start the server

-- npm start

## API Documentation

## 1.User Registration

Endpoint: POST /register

Payload:{
"username": "string",
"password": "string",
"email": "string"
}
Response:{
"success": true,
"message": "User registered successfully..."
}

## 2.User Login

Endpoint: POST /login

Request Payload:{
"username": "string",
"password": "string"
}
Response:{
"success": true,
"message": "User Login Successfully"
}

## Error Handling

Status Code 400: Bad Request
{
"success": false,
"message": "Invalid request payload"
}
Status Code 401: Unauthorized
{
"success": false,
"message": "Invalid credentials"
}
Status Code 500: Internal Server Error
{
"success": false,
"message": "Internal server error"
}

