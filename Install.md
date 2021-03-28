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

XML:
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="VcsDirectoryMappings">
    <mapping directory="$PROJECT_DIR$" vcs="Git" />
    <mapping directory="$PROJECT_DIR$/client" vcs="Git" />
    <mapping directory="$PROJECT_DIR$/server" vcs="Git" />
  </component>
</project>