const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected');
  c.exec([
    'find / -name "liga-de-quebrada" -type d 2>/dev/null | head -10',
    'pm2 show liga-de-quebrada 2>/dev/null | grep "script path\\|exec cwd\\|out log"',
    'docker logs r80oo8wwo4wgkk8sos40w44w-181848229375 --tail 30 2>&1',
    'curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 2>/dev/null || echo "3001 not reachable"',
    'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null || echo "3000 not reachable"'
  ].join(' ; echo "---SEPARATOR---" ; '), (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
