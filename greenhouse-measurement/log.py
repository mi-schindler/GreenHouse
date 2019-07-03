#!/usr/bin/env python
import MySQLdb

db = MySQLdb.connect("localhost", "greenhouse", "green", "greenhouse_db")
curs=db.cursor()

def write_log(message):
    try:
        curs.execute ("INSERT INTO log_message (message) VALUES (%s);" % message)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()
    return

def write_error(message):
    try:
        curs.execute ("INSERT INTO error_message (message) VALUES (%s);" % message)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()
    return