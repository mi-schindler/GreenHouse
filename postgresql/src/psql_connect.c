#include "psql_connect.h"

void init(PGconn *conn);

void do_exit(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

PGconn *connect()
{
    PGconn *conn = PQconnectdb("user=pi dbname=greenhouse_db");

    if (PQstatus(conn) == CONNECTION_BAD) {

        fprintf(stderr, "Connection to database failed: %s\n",
            PQerrorMessage(conn));
        do_exit(conn);
    }

    init(conn);

    return conn;
}

void init(PGconn *conn)
{
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK) {

        printf("BEGIN command failed\n");
        PQclear(res);
        do_exit(conn);
    }

     PQclear(res);
}

void close(PGconn *conn)
{
    PGresult *res = PQexec(conn, "COMMIT");

    if (PQresultStatus(res) != PGRES_COMMAND_OK) {

        printf("COMMIT command failed\n");
        PQclear(res);
        do_exit(conn);
    }

    PQclear(res);
    PQfinish(conn);
}