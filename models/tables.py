# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.

import datetime

def get_user_email():
    return auth.user.email if auth.user is not None else None


db.define_table('transactions',
                Field('user_email', default=get_user_email()),
                Field('date_made', 'datetime', requires = IS_DATE(format=('%d-%m-%Y'))),
                Field('price', 'decimal(8,2)'),
                Field('description', 'text')
                )

db.transactions.user_email.writable = False
db.transactions.user_email.readable = False
db.transactions.date_made.writable = db.transactions.date_made.readable = False
db.transactions.id.writable = db.transactions.id.readable = False
db.transactions.price.writable = db.transactions.price.readable = False
db.transactions.description.writable = db.transactions.description.readable = False


# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)
