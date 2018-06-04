import json
import time
import datetime
# Here go your api methods.
def add_transaction():
    data= json.loads(request.vars.data)
    for row in data:
        date = row['date'][:10]
        date = datetime.datetime.strptime(date,'%Y-%m-%d')
        q=((db.transactions.user_email == auth.user.email) & (db.transactions.description == row['description']) &
        (db.transactions.price == row['price']) & (db.transactions.date_made == date))
        if(db(q).select()):
            print "exists already"
        else:
            db.transactions.insert(
                date_made = date,
                price = row['price'],
                description = row['description'],
            )
    return 'ok'

def clear_table():
    db(db.transactions).delete()
    return 'ok'
