# alt-student-profile
AltCampus student profile

# API
### Register api/users/register

```json
{
    "success": true,
    "user": {
        "socialLinks": {
            "github": "http://www.github.com",
            "twitter": "http://www.twitter.com",
            "linkedin": "http://www.linkedin.com",
            "codeWars": "http://www.codeWars.com"
        },
        "projects": [],
        "education": [],
        "isApproved": false,
        "isEmployed": false,
        "isAdmin": false,
        "_id": "5e47edfec0fc268bb7029636",
        "name": "Bhavishya",
        "email": "bhavishya@test.com",
        "password": "$2a$10$Tl6/vs5XJbovhiNNXR/U9uLwrH06Y6E/KsPjzMusrfFDOhKw2TFR6",
        "pastExperience": [],
        "createdAt": "2020-02-15T13:11:26.150Z",
        "updatedAt": "2020-02-15T13:11:26.150Z",
        "__v": 0
    }
}
```
### Login api/users/login

```json
{
    "success": "true",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1ZTQ3ZWRmZWMwZmMyNjhiYjcwMjk2MzYiLCJlbWFpbCI6ImJoYXZpc2h5YUB0ZXN0LmNvbSIsImlhdCI6MTU4MTc3MjU3MX0.GsgDyMmvkrmjKmJfn93RXFf9TCEkK0y-7erAtmdHZOA"
}
```
### List All Users api/users
```json
{
    "success": true,
    "user": [
        {
            "socialLinks": {
                "github": "http://www.github.com",
                "twitter": "http://www.twitter.com",
                "linkedin": "http://www.linkedin.com",
                "codeWars": "http://www.codeWars.com"
            },
            "projects": [],
            "education": [],
            "isApproved": false,
            "isEmployed": false,
            "isAdmin": true,
            "_id": "5e47e4d1676f3481957a22be",
            "name": "Admin",
            "email": "admin@test.com",
            "password": "$2a$10$l9d5fcmnCuFkjYo1El.IfORiLcnvhjvUFssagJnn1qkpt0DCyNDzu",
            "pastExperience": [],
            "createdAt": "2020-02-15T12:32:17.993Z",
            "updatedAt": "2020-02-15T12:32:17.993Z",
            "__v": 0
        },
        {
            "socialLinks": {
                "github": "http://www.github.com",
                "twitter": "http://www.twitter.com",
                "linkedin": "http://www.linkedin.com",
                "codeWars": "http://www.codeWars.com"
            },
            "projects": [],
            "education": [],
            "isApproved": false,
            "isEmployed": false,
            "isAdmin": false,
            "_id": "5e47edfec0fc268bb7029636",
            "name": "Bhavishya",
            "email": "bhavishya@test.com",
            "password": "$2a$10$Tl6/vs5XJbovhiNNXR/U9uLwrH06Y6E/KsPjzMusrfFDOhKw2TFR6",
            "pastExperience": [],
            "createdAt": "2020-02-15T13:11:26.150Z",
            "updatedAt": "2020-02-15T13:11:26.150Z",
            "__v": 0
        }
    ]
}
```
 ### Update User api/users/update
    
```json
{
    "success": true,
    "updateduser": {
        "socialLinks": {
            "github": "http://www.github.com",
            "twitter": "http://www.twitter.com",
            "linkedin": "http://www.linkedin.com",
            "codeWars": "http://www.codeWars.com"
        },
        "projects": [],
        "education": [],
        "isApproved": false,
        "isEmployed": false,
        "isAdmin": false,
        "_id": "5e47edfec0fc268bb7029636",
        "name": "Bhavishya",
        "email": "bhavishya@test.com",
        "password": "$2a$10$M6MILJI0KEz9n5zPeNct1ekQ0/u80FbymHFXno8cAHPa95qLTXNve",
        "pastExperience": [],
        "createdAt": "2020-02-15T13:11:26.150Z",
        "updatedAt": "2020-02-15T13:34:15.722Z",
        "__v": 0
    }
}
```

 ### Delete User api/users/delete
    
```json
{
    "success": true,
    "msg": "user deleted"
}
```

 ### Admin Details api/admin
    
```json
{
    "success": true,
    "admin": [
        {
            "socialLinks": {
                "github": "http://www.github.com",
                "twitter": "http://www.twitter.com",
                "linkedin": "http://www.linkedin.com",
                "codeWars": "http://www.codeWars.com"
            },
            "projects": [],
            "education": [],
            "isApproved": false,
            "isEmployed": false,
            "isAdmin": true,
            "_id": "5e47e4d1676f3481957a22be",
            "name": "Admin",
            "email": "admin@test.com",
            "password": "$2a$10$l9d5fcmnCuFkjYo1El.IfORiLcnvhjvUFssagJnn1qkpt0DCyNDzu",
            "pastExperience": [],
            "createdAt": "2020-02-15T12:32:17.993Z",
            "updatedAt": "2020-02-15T12:32:17.993Z",
            "__v": 0
        }
    ]
}
```
    
  
