const express = require('express')
const router = express()


router.use("/", require("./DocsRoutes"))

module.exports = router