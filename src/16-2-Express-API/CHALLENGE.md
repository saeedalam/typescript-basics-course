# Exchange API #

Create a node.js API that communicates with https://www.exchangerate-api.com/ to fetch the latest exchange rates and responds to requests on the following endpoints:

### GET /exchange ###

This route receives the following query params:

* “value” (integer): The value to be exchanged
* “currency” (string): The current currency
* “targetCurrency” (string): The currency in which we want the result

The response will be an object with either the property “result” or the property “error”.
“result” should be an object with “value”, the exchanged value, and “currency” as the “targetCurrency”.

Example request:
*GET /exchange?value=100&currency=SEK&targetCurrency=EUR*

Example response:
```
{
 "result": {
   "value": "9.96",
   "currency": "EUR"
 }
}
```

### POST /exchange ###

This route receives a body with the following properties:

* "values” (string): A list of prices and their respective currencies to be exchanged, separated by semicolons
* “targetCurrency” (string): The currency in which we want the result

The response will have the property “result” with the resulting string, a list of prices in the target currency separated by semicolons, or the property “error” if an error occurred.

Example body:
```
{
 "values": "100 SEK; 99 SEK; 2000 SEK; 100 USD",
 "targetCurrency": "EUR"
}
```

Example response:
```
{
 "result": "9,96 EUR; 9,86 EUR; 199,15 EUR, 85,72 EUR"
}
```
Note: In a real life application this would not be a good input/response format, we chose this just for the purpose of this exercise.

### POST /sum ###

This route receives a body with the following properties:

* "values” (array): An array of objects with the properties ‘“value” (integer) and its respective “currency” (string) to be summed.
* “targetCurrency” (string): The currency in which we want the result of the sum


The response will have the property “result” which is the result of summing all values from the request body in the target currency, an object composed by the “value” and “currency”, or the property “error” if an error occurred.

Example body:
```
{
 "values": [
   {
     "value": 100,
     "currency": "EUR"
   },
   {
     "value": 1000,
     "currency": "SEK"
   }
 ],
 "targetCurrency": "USD"
}
```

Example response:
```
{
 "result": {
   "value": "232.15",
   "currency": "USD"
 }
}
```

## Completing the challenge ##

Don’t forget to to write tests for your project and write instructions on how to run it in the “read me” file.

You should fork this project and create a pull request when you're finished.
