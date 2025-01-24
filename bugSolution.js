```javascript
const query = { name: /John/i };

// Use $type operator to check for string type and handle accordingly
db.collection('users').findOne(query, { projection: { name: 1 } }, (err, doc) => {
  if (err) {
    console.error('Error:', err);
  } else if (doc && typeof doc.name === 'string') {
    console.log('Document:', doc);
  } else {
    console.log('Document not found or name is not a string.');
  }
});
```