const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected');
  
  const traefikYaml = [
    'http:',
    '  routers:',
    '    https-0-r80oo8wwo4wgkk8sos40w44w:',
    '      entryPoints:',
    '        - https',
    '      rule: "Host(`r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io`)"',
    '      service: https-0-r80oo8wwo4wgkk8sos40w44w',
    '      tls:',
    '        certResolver: letsencrypt',
    '      middlewares:',
    '        - gzip',
    '    http-redirect-r80oo8wwo4wgkk8sos40w44w:',
    '      entryPoints:',
    '        - http',
    '      rule: "Host(`r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io`)"',
    '      service: https-0-r80oo8wwo4wgkk8sos40w44w',
    '      middlewares:',
    '        - redirect-to-https',
    '        - gzip',
    '  services:',
    '    https-0-r80oo8wwo4wgkk8sos40w44w:',
    '      loadBalancer:',
    '        servers:',
    '          - url: "http://r80oo8wwo4wgkk8sos40w44w-181848229375:3000"',
    '  middlewares:',
    '    redirect-to-https:',
    '      redirectScheme:',
    '        scheme: https',
    '    gzip:',
    '      compress: {}',
  ].join('\n');

  const b64 = Buffer.from(traefikYaml).toString('base64');
  
  const cmd = 'echo "' + b64 + '" | base64 -d > /data/coolify/proxy/dynamic/liga-de-quebrada.yaml && echo "=== FILE WRITTEN ===" && cat /data/coolify/proxy/dynamic/liga-de-quebrada.yaml && sleep 5 && echo "=== HTTPS TEST ===" && curl -sk -o /dev/null -w "%{http_code}" https://r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io/ && echo "" && echo "=== HTTP TEST ===" && curl -s -o /dev/null -w "%{http_code}" http://r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io/ && echo ""';

  c.exec(cmd, (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
