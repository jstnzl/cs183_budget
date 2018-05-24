import json
# Here go your api methods.
def add_transaction():
    data= json.loads(request.vars.data)
    for row in data:
        print row['date']
        t_id = db.transactions.insert(
            date = row['date'],
            price = row['price'],
            description = row['description']
        )
    return 'ok'
