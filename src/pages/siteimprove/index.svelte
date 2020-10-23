<script>

  async function getInfo () {
    const res = await fetch('.netlify/functions/siteimprove', {
			method: 'POST',
			body: JSON.stringify({
				endpoint: "sites"
			})
    })
    console.log(res)
    return res
  }

  let promise = getInfo()

</script>

{#await promise}
	<p>...waiting</p>
{:then result}
	<p>The result is {result}</p>
{/await}