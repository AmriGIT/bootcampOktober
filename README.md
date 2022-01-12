#DOKUMENTASI SERVER

- URL:
    - http_method: GET
    - `http://movie-app-g2.herokuapp.com/movies`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "title": "...",
        "year": "...",
        "desc": "...",
        "poster": "...",
        "casts": ["..."],
        "quota": "..."
      }
    ```

- URL:
    - http_method: POST
    - `http://movie-app-g2.herokuapp.com/movies`
    - body: 
    ```json
        {
            "title": "...",
            "year": "...",
            "desc": "...",
            "poster": "...",
            "casts": ["..."],
            "quota": "..."
        }
    ```
  - Expected response (status: `200`):
    ```json
      { "message": "success to delete"}
    ``` 

- URL:
    - http_method: REMOVE
    - `http://movie-app-g2.herokuapp.com/movies/:id`
  - Expected response (status: `200`):
    ```json
      { "message": "success to delete"}
    ``` 

- URL:
    - http_method: PUT
    - `http://movie-app-g2.herokuapp.com/movies/:id`
    - body: (depends to what field that you want to change)
    ```json
        {
            "title": "...",
            "year": "...",
            "desc": "...",
            "poster": "...",
            "casts": ["..."],
            "quota": "..."
        }
    ```
  - Expected response (status: `200`):
    ```json
      { "message": "success to delete"}
    ``` 

