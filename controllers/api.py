import json
import time
import datetime
# Here go your api methods.
def add_transaction():
    data= json.loads(request.vars.data)
    for row in data:
        date = row['date'][:10]
        q=((db.transactions.user_email == auth.user.email) & (db.transactions.description == row['description']))
        if(db(q).select()):
            print "exists already"
        else:
            db.transactions.insert(
                date_made = datetime.datetime.strptime(date,'%Y-%m-%d'),
                price = row['price'],
                description = row['description'],
            )
    return 'ok'

def clear_table():
    db(db.transactions).delete()
    return 'ok'
