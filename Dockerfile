FROM node:alpine

WORKDIR /github.com/go-jedi/burger-club/frontend/

COPY . /github.com/go-jedi/burger-club/frontend/

RUN npm install
RUN npm run dev

EXPOSE 5173

CMD ["npm", "run", "dev"]