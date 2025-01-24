```javascript
const query = { name: /John/i };

// This query will cause an error if the `name` field is not a string
db.collection('users').findOne(query, (err, doc) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Document:', doc);
  }
});
```