var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorraum",
      "name": "Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.5157883844029385,
        "pitch": 0.005141583367134217,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.9034326006518896,
          "pitch": 0.012155237878319625,
          "rotation": 0,
          "target": "1-wc"
        },
        {
          "yaw": 0.8011451882734821,
          "pitch": 0.02795872706376734,
          "rotation": 0,
          "target": "2-zimmer-1"
        },
        {
          "yaw": 1.7284943718540813,
          "pitch": 0.018573794452775516,
          "rotation": 0,
          "target": "3-gang"
        },
        {
          "yaw": -0.7046301246269842,
          "pitch": 0.008782310219794809,
          "rotation": 0,
          "target": "6-kochbereich"
        },
        {
          "yaw": -1.2871493656802269,
          "pitch": 0.006664171015508202,
          "rotation": 0,
          "target": "7-wohnbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.5473847346856369,
        "pitch": 0.018126324677753658,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.5473847346856369,
          "pitch": 0.018126324677753658,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zimmer-1",
      "name": "Zimmer 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.9067391035722654,
          "pitch": -0.015553669212692967,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gang",
      "name": "Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7774792078195567,
        "pitch": 0.008223936599559778,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 0.1759014521588611,
          "pitch": -0.006200388546997004,
          "rotation": 0,
          "target": "4-zimmer-2"
        },
        {
          "yaw": 1.5806468319306992,
          "pitch": 0.01117862688320237,
          "rotation": 0,
          "target": "5-bad"
        },
        {
          "yaw": -1.6170102042750312,
          "pitch": 0.009221489745044664,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-zimmer-2",
      "name": "Zimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.3084472787160877,
        "pitch": -0.11368508231250196,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.5558703715046,
          "pitch": 0.038903023404543546,
          "rotation": 0,
          "target": "3-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.5012925701240043,
        "pitch": 0.004946299113051111,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.4449370605626939,
          "pitch": 0.03066600186274826,
          "rotation": 0,
          "target": "3-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kochbereich",
      "name": "Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.396205123398623,
          "pitch": 0.0023176822840529354,
          "rotation": 0,
          "target": "7-wohnbereich"
        },
        {
          "yaw": 2.1695222559552336,
          "pitch": -0.007751523526671633,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wohnbereich",
      "name": "Wohnbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.118541609257999,
        "pitch": -0.000804371875508636,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.5380864329312907,
          "pitch": -0.012261519795131903,
          "rotation": 0,
          "target": "6-kochbereich"
        },
        {
          "yaw": 1.7002546550144473,
          "pitch": -0.01700188625608945,
          "rotation": 0,
          "target": "0-vorraum"
        },
        {
          "yaw": 3.118541609257999,
          "pitch": -0.000804371875508636,
          "rotation": 0,
          "target": "8-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.5805042796414632,
        "pitch": -0.01756106368306476,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.10213828215881193,
          "pitch": 0.021664832084312025,
          "rotation": 0,
          "target": "7-wohnbereich"
        },
        {
          "yaw": -1.5805042796414632,
          "pitch": -0.01756106368306476,
          "rotation": 0,
          "target": "9-dachterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dachterrasse",
      "name": "Dachterrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.5183696092728383,
        "pitch": -0.00938118765299123,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.6035587264034667,
          "pitch": 0.06709271681598139,
          "rotation": 0,
          "target": "8-terrasse"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
