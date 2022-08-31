# docker-wrtc-whpp

Docker container of a WHPP endpoint based on `@eyevinn/wrtc-egress` library.

Example docker-compose file:

```
version: "3.7"

services:
  egress:
    image: eyevinntechnology/wrtc-whpp:latest
    network_mode: "host"
    environment:
      - PORT=8200
      - EXT_PORT=8200
      - SMB_URL=http://<SMB-HOST>:8280/conferences/
```

## Configuration

Default configuration can be changed by setting these environment variables:
- `PORT`
- `EXT_PORT`
- `HOSTNAME`
- `USE_HTTPS`
- `SMB_URL`
- `PREFIX` (default is `/whpp`)
