const https = require('https');

https.get('https://api.github.com/repos/sahynmondal2-cmyk/EvenTora/actions/runs', {
  headers: {
    'User-Agent': 'node.js'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const runs = JSON.parse(data).workflow_runs;
    const latest = runs[0];
    console.log("Status:", latest.status, "Conclusion:", latest.conclusion);
    
    https.get(latest.jobs_url, { headers: { 'User-Agent': 'node.js' } }, (jres) => {
      let jdata = '';
      jres.on('data', chunk => jdata += chunk);
      jres.on('end', () => {
        const jobs = JSON.parse(jdata).jobs;
        console.log("Job status:", jobs[0].status, jobs[0].conclusion);
        console.log(jobs[0].html_url);
      });
    });
  });
});
