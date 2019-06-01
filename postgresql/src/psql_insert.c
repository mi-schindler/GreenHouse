#include "psql_connect.h"

void insert_temperature(const float temperature)
{
    PGconn *conn = connect();
    char *statement = NULL;
    
    asprintf(&statement, "INSERT INTO temperature(ts,value) VALUES(current_timestamp,%d", temperature);
    PGresult *res = PQexec(conn, statement);

    free(statement);

    if (PQresultStatus(res) != PGRES_COMMAND_OK) {

        printf("INSERT command failed\n");
        PQclear(res);
        do_exit(conn);
    }

    close(conn);
}