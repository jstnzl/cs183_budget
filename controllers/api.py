import json
import time
import datetime
# Here go your api methods.
def add_transaction():
    data= json.loads(request.vars.data)
    for row in data:
        date = row['date'][:10]
        t_id = db.transactions.insert(
            date_made = datetime.datetime.strptime(date,'%Y-%m-%d'),
            price = row['price'],
            description = row['description']
        )
    return 'ok'
