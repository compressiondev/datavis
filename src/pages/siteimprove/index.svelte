<script>

  async function querySiteimprove (params) {
    let url = "/.netlify/functions/siteimprove"
    if (params) {
      url += "?" + Object.keys(params).map(key => `${key}=${params[key]}`).join("&")
    }
    return await fetch(url).then(res => res.json())
  }

  const sites = querySiteimprove({endpoint: "sites"})

  const query = querySiteimprove({endpoint: "settings"})
  
  sites.then(res => console.log(res))

</script>

<style>

</style>

<main class="container mx-auto prose">
  <h1 class="">Rapportverktøy for Siteimprove NTNU (alfaversjon)</h1>
  <h3>Sites</h3>
  {#await sites}
    <p>Loading sites...</p>
  {:then response}
    <table class="table-auto">
      <thead><tr><td>Site name</td><td>ID</td></tr></thead>
      <tbody>
      {#each response.msg.items as link}
        <tr><td>{link.site_name}</td><td>{link.id}</td></tr>
      {/each}
      </tbody>
    </table>
  {/await}

  <h3>Query response</h3>
  {#await query}
    <p>Loading query response...</p>
  {:then response}
    <pre>{ JSON.stringify(response, null, '\t') }</pre>
  {/await}
</main>