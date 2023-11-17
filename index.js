const http = require('express')

const app = http()

app.set('trust proxy', true)

app.use((req, res) => {
    console.log(req.header('x-forwarded-for'))
    res.json({ message: 'hacked' })
})

app.listen(3000, () => {
    console.log('Get IP Active')
})