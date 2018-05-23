# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.

import date

def get_user_email():
    return auth.user.email if auth.user is not None else None


db.define_table('transaction',
                Field('user_email', default=get_user_email()),
                Field('date_made', 'date'),
                Field('price', 'float'),
                Field('description', 'text')
                )

db.transaction.user_email.writable = False
db.transaction.user_email.readable = False
db.transaction.date_made.writable = db.transaction.date_made.readable = False
db.transaction.id.writable = db.transaction.id.readable = False
db.transaction.price.writable = db.transaction.price.readable = False
db.transaction.description.writable = db.transaction.description.readable = False


# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)
