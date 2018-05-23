# Here go your api methods.

def get_memos():
    start_idx = int(request.vars.start_idx) if request.vars.start_idx is not None else 0
    end_idx = int(request.vars.end_idx) if request.vars.end_idx is not None else 0
    checklists = []
    public_checklists = []
    has_more = False
    pub_has_more = False
    auth_email= None
    logged_in = auth.user is not None
    if logged_in:
        auth_email = auth.user.email
        rows = db((db.checklist.is_public==True) | (db.checklist.user_email == auth.user.email)).select(db.checklist.ALL, limitby=(start_idx, end_idx + 1))
        for i, r in enumerate(rows):
            if i < end_idx - start_idx:
                t = dict(
                    id = r.id,
                    user_email = r.user_email,
                    title = r.title,
                    memo = r.memo,
                    is_public = r.is_public,
                    is_being_edited = r.is_being_edited
                )
                checklists.append(t)
            else:
                has_more = True
    else:
        pub_rows = db(db.checklist.is_public==True).select(db.checklist.ALL, limitby=(start_idx, end_idx + 1))
        for i, r in enumerate(pub_rows):
            if i < end_idx - start_idx:
                t = dict(
                    id = r.id,
                    user_email = r.user_email,
                    title = r.title,
                    memo = r.memo,
                    is_public = r.is_public,
                    is_being_edited = r.is_being_edited
                )
                public_checklists.append(t)
            else:
                pub_has_more = True
    return response.json(dict(
        checklists=checklists,
        public_checklists=public_checklists,
        auth_email=auth_email,
        logged_in=logged_in,
        has_more=has_more,
        pub_has_more=pub_has_more,
    ))

@auth.requires_signature()
def add_memo():
    t_id = db.checklist.insert(
        title = request.vars.title,
        memo = request.vars.body,
    )
    t = db.checklist(t_id)
    return response.json(dict(checklist=t))

@auth.requires_login()
@auth.requires_signature()
def delete_memo():
    q = ((db.checklist.user_email == auth.user.email) &
         (db.checklist.id == request.vars.memo_id))
    db(q).delete()
    return "ok"

@auth.requires_login()
@auth.requires_signature()
def check_visibility():
    q = ((db.checklist.user_email == auth.user.email) &
         (db.checklist.id == request.vars.memo_id))
    cl = db(q).select().first()
    if cl.is_public:
        return True
    else:
        return False

@auth.requires_login()
@auth.requires_signature()
def toggle_visibility():
    q = ((db.checklist.user_email == auth.user.email) &
         (db.checklist.id == request.vars.memo_id))
    cl = db(q).select().first()
    if cl.is_public:
        db(q).update(is_public= False)
    else:
        db(q).update(is_public= True)
    return "ok"

@auth.requires_login()
@auth.requires_signature()
def edit_memo():
    q = ((db.checklist.user_email == auth.user.email) &
         (db.checklist.id == request.vars.memo_id))
    db(q).update(
        title = request.vars.title,
        memo = request.vars.body,
    )
    return "ok"
