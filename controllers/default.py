# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

# -------------------------------------------------------------------------
# This is a sample controller
# - index is the default action of any application
# - user is required for authentication and authorization
# - download is for downloading files uploaded in the db (does streaming)
# -------------------------------------------------------------------------


def index():
    
    logger.info('The session is: %r' % session)
    transactions = None
    if auth.user is not None:
        transactions = db(db.transactions.user_email == auth.user.email).select(db.transactions.ALL, orderby=~db.transactions.date_made)
        return dict(transactions=transactions)
    else:
        transactions = db().select(db.transactions.ALL, orderby=~db.transactions.date_made)
        print transactions
        return dict(transactions=transactions)

def statistics():
    transactions = None
    if auth.user is not None:
        transactions = db(db.transactions.user_email == auth.user.email).select(db.transactions.ALL, orderby=~db.transactions.date_made)
        return dict(transactions=transactions)
    else:
        transactions = db().select(db.transactions.ALL, orderby=~db.transactions.date_made)
        print transactions
        return dict(transactions=transactions)
