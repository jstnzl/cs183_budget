# Here go your api methods.
def add_transaction():
    #print request.vars.table
    for i in range (0,1):
        print request.vars.table[i]
        #print row
        # t_id = db.transactions.insert(
        #     date = table[row][0],
        #     price = table[row][1],
        #     description = table[row][2]
        # )
    return 'ok'
