#include <libpq-fe.h>

void do_exit(PGconn *conn);
PGconn *connect();
void close(PGconn *conn);