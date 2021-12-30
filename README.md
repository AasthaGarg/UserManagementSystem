## Technology Stack Used
1. Front-End - Angular   (IDE- Visual Studio Code)
2. Back-End - Java based(SpringBoot)  (IDE- STS)
3. Database - MySQL
4. Testing API Layer - Postman

## This project uses following versions 
1. spring-tool-suite 4-4.13.0.RELEASE 
2. Angular CLI: 12.0.5
3. Node: 14.17.1
4. Package Manager: npm 6.14.13

## Setting the database
1. Open the MySQL command line
2. Enter query - create database userdetails (application database)

## Running the code in local
1. Download zip file of the code from the following path -- https://github.com/AasthaGarg/UserManagementSystem
2. Extract the file in local directory

### For running Backend code
1. Open the STS IDE
2. Go to File -> Open Project From File System -> Import source (Choose the path where Back-end folder is extracted)->Finish
3. Go to "src/main/java" folder, inside the package "com.data.users" and Run the .java file i.e "UserApplication.java" (Choose Run As->Java Application)
4. Go to browser and hit "http://localhost:8080/getUser" to check the backend application is running or not
5. API layer can be tested through Postman 

### For running Frontend code
1. Open the VS Code IDE
2. Go to File -> Open Folder -> (Choose the path where Front-end folder is extracted)
3. Go to Terminal->New Terminal -> type "ng serve" to run the code
4. Go to browser and hit "http://localhost:4200" to check the application is running or not.
5. Ensure backend is also running to perform CRUD operations.

## To check CRUD operation result in database
1. Open the MySQL command lineand run the below queries
2. use userdetails;
3. show tables;
4. select * from user;



 


