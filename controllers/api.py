# Here go your api methods.
def add_transaction():
    t_id = db.transactions.insert(
        date = request.vars.date,
        price = request.vars.price,
        description = request.vars.description
    )
    return 'ok'
