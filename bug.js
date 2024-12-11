```javascript
const query = { "$expr": { "$gt": [ { "$size": "$tags" }, 5 ] } };
const result = await collection.find(query).toArray();
```