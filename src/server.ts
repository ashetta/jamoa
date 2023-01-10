import a from "./app"

const { app, PORT } = a

app.listen(PORT, () => console.log('Server 🚀 in: ' + PORT))