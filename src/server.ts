import 'dotenv/config';
import app from './app'


app.listen(process.env.PORT || 3334, () => console.log(`Server listen on ${process.env.PORT}`))
