import * as dotenv from 'dotenv'
import app from './app'

dotenv.config()

app.listen(process.env.PORT || 3334, () => console.log(`Server listen on ${process.env.PORT}`))
