<script>

  async function getInfo () {
    return await fetch('.netlify/functions/siteimprove', {
			method: 'POST',
			body: JSON.stringify({
				endpoint: "sites"
			})
    })
  }

  let promise = getInfo()

</script>

{#await promise}
	<p>...waiting</p>
{:then result}
	<p>The result is {result}</p>
{/await}