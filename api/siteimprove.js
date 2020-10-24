const fetch = require('node-fetch')

exports.handler = async function (event) {
  
  // const query = event ? JSON.parse(event.body) : { "endpoint": "" }
  // console.log(query)

  try {
    // const response = await fetch(`https://api.siteimprove.com/v2/${query.endpoint}`, {
    const response = await fetch(`https://api.siteimprove.com/v2/`, {
      headers: { 
        Accept: 'application/json',
        Authorization: 'Basic ' + Buffer.from(process.env.SITEIMPROVE_USERNAME + ":" + process.env.SITEIMPROVE_API_KEY).toString('base64')
      },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        msg: data
      }),
    }
  } catch (error) {
    console.log(error) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
