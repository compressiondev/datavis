<script>

  async function getInfo () {
    const res = await fetch('.netlify/functions/siteimprove', {
			method: 'POST',
			body: JSON.stringify({
				endpoint: "sites"
			})
    })
    const json = await res.json()
    console.log(res)
    return json
  }

  let promise = getInfo()

</script>

{#await promise}
	<p>...waiting</p>
{:then result}
	<p>Successful GET from {result.msg.account_name}</p>
{/await}