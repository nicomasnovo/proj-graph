# Express server with both API and Graphql for educational purposes only
#Quick example done during a workshop taught by Nico Masnovo

### 1) This project uses docker compose linked to your local files so you must first install all project dependencies:

On both folders Client and Server as they are frontend and backend respectibly.

```
make install
```

## This project uses makefiles to make it easier to run

### 2) First generate App image:

```
make build
```

### 3) Use the makefile to start the docker compose project, dowload Mongo image and run containers:

```
make run
```

Backend server: http://localhost:4000
Frontend: http://localhost:4200
