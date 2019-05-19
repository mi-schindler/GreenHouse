#!/usr/bin/python
import sys

import Adafruit_DHT

# set up sensor connection
sensor = Adafruit_DHT.AM2302
pin = 17

# read sensor data
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

# print result to console
if humidity is not None and temperature is not None:
    print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
else:
    print('Failed to get reading. Try again!')
    sys.exit(1)