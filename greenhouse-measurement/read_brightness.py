#!/usr/bin/python
import smbus
import time
import MySQLdb
import log

db = MySQLdb.connect("localhost", "greenhouse", "green", "greenhouse_db")
curs=db.cursor()

# Constants taken from the datasheet

DEVICE     = 0x23 # Default device I2C address

POWER_DOWN = 0x00 # No active state
POWER_ON   = 0x01 # Power on
RESET      = 0x07 # Reset data register value

# Start measurement at 4 lx resolution. Time typically 16ms.
CONTINUOUS_LOW_RES_MODE = 0x13

# Start measurement at 1 lx resolution. Time typically 120ms
CONTINUOUS_HIGH_RES_MODE_1 = 0x10

# Start measurement at 0.5 lx resolution. Time typically 120ms
CONTINUOUS_HIGH_RES_MODE_2 = 0x11

# Start measurement at 1 lx resolution. Time typically 120ms
# Device is automatically set to Power Down after measurement.
ONE_TIME_HIGH_RES_MODE_1 = 0x20

# Start measurement at 0.5 lx resolution. Time typically 120ms
# Device is automatically set to Power Down after measurement.
ONE_TIME_HIGH_RES_MODE_2 = 0x21

# Start measurement at 1 lx resolution. Time typically 120ms
# Device is automatically set to Power Down after measurement.
ONE_TIME_LOW_RES_MODE = 0x23

#bus = smbus.SMBus(0) # Rev 1 Pi uses 0
bus = smbus.SMBus(1)  # Rev 2 Pi uses 1

def convertToNumber(data):
  # Simple function to convert 2 bytes of data
  # into a decimal number
  return ((data[1] + (256 * data[0])) / 1.2)

def readLight(addr=DEVICE):
  data = bus.read_i2c_block_data(addr, ONE_TIME_HIGH_RES_MODE_2)
  return convertToNumber(data)

def main():

    try:
        brightness = readLight()
        print "Light Level : " + str(brightness) + " lx"
        curs.execute ("INSERT INTO brightness (value) VALUES (%.2f);" % brightness)
        db.commit()
        write_log("read brightness value " + str(brightness) + "lx")
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()
        write_error("read brightness value failed")

if __name__=="__main__":
   main()
