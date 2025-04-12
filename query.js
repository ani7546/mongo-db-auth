use("github_test"); 
db.test_collection.insertOne({"name": "Test Document for github_test", "date": new Date()});
print("Inserted document into test_collection");
