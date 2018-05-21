import random


def index():
    pass

def get_checklists():
    start_idx = int(request.vars.start_idx) if request.vars.start_idx is not None else 0
    end_idx = int(request.vars.end_idx) if request.vars.end_idx is not None else 0
    checklists = []
    has_more = False
    rows = db().select(db.checklist.ALL, limitby=(start_idx, end_idx + 1))
    for i, r in enumerate(rows):
        if i < end_idx - start_idx:
            t = dict(
                id=r.id,
                is_public=r.is_public,
                user_email=r.user_email,
                title=r.title,
                memo=r.memo,
            )
            checklists.append(t)
        else:
            has_more = True
    logged_in = auth.user
    if auth.user is not None:
        return response.json(dict(
            checklists=checklists,
            logged_in=logged_in,
            has_more=has_more,
            auth_user = auth.user.email
            ))
    else:
        return response.json(dict(
            checklists=checklists,
            logged_in=logged_in,
            has_more=has_more,
        ))


@auth.requires_signature()
def add_checklist():
    t_id = db.checklist.insert(
        is_public=request.vars.is_public,
        title=request.vars.title,
        memo=request.vars.memo
    )
    t = db.checklist(t_id)
    return response.json(dict(checklist=t))


@auth.requires_signature()
def del_checklist():
    db(db.checklist.id == request.vars.checklist_id).delete()
    return "ok"


@auth.requires_signature()
def toggle_public():
    elem = db(db.checklist.id == request.vars.checklist_id).select().first()
    if elem.is_public:
        db(db.checklist.id == request.vars.checklist_id).update(is_public = False)
    else:
        db(db.checklist.id == request.vars.checklist_id).update(is_public = True)
    redirect(URL('default', 'index'))


@auth.requires_signature()
def edit_checklist():
    element = db(db.checklist.id == request.vars.checklist_id)
    t_id = element.update(
        title=request.vars.edit_title,
        memo=request.vars.edit_memo
    )
    t = db.checklist(t_id)
    return response.json(dict(checklist=t))
    redirect(URL('default', 'index'))



