define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API-Information",
    "name": "Info",
    "group": "0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app",
            "description": "<p>The name of the backend-app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The backend-version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "config",
            "description": "<p>Various configuration parameters (see Example)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"app\": \"bnk-core\",\n  \"version\": \"1.5.2-r3\",\n  \"config\": {\n    \"zxcvbn_minScore\": 4\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "0"
  },
  {
    "type": "post",
    "url": "/admin/addMoney",
    "title": "Add money to a user-account",
    "name": "AddMoney",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>The user to whom the money is sent</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>The amount of money in eurocents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Whether the transaction was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReceiverNotFound",
            "description": "<p>The receiving user can't be found / Money is being sent to a terminal-account (not possible)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Fields are missing or the <code>value</code> is not a positive integer</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAdmin",
            "description": "<p>The user to which the session belongs can't access admin functions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ReceiverNotFound",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"ReceiverNotFound\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": {\n     \"code\": 400,\n     \"message\": \"BadRequest\"\n   }\n }",
          "type": "json"
        },
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAdmin\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/auth/getToken",
    "title": "Request an api-token",
    "name": "GetToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "validFor",
            "description": "<p>How long the token is valid (in ms)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"ey [...] es0-1Qw\",\n  \"validFor\": 86400000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsernamePasswordMissing",
            "description": "<p>Either username or password wasn't provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsernamePasswordWrong",
            "description": "<p>Username and password don't match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UsernamePasswordMissing",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"UsernamePasswordMissing\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UsernamePasswordWrong",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"UsernamePasswordWrong\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/revoke_tokens",
    "title": "Revoke all Tokens",
    "name": "RevokeTokens",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Whether the revocation of all issued was successfull</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_auth.js",
    "groupTitle": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/balance",
    "title": "Get the users current balance",
    "name": "Balance",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance",
            "description": "<p>The current user's settings in eurocents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"balance\": 1299\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/change_password",
    "title": "Change the users password",
    "name": "ChangePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>The new password to set</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>The old user-password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Whether the password-change was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordTooWeak",
            "description": "<p>New password doesn't meet expectations</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordWrong",
            "description": "<p>The old password is wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Fields are missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PasswordTooWeak",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"PasswordTooWeak\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "PasswordWrong",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"PasswordWrong\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": {\n     \"code\": 400,\n     \"message\": \"BadRequest\"\n   }\n }",
          "type": "json"
        },
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/new",
    "title": "Create a new User-Account",
    "name": "New",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recoveryMethod",
            "description": "<p>Preferred recovery-method: <code>phrase</code> / <code>email</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Nescessary if recovery-method is <code>email</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Whether the account-creation was successful.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phrase",
            "description": "<p>If chosen, the recovery-phrase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: E-Mail recovery",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: Word-phrase recovery",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"phrase\": [\"animal\", \"dad\", \"wildness\", \"...\", \"monster\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FieldsMissing",
            "description": "<p>An account with this username already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserExists",
            "description": "<p>An account with this username already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordTooWeak",
            "description": "<p>Password doesn't meet expectations</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecoveryMethodInvalid",
            "description": "<p>The provided recovery-method is not known</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailMissingInvalid",
            "description": "<p>E-Mail adress is missing or invalid (if email-based recovery is chosen)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsernameInvalid",
            "description": "<p>Username contains illegal characters (eg. underscores, spaces)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FieldsMissing",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"FieldsMissing\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserExists",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"UserExists\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "PasswordTooWeak",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"PasswordTooWeak\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "RecoveryMethodInvalid",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"RecoveryMethodInvalid\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "EmailMissingInvalid",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"EmailMissingInvalid\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UsernameInvalid",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"UsernameInvalid\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/send",
    "title": "Perform a transaction",
    "name": "SendMoney",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>The user to whom the money is sent</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>The amount of money in eurocents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Whether the transaction was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "newBalance",
            "description": "<p>The balance after the transaction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"newBalance\": 4089\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReceiverNotFound",
            "description": "<p>The receiving user can't be found / Money is being sent to a terminal-account (not possible)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BalanceInsufficient",
            "description": "<p>The sender's account balance is insufficient to perform the transaction.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Fields are missing or the <code>value</code> is not a positive integer</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ReceiverNotFound",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"ReceiverNotFound\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "BalanceInsufficient",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"BalanceInsufficient\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": {\n     \"code\": 400,\n     \"message\": \"BadRequest\"\n   }\n }",
          "type": "json"
        },
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/settings",
    "title": "Get the users current settings",
    "name": "SettingsGet",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "transactionLogging",
            "description": "<p>Whether transaction-data should be logged.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recoveryMethod",
            "description": "<p>Recover-method to use (<code>email</code> / <code>phrase</code>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>E-Mail Adress used for recovery</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"transactionLogging\": true,\n  \"recoveryMethod\": \"email\",\n  \"email\": \"your.mail@provider.tld\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/settings",
    "title": "Set user-settings",
    "name": "SettingsPost",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "transactionLogging",
            "description": "<p>Whether transaction-data should be logged.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recoveryMethod",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>To change the e-mail (nescessary for recovery method &quot;email&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>If the settings were saved successfully.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phrase",
            "description": "<p>If the recovery-method was changed to <code>phrase</code>, provide the user with a new recovery phrase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Switched recovery from \"email\" to \"phrase\"",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"phrase\": [\"animal\", \"dad\", \"wildness\", \"...\", \"monster\"]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidSettings",
            "description": "<p>Settings are invalid / unknown keys given. Errors are in key <code>errors</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidSettings",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"success\": false,\n  \"errors\": [\"error_1\", \"error_2\"]\n}",
          "type": "json"
        },
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/transactions",
    "title": "Get the users transactions",
    "name": "Transactions",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions[i]",
            "description": "<p>.sender Sender username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transcations[i]",
            "description": "<p>.timestamp Transaction timestamp (Unix in ms)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Transaction-Logging enabled",
          "content": "HTTP/1.1 200 OK\n{\n  \"transactions\": [\n    {\n      \"sender\": \"alice\",\n      \"receiver\": \"steve\",\n      \"value\": 275,\n      \"timestamp\": 881928732657\n    },\n    {\n      \"sender\": \"jon\",\n      \"receiver\": \"terminal_mainhall\",\n      \"value\": 170,\n      \"timestamp\": 1715369892847\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response Transaction-Logging disabled",
          "content": "HTTP/1.1 200 OK\n{\n  \"transactions\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api_user.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API-token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvided",
            "description": "<p>No token was given (via <code>Query</code> / <code>Body</code>)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>The provided token is invalid or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user to which the session belongs can't be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoTokenProvided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"NoTokenProvided\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NotAuthenticated",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": {\n    \"code\": 401,\n    \"message\": \"NotAuthenticated\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"code\": 500,\n    \"message\": \"UserNotFound\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
