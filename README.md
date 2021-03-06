# Blog-site (Work In Progress)
A blogging site developed with nextjs using server side rendering. Markdown is supported.
![text area](https://user-images.githubusercontent.com/81270095/122251053-2c637b00-ce98-11eb-8733-af2dea131a9d.png)

![blogsitefixed](https://user-images.githubusercontent.com/81270095/121460732-75d53700-c97b-11eb-9d25-da0a65fbd6de.png)

## Features

- SEO ready
- Responsive 
- UI Components
- User Authentication
- Reccomendations
- Markdown support and create posts with text editor
- Skeleton loading

## Quick Start

1. Clone this repo into new project folder
```
git clone https://github.com/nickm980/blog-site.git
```

2. Install the dependencies using either 
 
``` 
npm install 
``` 

Or if you are using yarn

``` 
yarn install 
```

3. Generate the prisma database
```
prisma generate
```

4. Run the project (by default, the project runs on https://localhost:3000/)

```
npm run dev
```

## NPM Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Hosts the development site |
| `npm run start` | Starts the site for production |
| `npm run build` | Builds the site |
| `npm run prisma` | Opens the prisma manager |
| `npm run pdev` | Opens the prisma manager and the development site |


## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/nickm980/blog-site/blob/main/LICENSE) file for details
