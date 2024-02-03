** env_guide **

PORT=

JWT_KEY=

---------

** api_service **

method        path              authen     params      body 

POST          /auth/register       0        none        {username, password, confirmPassword, email}
POST          /auth/login          0        none        {username, password}
GET           /auth/me             1        none        none
GET           /todos               1        none        none




---------

Notes

MVC (Models, route+Controller, View)

