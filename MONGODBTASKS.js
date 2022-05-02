
//Creating Databse
use exampledatabase

// creating non caped collection (Table)
db.createCollection("ExampleCollection")

//Show the Current Databse
db

//Insert the Data in the ExampleCollection
db.examplecollection.insert
(
{EmpID : "E001", Name: "Amit Kumar", Age : 30, Salary : 50000, Designation : "Developer", Email : "Amit.kumar@gmail.com", Location:"Mumbai", Phone: 53454455})

// insert multiple documents (record) inside the ExampleCollection as an array

db.examplecollection.insert
([

{EmpID : "E002", Name: "Neha", Age : 34, Salary : 30000, Designation : "Designer", Email : "neha@gmail.com", Location:"Mumbai", Phone: 54355533},
{EmpID : "E003", Name: "Raj Kishore", Age : 35, Salary : 90000, Designation : "DevOps Engineer", Email : "Raj@gmail.com", Location:"Pune", Phone: 645656},
{EmpID : "E004", Name: "Rupal", Age : 25, Salary : 40000, Designation : "Developer", Email : "rupal@gmail.com", Location:"Bangalore", Phone: 53454455},
{EmpID : "E005", Name: "Pankaj Singh", Age : 25, Salary : 45000, Designation : "Manager", Email : "panjkaj@gmail.com", Location:"Bangalore", Phone: 444455}

])


// Showing the insertefd data inside the ExmpleCollection

db.examplecollection.find()

// Showing the documents as Pretty Format 

db.examplecollection.find().pretty() 

// show all databases inside the Mongodb

show dbs

// Show all the Collections inside the current database
show collections


// Show the record (documents) where name="Amit Kumar" Note : NoSQL (MongoDb) is case sensitive

db.examplecollection.find({Name:"Amit Kumar"})

// Show all records where location is Mumbai

db.examplecollection.find( {Location : "Mumbai"})
 
 // Display people from the collection examplecollection whose age is less than 40
 
 db.examplecollection.find( {Age: {$lt: 40} })
  
  
//Display the document where salary<40000 & Designation is Developer
     
 db.examplecollection.find( { Designation: "Developer", Salary: { $lt: 45000 } } ) 
    

//Display the document where salary between 20000 and 50000 and and location is Mumbai
     
db.examplecollection.find( {Salary: { $gt : 20000, $lt:50000 }, Location:"Mumbai" } ) 

//task 3 
// selects all documents from the examplecollection where the age is greater then 30

db.examplecollection.find( {Age: { $gt : 30}})


//selects all documents from the examplecollection where Location equals either "Mumbai" or "Pune"
 //    ( Do this task without using "in")
 
  db.examplecollection.find( { $or: [ { Location:"Mumbai"}, { Location: "Pune" } ] } )
      
 
 //selects all documents from the examplecollection where Location equals either "Mumbai" or "Pune" (Do this task using "in")
 
 db.examplecollection.find( { Location: { $in: [ "Mumbai", "Pune" ] } } ) 
 
 
//selects all documents from the examplecollection where Location  not equal either "Mumbai" or "Pune"    (Do this task using "in")

db.examplecollection.find( { Location: { $nin: [ "Mumbai", "Pune" ] } } ) 


// . select all documents from the examplecollection where the location  equals "Bangalore" and age is less than 50

 db.examplecollection.find( { Location: "Bangalore", Age: { $lt: 50 } } ) 


//selects all documents in the examplecollection where the Designation equals "Developer" and either salary is less than 40000 or name starts with the character p

 db.examplecollection.find( { Name: /^P/ } )






