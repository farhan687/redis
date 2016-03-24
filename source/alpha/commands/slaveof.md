The `SLAVEOF` command can change the replication settings of a slave on the fly.
If a Redis server is already acting as slave, the command `SLAVEOF` NO ONE will
turn off the replication, turning the Redis server into a MASTER.
In the proper form `SLAVEOF` hostname port will make the server a slave of
another server listening at the specified hostname and port.

If a server is already a slave of some master, `SLAVEOF` hostname port will stop
the replication against the old server and start the synchronization against the
new one, discarding the old dataset.

The form `SLAVEOF` NO ONE will stop replication, turning the server into a
MASTER, but will not discard the replication.
So, if the old master stops working, it is possible to turn the slave into a
master and set the application to use this new master in read/write.
Later when the other Redis server is fixed, it can be reconfigured to work as a
slave.

@return

@simple-string-reply
