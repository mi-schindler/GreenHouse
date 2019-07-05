#!/usr/bin/env python
import MySQLdb

db = MySQLdb.connect("localhost", "greenhouse", "green", "greenhouse_db")
curs=db.cursor()

def write_log(message):
    try:
        sql="INSERT INTO log_message (message) VALUES ('" + message + "');"
        curs.execute (sql)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()
    return

def write_error(message):
    try:
        sql="INSERT INTO error_message (message) VALUES ('" + message + "');"
        curs.execute (sql)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()
    return