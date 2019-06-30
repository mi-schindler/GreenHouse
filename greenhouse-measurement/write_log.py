import MySQLdb

db = MySQLdb.connect("localhost", "root", "passwort", "greenhouse_db")
curs=db.cursor()

def write_log_message(message):
    try:
        print("writing log message..")
        curs.execute ("INSERT INTO log_message (message) VALUES (%s);" % message)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()

def write_error_message(message):
    try:
        print("writing error message..")
        curs.execute ("INSERT INTO error_message (message) VALUES (%s);" % message)
        db.commit()
        print("Done")
    except:
        print("Error. Rolling back.")
        db.rollback()