@@ -1,11 +1,18 @@
name = "cf-worker-ws-dev"
name = "server-alb" # todo
#name = "cf-worker-connect-test" # todo
#main = "test/worker/cf-cdn-cgi-trace2.js"
#main = "test/worker/worker-connect-test.js"
main = "_worker.js"
compatibility_date = "2023-05-26"
# node_compat = true
workers_dev = true
[[routes]]
pattern = "alb1.yadinew.us.kg"
custom_domain = true

[vars]
# PROXYIP = "211.230.110.231:50008"
UUID = "1b6c1745-992e-4aac-8685-266c090e50ea"
# SOCKS5 = "127.0.0.1:1080"
# SOCKS5_RELAY = "true"
# UUID = "d342d11e-d424-4583-b36e-524ab1f0afa4"
# PROXYIP = "1.2.3.4"
# DNS_RESOLVER_URL = "https://cloudflare-dns.com/dns-query"
# NODE_ID = "1"
# API_TOKEN = "example_dev_token"
# API_HOST = "api.v2board.com"
UUID = "c66b883c-ff36-404b-9fb4-66cbd00bfdf1"
