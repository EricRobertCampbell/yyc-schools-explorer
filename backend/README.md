# Alberta Schools Explorer - Backend

"Backend" is maybe a little grandiose - this is the part of the project where the data, &c. should be stored, created, manipulated, &c. Once it has been suitably massaged, it should go into the "/public/data" folder in the frontend, where it can be loaded into the frontend application.

In the future, this may become an actual backend - for now this is probably OK.

## Instructions

### Working in Python

-   Create a virtual environment: `python -m venv venv`
    -   Note that this is in the `.gitignore`
-   To leave: `deactivate`
-   Install any necessary requirements: `pip install -r requirements.txt`
-   If you need to include any packages, install them and add them to the `requirements.txt` file:

```bash
pip install some_package
pip freeze > requirements.txt
```
