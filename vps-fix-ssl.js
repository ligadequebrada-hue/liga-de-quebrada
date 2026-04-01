const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected');
  const composeDir = '/data/coolify/applications/r80oo8wwo4wgkk8sos40w44w';
  
  // Read current compose, add HTTPS labels, recreate
  const script = `
cd ${composeDir}
cp docker-compose.yml docker-compose.yml.bak

# Use python3 to add HTTPS labels
python3 << 'PYEOF'
import yaml, sys

with open('docker-compose.yml', 'r') as f:
    data = yaml.safe_load(f)

svc = data['services']['r80oo8wwo4wgkk8sos40w44w-140244904289']
labels = svc.get('labels', [])

# Check if HTTPS router already exists
has_https = any('https-0-r80oo8wwo4wgkk8sos40w44w' in str(l) for l in labels)
if has_https:
    print('HTTPS labels already present')
    sys.exit(0)

# Add HTTPS router labels
new_labels = [
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.entryPoints=https',
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.rule=Host(\`r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io\`) && PathPrefix(\`/\`)',
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.service=https-0-r80oo8wwo4wgkk8sos40w44w',
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.tls=true',
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.tls.certresolver=letsencrypt',
    'traefik.http.routers.https-0-r80oo8wwo4wgkk8sos40w44w.middlewares=gzip',
    'traefik.http.services.https-0-r80oo8wwo4wgkk8sos40w44w.loadbalancer.server.port=3000',
    'traefik.http.routers.http-0-r80oo8wwo4wgkk8sos40w44w.middlewares=redirect-to-https,gzip',
]
labels.extend(new_labels)
svc['labels'] = labels

with open('docker-compose.yml', 'w') as f:
    yaml.dump(data, f, default_flow_style=False)

print('HTTPS labels added')
PYEOF

echo "=== RECREATING ==="
docker compose up -d --force-recreate 2>&1
sleep 10
echo "=== HTTPS TEST ==="
curl -sk -o /dev/null -w "%{http_code}" https://r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io/
echo ""
echo "=== HTTP TEST ==="
curl -s -o /dev/null -w "%{http_code}" http://r80oo8wwo4wgkk8sos40w44w.187.77.44.40.sslip.io/
echo ""
`;

  c.exec(script, (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
