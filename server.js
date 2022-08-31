const { WHPPEndpoint, SfuType } = require("@eyevinn/wrtc-egress");

const endpoint = new WHPPEndpoint({
  port: parseInt(process.env.PORT || "8001"),
  extPort: parseInt(process.env.EXT_PORT || "8001"),
  hostname: process.env.HOSTNAME,
  useHttps: process.env.USE_HTTPS && process.env.USE_HTTPS === "true",
  prefix: process.env.PREFIX || "/whpp",
  sfuAdapter: SfuType.smb,
  sfuOptions: { smbUrl: process.env.SMB_URL || "http://localhost:8080/conferences/" },
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
});
endpoint.listen();