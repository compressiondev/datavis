<script>

  async function querySiteimprove (params) {
    let url = "/.netlify/functions/siteimprove"
    if (params) {
      url += "?" + Object.keys(params).map(key => `${key}=${params[key]}`).join("&")
    }
    return await fetch(url).then(res => res.json())
  }

  const sites = querySiteimprove({endpoint: "sites"})

  const query = querySiteimprove({endpoint: "sites/1351807894/analytics/overview/groups?page_size=500"})
  
  sites.then(res => console.log(res))

</script>

<style>

</style>


<div class="container mx-auto bg-white p-12">
  
  <header class="">
    <h1 class="">Rapportverktøy for Siteimprove NTNU (alfaversjon)</h1>
  </header>
  
  
  <main class="">
    <h3 class="">Sites</h3>
    {#await sites}
      <p>Loading sites...</p>
    {:then response}
      <table class="border rounded">
        <thead><tr><td>Site name</td><td>ID</td></tr></thead>
        <tbody>
        {#each response.msg.items as link}
          <tr class="bg-white odd:bg-gray-200"><td>{link.site_name}</td><td>{link.id}</td></tr>
        {/each}
        </tbody>
      </table>
    {/await}
  
    <h3>Query response</h3>
    {#await query}
      <p>Loading query response...</p>
    {:then response}
      <!-- <pre>{ JSON.stringify(response, null, '  ') }</pre> -->


    {#each response.msg.items as group}
      <div>
        <input type="checkbox" name="group" value="{group.id}">
        <label for="{group.id}">{group.group_name}</label>
      </div>
    {/each}

    {/await}
  </main>

</div>