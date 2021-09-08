# Rest-Api-Template
 
## Setup Dev Environment 
```bash
git clone https://github.com/santiagz/Rest-Api-Template.git
cd Rest-Api-Template/
```

next step, create `.env` file with this variables:

```env
SERVER_PORT = 5000
BD_URL = "MongoLink"  
ROOT_TOKEN = "1234567890abcdefg" //this for exapmle, check index.js
```

```bash
npm install
npm start
```

## For Prod
Change in `package.json` into `scripts` value `start` like this example:
```json
  "scripts": {
    "start": "node index.js",
  }
```

And:

```
npm start
```

