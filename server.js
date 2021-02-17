// require is like 'import' in python
const express = require('express');
const app = express();
// whatever port available in the environment or 3000
const PORT = process.env.PORT || 5000;

// each GET request is specified with a route and a handler
// (arg1, ...) => return is like python's lambda functions
app.get('/', (req, res) => res.send(`API Running`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
