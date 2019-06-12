#!/usr/bin/env python
import Adafruit_DHT
import MySQLdb

sensor = Adafruit_DHT.AM2302
pin = 17
db = MySQLdb.connect("localhost", "root", "passwort", "greenhouse_db")
curs=db.cursor()

try:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    curs.execute ("INSERT INTO temperature (value) VALUES (%.2f);" % temperature)
    curs.execute ("INSERT INTO humidity (value) VALUES (%.2f);" % humidity)
    db.commit()
    print("Done")
except:
    print("Error. Rolling back.")
    db.rollback()
