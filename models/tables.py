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


db.define_table('checklist',
                Field('user_email', default=get_user_email()),
                Field('title'),
                Field('is_public', 'boolean', default=False),
                Field('is_being_edited', 'boolean', default=False),
                Field('memo', 'text'),
                Field('updated_on', 'datetime', update=datetime.datetime.utcnow())
                )

db.checklist.user_email.writable = False
db.checklist.user_email.readable = False
db.checklist.updated_on.writable = db.checklist.updated_on.readable = False
db.checklist.id.writable = db.checklist.id.readable = False
db.checklist.is_public.writable = db.checklist.is_public.readable = False
db.checklist.is_being_edited.writable = db.checklist.is_being_edited.readable = False


# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)

# Storage objects make life easy.
