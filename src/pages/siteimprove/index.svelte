<script>

  async function getInfo () {
    const res = await fetch('.netlify/functions/siteimprove', {
			method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "endpoint": "sites"
      }),
    })
    return res.json()
  }

  getInfo().then(response => console.log(response))

</script>

See console