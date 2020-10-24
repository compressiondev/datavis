<script>

  async function getInfo () {
    const res = await fetch('/.netlify/functions/siteimprove')
    
    const ret = await res.text()

    console.log(ret)

    return ret
  }

  getInfo()

</script>

See console