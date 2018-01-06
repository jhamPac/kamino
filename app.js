const Twitter = require('twitter')
require('dotenv').config()

// setup twitter client
const twitterClient = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN_KEY,
  access_token_secret: process.env.TOKEN_SECRET,
})

let params = {
  q: '#scottsdale',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

twitterClient.get('search/tweets', params)
  .then(result => console.log(result))
  .catch(error => console.log(error))
