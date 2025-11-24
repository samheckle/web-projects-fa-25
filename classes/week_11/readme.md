## Agenda

1. Housekeeping
2. Reading Discussion
3. Continue Databases

## Housekeeping

1. attendance
2. assignments coming up
3. book 1:1 next week

## Reading Discussion

## Continue Databases

Duplicate your class_10 folder and we will start building from there! It is usually easier to *not* copy the `node_modules/` folder, but whatever works for you. You can also [download the week_11 folder]() using the [github folder downloader](https://download-directory.github.io/) if that is easier. 

Then, because I didn't copy the `node_modules/` folder, I need to run `npm install`. 

### nedb documentation

Specific docs from the [nedb documentation](https://github.com/louischatriot/nedb?tab=readme-ov-file#the-javascript-database), although technically we are using the [seald version](https://github.com/seald/nedb?tab=readme-ov-file#the-javascript-database) since that one is regularly maintained. 

Things we looked at last time:
* [database.insert()](https://github.com/louischatriot/nedb?tab=readme-ov-file#inserting-documents)

Things we will look at today:
* [database.findOne()](https://github.com/louischatriot/nedb?tab=readme-ov-file#finding-documents)
* [database.update()](https://github.com/louischatriot/nedb?tab=readme-ov-file#updating-documents)
* [database.remove()](https://github.com/louischatriot/nedb?tab=readme-ov-file#removing-documents)

One thing to note about nedb is that technically everything is appended to the file, so any changes that we make to existing documents (or data that has an id), it will be appended until the database is reloaded again (ie the server restarts).