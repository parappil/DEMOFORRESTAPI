const express = require('express');
const joi = require('joi');
const app = express();
app.use(express.json());

//Give data to the server

const customers = [
    {title: 'George', id:1},
    {title: 'Josh', id:2},
    {title: 'Tyler', id:3},
    {title: 'Alice', id:4},
    {title: 'Candice', id:5},
    {title: 'Raj', id:6}
   
   ]
   
   //Read request Handler
   // Display the message when the URL consist of '/'
   
   app.get('/',(req,res) => {
       res.send('Welcome to Rajesh and Kichus Rest API');
   });
   
   //Get all the customers
   app.get('/api/customers',(req,res) => {
       res.send(customers);
   });
   
   app.get('/api/customer/:id',(req,res) => {
       const customer = customers.find(c => c.id === parseInt(req.params.id));
       //if there is no valid customer ID , then display an error with the following format
   
       if(!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color:darkred;">oops cant find what you are looking for!</h2>');
       res.send(customer);
   });
   
   //validate Information
   function validateCustomer(customer){
   const schema={
       title: joi.string().min(3).required()   
   };
   return joi.validate(customer,schema);
   
   }




const port = process.env.port || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));