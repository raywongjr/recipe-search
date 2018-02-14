# Recipe Search

## Goal
Playground for new front end technologies creating a web-based food recipe
search tool. Features TBD. Research topics and links below.

## Research
* https://github.com/toddmotto/public-apis
* http://food2fork.com/about/api
* Top food-related searches (trending)
* Top rated recipes
* Ability to save/star/favorite recipes - which means ability to create login
* MongoDB?
* Google search api

## Getting Started
* Install [Node and NPM](https://nodejs.org/en/).
* In your terminal, run `npm install` followed by `npm run dev`.
* Navigate to **localhost:8081** (if using default port).

## Food2Fork API
**Documentation:** http://food2fork.com/about/api

```
API Key: d9263f916dac481e8f7e504e322bce38
user: rayman.wong@gmail.com
pw: (qwerMNBV)
```

**Sample Request URL**\
`http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken`

**Sample Response**
```json
{
    "count": 1, 
    "recipes": [
        {
            "publisher": "Allrecipes.com",
            "social_rank": 99.81007979198002, 
            "f2f_url": "http://food2fork.com/F2F/recipes/view/29159", 
            "publisher_url": "http://allrecipes.com", 
            "title": "Slow-Cooker Chicken Tortilla Soup", 
            "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
            "page": 1
        }
    ]
}
```
