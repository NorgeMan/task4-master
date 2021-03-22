Install
npm i

Local start:

1. Server
   cd server
   npm run dev
2. Client
cd client
   npm run build
   after that serve -s build

Heroku start:
client:
heroku open

Add changes:
git add .
git commit -m "Enter the comment"
heroku git:remote -a murmuring-lake-30163
git push heroku master
