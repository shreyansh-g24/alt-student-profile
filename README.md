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

### Article Create api/articles/create

```json
{
  "success": true,
  "author": {
    "_id": "5e47d6c5b187411766430947",
    "About": "Difference between Node and React",
    "description": "test",
    "link": "tst",
    "author": {
      "socialLinks": {
        "github": "http://www.github.com",
        "twitter": "http://www.twitter.com",
        "linkedin": "http://www.linkedin.com",
        "codeWars": "http://www.codeWars.com"
      },
      "projects": [],
      "articles": [
        "5e47cff95dc6f31191f881fa",
        "5e47d19cb0aeb112277880e3",
        "5e47d1bb03c923124744d4e8",
        "5e47d2425305c5128f7e8ad7",
        "5e47d29bbf1f1812b908fd6c",
        "5e47d30082428912e5266b9c",
        "5e47d34582428912e5266b9d",
        "5e47d3ac46c6af13441d5151",
        "5e47d447c9100d1385379fde",
        "5e47d61b66bdae140a22dee5",
        "5e47d66bcd7d3516ea0b122d",
        "5e47d6c5b187411766430947"
      ],
      "education": [],
      "isApproved": false,
      "isEmployed": false,
      "_id": "5e47cb1ef4e0443d8252e124",
      "name": "bimlendu",
      "email": "bim240@gmail.com",
      "password": "$2a$10$vAXgqblmK.F4a7P.vmb36.F0aH6ZDiw/b0CuizeuLuI6BRGT2fCPa",
      "pastExperience": [],
      "createdAt": "2020-02-15T10:42:38.344Z",
      "updatedAt": "2020-02-15T11:32:21.720Z",
      "__v": 0
    },
    "createdAt": "2020-02-15T11:32:21.692Z",
    "updatedAt": "2020-02-15T11:32:21.692Z",
    "__v": 0
  }
}
```

### Article List all api/articles

```json
{
  "success": true,
  "articles": [
    {
      "_id": "5e47d19cb0aeb112277880e3",
      "About": "Difference between Node and React",
      "description": "test",
      "link": "tst",
      "createdAt": "2020-02-15T11:10:20.256Z",
      "updatedAt": "2020-02-15T11:10:20.286Z",
      "__v": 0,
      "author": "5e47cb1ef4e0443d8252e124"
    },
    {
      "_id": "5e47d447c9100d1385379fde",
      "About": "Difference between Node and React",
      "description": "test",
      "link": "tst",
      "author": "5e47cb1ef4e0443d8252e124",
      "createdAt": "2020-02-15T11:21:43.878Z",
      "updatedAt": "2020-02-15T11:21:43.878Z",
      "__v": 0
    },
    {
      "_id": "5e47d61b66bdae140a22dee5",
      "About": "Difference between Node and React",
      "description": "test",
      "content": "tst",
      "author": "5e47cb1ef4e0443d8252e124",
      "createdAt": "2020-02-15T11:29:31.949Z",
      "updatedAt": "2020-02-15T11:29:31.949Z",
      "__v": 0
    },
    {
      "_id": "5e47d66bcd7d3516ea0b122d",
      "About": "Difference between Node and React",
      "description": "test",
      "content": "tst",
      "author": "5e47cb1ef4e0443d8252e124",
      "createdAt": "2020-02-15T11:30:51.665Z",
      "updatedAt": "2020-02-15T11:30:51.665Z",
      "__v": 0
    },
    {
      "_id": "5e47d6c5b187411766430947",
      "About": "Difference between Node and React",
      "description": "test",
      "content": "tst",
      "author": "5e47cb1ef4e0443d8252e124",
      "createdAt": "2020-02-15T11:32:21.692Z",
      "updatedAt": "2020-02-15T11:32:21.692Z",
      "__v": 0
    }
  ]
}
```

### Article List all api/articles/update/id

```json
{
  "success": true,
  "updatedArticle": {
    "_id": "5e47d19cb0aeb112277880e3",
    "About": "Difference between Node and React",
    "description": "test",
    "link": "updated value",
    "createdAt": "2020-02-15T11:10:20.256Z",
    "updatedAt": "2020-02-15T13:56:51.931Z",
    "__v": 0,
    "author": "5e47cb1ef4e0443d8252e124"
  }
}
```

### Article List all api/articles/delete/id

```json
{
  "success": true,
  "msg": "article deleted"
}
```
