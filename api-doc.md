# API Documentation

## Endpoints:

- `POST/user/register`
- `POST/user/login`
- `GET/user/fetch`
- `PUT/user/:id`
- `DELETE/user/:id`

1. - `POST/user/register`
     key:
     username
     email
     password
     role
     phoneNumber
     address

response:
{
"id": 5,
"email": "satrioo@mail.com",
"username": "satrioo"
}

2. - `POST/user/login`
     key:
     username
     password

response:
{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzYXRyaW8iLCJpYXQiOjE2NTY5ODYyNDV9.uNlG63hpyatOLpFTdoemm8cNo86yyjP4xXmqw1JePAc",
"userRole": "Admin",
"userUsername": "satrio"
}

3. `GET/user/fetch`

response:
"result": [
{
"id": 1,
"username": "satrio",
"email": "satrio@mail.com",
"password": "$2b$08$xwrun7GdYvwac.YF/2SyYeCEKuTqvIR2p2YwBPVLZGspzIcJ3qeSy",
"role": "Admin",
"phoneNumber": "12345",
"address": "Tangerang",
"createdAt": "2022-07-03T02:42:39.232Z",
"updatedAt": "2022-07-03T02:42:39.232Z"
},
{
"id": 2,
"username": "priambodo",
"email": "priambodo@mail.com",
"password": "$2b$08$AQRH9woyv6e96DPeIxZlKuq0iXmD9FhHAwaj5mdAejbvFh9LYM6oW",
"role": "User",
"phoneNumber": "12345",
"address": "Tangerang",
"createdAt": "2022-07-03T02:49:49.948Z",
"updatedAt": "2022-07-03T02:49:49.948Z"
},
{
"id": 3,
"username": "usernameupdate",
"email": "emailupdate@mail.com",
"password": "usernameupdate1234",
"role": "User",
"phoneNumber": "321",
"address": "Cirebon",
"createdAt": "2022-07-03T03:04:49.607Z",
"updatedAt": "2022-07-03T06:27:55.934Z"
},
{
"id": 5,
"username": "satrioo",
"email": "satrioo@mail.com",
"password": "$2b$08$uUqnXo3y59NNl7Nc9G97ye1/epOqz0xm46xHRvQvtd5HeAe0Mm3.u",
"role": "Admin",
"phoneNumber": "12345",
"address": "Tangerang",
"createdAt": "2022-07-05T01:55:56.333Z",
"updatedAt": "2022-07-05T01:55:56.333Z"
}
]
}

4. `PUT/user/:id`
   key
   username:
   email:
   password:
   role:
   phoneNumber:
   address:

response:
{
"result": {
"id": 3,
"username": "usernameupdatee",
"email": "emailupdatee@mail.com",
"password": "usernameupdatee1234",
"role": "User",
"phoneNumber": "3211",
"address": "Cirebonn",
"createdAt": "2022-07-03T03:04:49.607Z",
"updatedAt": "2022-07-05T02:01:08.139Z"
}
}

5. - `DELETE/user/:id`
     response: 1
