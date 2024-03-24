### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for a JSON WEB Token

- What is the signature portion of the JWT?  What does it do?
- The signature part is the secret that you specify. This will make sure the request are comming from your application
- 
 
- If a JWT is intercepted, can the attacker see what's inside the payload?
- Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- Can install JWT encode a token and add variables to the payload. Than define a secret and use that as the signature.

- Compare and contrast unit, integration and end-to-end tests.
- Unit testing test single functions. Integration testing depends on external dependencies. End to end testing test the whole application

- What is a mock? What are some things you would mock?
- Data used to simulate maybe a client or database. Things you would mock are Math functions, async request.

- What is continuous integration?
  Continous integration is when test are contiousously added when there are changes

- What is an environment variable and what are they used for?
  Environment varibles are variables that can be used globally. Environmental variables can be used to get SECRET KEYS stored else where or API keys

- What is TDD? What are some benefits and drawbacks?
TDD stands for test driven development. Benefit is each function will get tested and made sure it works. Drawback is it takes alot more time to complete the app
- What is the value of using JSONSchema for validation?
  It makes it easier to validate forms

- What are some ways to decide which code to test?
  Does this require authentication, are there ways to break the function, or is the function causing errors

- What does `RETURNING` do in SQL? When would you use it?
- RETURNING gives back requested fields from a SQL command. This would be used when you needed data back from a SQL command that would not normally provide back data.

- What are some differences between Web Sockets and HTTP?
- Web Sockets are faster
- HTTP initiates a fresh connection each time
- HTTP follows a request-response pattern
- WEB Sockets maintain a constant open connection

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I liked flask because it felt like less steps and libraries to run than express.
