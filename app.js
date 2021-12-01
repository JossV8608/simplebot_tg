{
  "name": "Simplebot Deltachat Telegram Bridge",
  "description": "Deltachat bot to comunicate with Telegram users",
  "keywords": [
    "simplebot",
    "deltachat",
    "telegram",
    "bridge"
  ],
  "success_url": "https://delta.chat",
  "website": "https://github.com/Nenirey/simplebot_tg",
  "repository": "https://github.com/Nenirey/simplebot_tg",
  "env": {
    "ADMIN": {
      "description": "Your own email as bot administrator",
      "value": ""
    },    
    "ADDR": {
      "description": "The email bot with imap enabled",
      "value": ""
    },
    "PASSWORD": {
      "description": "The email bot password",
      "value": ""
    },
    "API_ID": {
      "description": "Get this value from https://my.telegram.org",
      "value": ""
    },
    "API_HASH": {
      "description": "Get this value from https://my.telegram.org",
      "value": ""
    }
  },
  "addons": [
  ],
  "buildpacks": [{
    "url": "heroku/python"
  }],
  "formation": {
    "worker": {
      "quantity": 1,
      "size": "free"
    }
  }
}