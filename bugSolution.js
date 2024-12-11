```javascript
const pipeline = [
  { 
    $match: { tags: { $size: { $gt: 5 } } }
  }
];
const result = await collection.aggregate(pipeline).toArray();
```