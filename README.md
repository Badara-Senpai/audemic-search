
<h2>Audemic Search </h2>
An application that helps users find the most relevant prompts based on entered
words. Prompts are from this dataset from [Hugging Face](https://huggingface.co/datasets/Gustavosta/Stable-Diffusion-Prompts)

<h3>DEPENDENCIES</h3>

| Dependencies  | Version |
|---------------|:-----:|
| Ruby          |  3.1.0 |
| Rails         |  7.1.3 |
| Postgres      |  14.2 |
| Elasticsearch | 8.10.2 |
| Searchkick    | 5.3.1 |


<h3>INSTALLATION</h3>
For an initial installation, execute these steps below:

1 - Clone the repository
```go
git@github.com:Badara-Senpai/audemic-search.git && cd audemic-search
```

2 - Set Up Environment Variables:

- Copy the .env.sample file to a new .env file.

- Fill in the necessary environment variables in .env. (username & password)
```
cp .env.example .env && nano .env
```

Ensure that the .env file is populated with the required environment variables.

3 - To start all services, make sure you have Docker installed and run:
```
docker-compose build
docker-compose up -d
```

4 - Once all services up and running, populate the database with seed
```
docker-compose exec app rails db:seed
```

5 - Finally, access the web app at http://localhost:3000.

![Description of image](app/assets/images/audemic-search.png)
