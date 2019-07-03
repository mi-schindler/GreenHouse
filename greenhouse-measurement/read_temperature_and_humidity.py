#!/usr/bin/env python
import Adafruit_DHT
import MySQLdb
import log

sensor = Adafruit_DHT.AM2302
pin = 4
db = MySQLdb.connect("localhost", "greenhouse", "green", "greenhouse_db")
curs=db.cursor()

try:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    curs.execute ("INSERT INTO temperature (value) VALUES (%.2f);" % temperature)
    curs.execute ("INSERT INTO humidity (value) VALUES (%.2f);" % humidity)
    db.commit()
    write_log("read temperature value " + str(temperature) + " and humidity value " + str(humidity))
    print("Done")
except:
    print("Error. Rolling back.")
    db.rollback()
    write_error("read temperature and humidity value failed")
