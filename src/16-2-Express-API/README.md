# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* npm install
* npm run start | npm run dev
* npm runt test


# If I had more time what was important for me :
* Review for Clean code
* Add more tests for all parts  / repository / controller and ..
* Adding dockerfile to easy deploy
* implementing DDD
* A little more work on input validation to response for BAD currency inputs


## Queries : /exchange GET
* Request : http://localhost:3000/exchange?value=10&currency=USD&targetCurrency=EUR
* Response : {
  "result": {
    "value": "8.99",
    "currency": "EUR"
  }
}

* 

* Request : /POST sum 
{
 "values": [
   {
     "value": 100,
     "currency": "USD"
   },
   {
     "value": 1000,
     "currency": "SEK"
   }
 ],
 "targetCurrency": "EUR"
}
* Response : 
{
  "result": {
    "value": "176.33",
    "currency": "EUR"
  }
}

* Request /exchange POST
{
 "values": "100 SEK; 99 SEK; 2000 SEK; 100 USD; 100 EUR",
 "targetCurrency": "EUR"
}

* Response : 
{
  "result": "8.65 EUR;8.56 EUR;172.90 EUR;89.88 EUR;100.00 EUR"
}